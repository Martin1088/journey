import {
  Component, PLATFORM_ID, afterNextRender, computed, effect, inject, signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ChapterId } from '../content/model';
import { CHAPTER_ORDER, link } from '../content/paths';
import { AnnouncerService } from '../shared/announcer.service';
import { LangService } from '../shared/lang.service';
import { PlatformFilter, PrefsService } from '../shared/prefs.service';
import { SearchService } from '../shared/search.service';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-search-page',
  imports: [RouterLink, TranslatePipe],
  template: `
    <div class="wrap">
      <header class="page-head">
        <h1 id="main-heading" tabindex="-1">{{ 'search.title' | translate }}</h1>
        <p class="lead">{{ 'search.intro' | translate }}</p>
      </header>

      <form class="search-form" role="search" (submit)="$event.preventDefault()">
        <label for="q">{{ 'search.label' | translate }}</label>
        <div class="search-row">
          <input id="q" name="q" type="search" autocomplete="off" [value]="query()"
                 (input)="onQuery($event)" aria-describedby="search-status">
        </div>

        @if (interactive()) {
          <div class="filters">
            <fieldset>
              <legend>{{ 'search.chapter' | translate }}</legend>
              @for (c of chapterOptions(); track c.id) {
                <span class="chip">
                  <input type="radio" name="chapter" [id]="'c-' + c.id" [checked]="chapter() === c.id"
                         (change)="setChapter(c.id)">
                  <label [for]="'c-' + c.id">{{ c.label }}</label>
                </span>
              }
            </fieldset>
            <fieldset>
              <legend>{{ 'toolbar.platform' | translate }}</legend>
              @for (p of platforms; track p) {
                <span class="chip">
                  <input type="radio" name="platform" [id]="'sp-' + p" [checked]="prefs.platform() === p"
                         (change)="setPlatform(p)">
                  <label [for]="'sp-' + p">{{ 'toolbar.' + p | translate }}</label>
                </span>
              }
            </fieldset>
          </div>
        }
      </form>

      <!-- Hidden by CSS once JavaScript runs (html.js, set in index.html). -->
      <p class="why nojs-only">{{ 'search.noJs' | translate }}</p>

      <p id="search-status" class="tip-status">{{ statusText() }}</p>

      @if (!query().trim()) {
        <p>{{ 'search.examples' | translate }}:
          @for (ex of examples; track ex; let last = $last) {
            <button type="button" class="link-btn" (click)="setQuery(ex)">{{ ex }}</button>@if (!last) {, }
          }
        </p>
      }

      <ol class="results">
        @for (h of hits(); track h.doc.fragment) {
          <li>
            <p class="result-meta">
              <span [class]="'tag ' + (h.doc.kind === 'tip' ? 'tag-' + h.doc.platform : 'tag-section')">
                {{ (h.doc.kind === 'tip' ? 'search.tip' : 'search.section') | translate }}
              </span>
              {{ h.doc.chapterTitle }} › {{ h.doc.sectionTitle }}
            </p>
            <h2 class="result-title">
              <a [routerLink]="chapterLink(h.doc.chapterId)" [fragment]="h.doc.fragment">{{ h.doc.title }}</a>
            </h2>
            <p class="snippet">@for (s of h.snippet; track $index) {@if (s.hit) {<mark>{{ s.text }}</mark>} @else {<span>{{ s.text }}</span>}}</p>
          </li>
        }
      </ol>
    </div>
  `,
})
export class SearchPage {
  private readonly langs = inject(LangService);
  private readonly search = inject(SearchService);
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly announcer = inject(AnnouncerService);
  protected readonly prefs = inject(PrefsService);

  protected readonly platforms: PlatformFilter[] = ['all', 'windows', 'linux', 'mac'];
  protected readonly examples = ['psql', 'Fenrir', 'PowerShell', 'kubectl', 'NVDA', 'Git'];
  protected readonly interactive = signal(false);
  protected readonly query = signal('');
  protected readonly chapter = signal<ChapterId | 'all'>('all');

  protected readonly chapterOptions = computed(() => [
    { id: 'all' as const, label: this.langs.t('search.allChapters') },
    ...CHAPTER_ORDER.map((id) => ({ id, label: this.langs.chapter(id).title })),
  ]);

  protected readonly hits = computed(() =>
    this.search.search(this.langs.lang(), this.query(), this.chapter(), this.prefs.platform()),
  );

  protected readonly statusText = computed(() => {
    const q = this.query().trim();
    if (!q) return '';
    const n = this.hits().length;
    if (n === 0) return this.langs.t('search.none', { q });
    return this.langs.t(n === 1 ? 'search.resultsOne' : 'search.resultsMany', { count: n, q });
  });

  private announceTimer?: ReturnType<typeof setTimeout>;
  private urlTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      this.seo.set(this.langs.lang(), 'search', this.langs.t('search.metaTitle'), this.langs.t('search.metaDescription'));
    });

    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      afterNextRender(() => {
        this.prefs.restore();
        const params = this.route.snapshot.queryParamMap;
        this.query.set(params.get('q') ?? '');
        const c = params.get('chapter') as ChapterId | null;
        if (c && CHAPTER_ORDER.includes(c)) this.chapter.set(c);
        this.interactive.set(true);
        if (this.query()) this.scheduleAnnounce();
      });
    }
  }

  protected chapterLink(id: ChapterId): string {
    return link(this.langs.lang(), id);
  }

  protected onQuery(e: Event): void {
    this.setQuery((e.target as HTMLInputElement).value, false);
  }

  protected setQuery(q: string, focus = true): void {
    this.query.set(q);
    if (focus) document.getElementById('q')?.focus();
    this.syncUrl();
    this.scheduleAnnounce();
  }

  protected setChapter(c: ChapterId | 'all'): void {
    this.chapter.set(c);
    this.syncUrl();
    this.scheduleAnnounce(0);
  }

  protected setPlatform(p: PlatformFilter): void {
    this.prefs.setPlatform(p);
    this.scheduleAnnounce(0);
  }

  /** Announce the result count once typing pauses, not on every key. */
  private scheduleAnnounce(delay = 700): void {
    clearTimeout(this.announceTimer);
    this.announceTimer = setTimeout(() => {
      const text = this.statusText();
      if (text) this.announcer.announce(text);
    }, delay);
  }

  private syncUrl(): void {
    clearTimeout(this.urlTimer);
    this.urlTimer = setTimeout(() => {
      const q = this.query().trim();
      const chapter = this.chapter() === 'all' ? null : this.chapter();
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: q || null, chapter },
        replaceUrl: true,
      });
    }, 300);
  }
}
