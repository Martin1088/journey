import {
  Component, Injector, PLATFORM_ID, afterNextRender, computed, effect, inject, signal, untracked, viewChildren,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';
import { ChapterId, Tip } from '../content/model';
import { CHAPTER_ORDER, link } from '../content/paths';
import { AnnouncerService } from '../shared/announcer.service';
import { LangService } from '../shared/lang.service';
import { PlatformFilter, PrefsService } from '../shared/prefs.service';
import { SeoService } from '../shared/seo.service';
import { stripHtml } from '../shared/search.service';
import { TipCard } from '../shared/tip-card';
import { SqlOutputDemo } from '../demos/sql-output.demo';
import { FormErrorDemo } from '../demos/form-error.demo';

@Component({
  selector: 'app-chapter-page',
  imports: [RouterLink, TranslatePipe, TipCard, SqlOutputDemo, FormErrorDemo],
  template: `
    <div class="hero">
      <div class="wrap">
        <header>
          <p class="eyebrow">{{ 'chapter.chapterOf' | translate: { n: index() + 1 } }} · {{ chapter().when }}</p>
          <h1 id="main-heading" tabindex="-1">{{ chapter().title }}</h1>
          <p class="lead" [innerHTML]="chapter().lead"></p>
          <nav [attr.aria-label]="'chapter.inChapter' | translate">
            <ol class="section-nav">
              @for (s of chapter().sections; track s.id) {
                <li><a [routerLink]="[]" [fragment]="s.id">
                  <span class="when">{{ s.when }}</span>
                  <span class="name">{{ s.title }}</span>
                </a></li>
              }
            </ol>
          </nav>
        </header>
      </div>
    </div>

    <div class="wrap">
      @if (interactive()) {
        <div class="tip-toolbar" role="group" [attr.aria-label]="'toolbar.label' | translate">
          <fieldset>
            <legend>{{ 'toolbar.platform' | translate }}</legend>
            @for (opt of platforms; track opt) {
              <span class="chip">
                <input type="radio" name="platform" [id]="'pf-' + opt" [value]="opt"
                       [checked]="prefs.platform() === opt" (change)="setPlatform(opt)">
                <label [for]="'pf-' + opt">{{ 'toolbar.' + opt | translate }}</label>
              </span>
            }
          </fieldset>
          <button type="button" class="tool-btn" (click)="toggleAll()">
            {{ (allOpen() ? 'toolbar.collapseAll' : 'toolbar.expandAll') | translate }}
          </button>
          <p class="tip-status">{{ 'toolbar.shown' | translate: { n: visibleCount(), total: totalCount() } }}</p>
        </div>
      }

      @for (s of chapter().sections; track s.id; let i = $index) {
        <section class="station" [id]="s.id" [attr.aria-labelledby]="'h-' + s.id">
          <span class="station-no" aria-hidden="true">{{ i + 1 }}</span>
          <p class="eyebrow">{{ s.when }}</p>
          <h2 [id]="'h-' + s.id">{{ s.title }}</h2>
          @for (para of s.story; track $index) { <p [innerHTML]="para"></p> }

          <h3>{{ s.tipsHeading }}</h3>
          <ul class="tips" role="list">
            @for (tip of s.tips; track tip.id) {
              @if (visible(tip)) {
                <li>
                  <app-tip-card [tip]="tip" [open]="openIds().has(tip.id)" [interactive]="interactive()"
                                (toggled)="setOpen(tip.id, $event)" />
                </li>
              }
            }
          </ul>

          @if (s.demo) {
            <aside class="demo" [attr.aria-labelledby]="'demo-' + s.demo">
              @defer (on viewport) {
                @switch (s.demo) {
                  @case ('sql-output') { <app-sql-output-demo /> }
                  @case ('form-errors') { <app-form-error-demo /> }
                }
              } @placeholder {
                <div>
                  <p class="demo-badge">{{ 'demo.badge' | translate }}</p>
                  <h3 [id]="'demo-' + s.demo">{{ (s.demo === 'sql-output' ? 'demo.sql.title' : 'demo.form.title') | translate }}</h3>
                  <p>{{ 'demo.loading' | translate }}</p>
                </div>
              }
            </aside>
          }
        </section>
      }

      <nav class="chapter-pager" [attr.aria-label]="'chapter.pager' | translate">
        @if (prev(); as p) {
          <a [routerLink]="p.link" rel="prev"><span class="when">{{ 'chapter.prev' | translate }}</span> {{ p.title }}</a>
        }
        <a [routerLink]="homeLink()">{{ 'chapter.overview' | translate }}</a>
        @if (next(); as n) {
          <a [routerLink]="n.link" rel="next"><span class="when">{{ 'chapter.next' | translate }}</span> {{ n.title }}</a>
        }
      </nav>
    </div>
  `,
})
export class ChapterPage {
  private readonly route = inject(ActivatedRoute);
  private readonly langs = inject(LangService);
  private readonly seo = inject(SeoService);
  private readonly announcer = inject(AnnouncerService);
  private readonly injector = inject(Injector);
  protected readonly prefs = inject(PrefsService);

  protected readonly platforms: PlatformFilter[] = ['all', 'windows', 'linux', 'mac'];
  protected readonly interactive = signal(false);
  protected readonly openIds = signal(new Set<string>());
  private readonly cards = viewChildren(TipCard);

  private readonly chapterId = toSignal(this.route.data.pipe(map((d) => d['chapter'] as ChapterId)), {
    initialValue: this.route.snapshot.data['chapter'] as ChapterId,
  });
  private readonly fragment = toSignal(this.route.fragment, { initialValue: this.route.snapshot.fragment });

  protected readonly chapter = computed(() => this.langs.chapter(this.chapterId()));
  protected readonly index = computed(() => CHAPTER_ORDER.indexOf(this.chapterId()));
  private readonly allTips = computed(() => this.chapter().sections.flatMap((s) => s.tips));
  protected readonly totalCount = computed(() => this.allTips().length);
  protected readonly visibleCount = computed(() => this.allTips().filter((t) => this.visible(t)).length);
  protected readonly allOpen = computed(() => {
    const v = this.allTips().filter((t) => this.visible(t));
    return v.length > 0 && v.every((t) => this.openIds().has(t.id));
  });
  protected readonly homeLink = computed(() => link(this.langs.lang(), 'journey'));
  protected readonly prev = computed(() => this.neighbour(-1));
  protected readonly next = computed(() => this.neighbour(1));

  constructor() {
    effect(() => {
      const lang = this.langs.lang();
      const ch = this.chapter();
      this.seo.set(lang, ch.id, `${ch.title} | ${this.langs.t('nav.journey')} | Martin Jurk`, ch.short + ' ' + stripHtml(ch.lead).slice(0, 120) + '…');
    });

    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      afterNextRender(() => {
        this.prefs.restore();
        this.interactive.set(true);
      });
      // Deep link to a tip (#tip-…): open it, make sure the filter shows it, focus it.
      effect(() => {
        const id = this.fragment();
        if (!id || !id.startsWith('tip-')) return;
        const tip = this.allTips().find((t) => t.id === id);
        if (!tip) return;
        untracked(() => {
          if (!this.visible(tip)) this.prefs.setPlatform('all');
          this.setOpen(id, true);
          afterNextRender(() => {
            const card = this.cards().find((c) => c.tip().id === id);
            card?.focusSummary();
          }, { injector: this.injector });
        });
      });
    }
  }

  protected visible(tip: Tip): boolean {
    const f = this.prefs.platform();
    return f === 'all' || tip.platform === 'both' || tip.platform === f;
  }

  protected setOpen(id: string, open: boolean): void {
    const next = new Set(this.openIds());
    if (open) next.add(id);
    else next.delete(id);
    this.openIds.set(next);
  }

  protected toggleAll(): void {
    const open = !this.allOpen();
    const next = new Set(this.openIds());
    for (const t of this.allTips()) {
      if (!this.visible(t)) continue;
      if (open) next.add(t.id);
      else next.delete(t.id);
    }
    this.openIds.set(next);
  }

  protected setPlatform(p: PlatformFilter): void {
    this.prefs.setPlatform(p);
    this.announcer.announce(this.langs.t('toolbar.shown', { n: this.visibleCount(), total: this.totalCount() }));
  }

  private neighbour(delta: number) {
    const id = CHAPTER_ORDER[this.index() + delta];
    if (!id) return null;
    return { link: link(this.langs.lang(), id), title: this.langs.chapter(id).title };
  }
}
