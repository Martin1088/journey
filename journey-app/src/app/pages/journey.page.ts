import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { link } from '../content/paths';
import { LangService } from '../shared/lang.service';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-journey-page',
  imports: [RouterLink, TranslatePipe],
  template: `
    <div class="hero">
      <div class="wrap">
        <header>
          <p class="eyebrow">{{ 'home.eyebrow' | translate }}</p>
          <h1 id="main-heading" tabindex="-1">{{ 'home.title' | translate }}</h1>
          <p class="lead">{{ 'home.lead' | translate }}</p>
          <ul class="facts" role="list" [attr.aria-label]="'home.facts' | translate">
            <li><strong>2020</strong> <span>{{ 'home.fact1' | translate }}</span></li>
            <li><strong>2024</strong> <span>{{ 'home.fact2' | translate }}</span></li>
            <li><strong>2</strong> <span>{{ 'home.fact3' | translate }}</span></li>
            <li><strong>{{ tipCount() }}</strong> <span>{{ 'home.fact4' | translate }}</span></li>
          </ul>
        </header>
      </div>
    </div>

    <div class="wrap">
      <section aria-labelledby="chapters">
        <h2 id="chapters">{{ 'home.chaptersHeading' | translate }}</h2>
        <p>{{ 'home.chaptersIntro' | translate }}</p>
        <ol class="station-nav">
          @for (ch of chapters(); track ch.id; let i = $index) {
            <li>
              <a [routerLink]="ch.link">
                <span class="when">{{ ch.when }}</span>
                <span class="name">{{ ch.title }}</span>
                <span class="desc">{{ ch.short }}</span>
                <span class="count">{{ 'home.tips' | translate: { count: ch.tips } }}</span>
              </a>
            </li>
          }
        </ol>
      </section>

      <section aria-labelledby="search-h">
        <h2 id="search-h">{{ 'home.searchHeading' | translate }}</h2>
        <p>{{ 'home.searchIntro' | translate }}</p>
        <form class="search-form" role="search" [attr.action]="searchLink().slice(1) + '/'" method="get"
              (submit)="go($event, q.value)">
          <label for="home-q">{{ 'search.label' | translate }}</label>
          <div class="search-row">
            <input #q id="home-q" name="q" type="search" autocomplete="off">
            <button type="submit" class="tool-btn">{{ 'search.submit' | translate }}</button>
          </div>
        </form>
      </section>

      <section aria-labelledby="who">
        <h2 id="who">{{ 'home.howHeading' | translate }}</h2>
        <p>{{ 'home.howText' | translate }}</p>
      </section>

      <section class="contact" aria-labelledby="contact-h">
        <h2 id="contact-h">{{ 'home.contactHeading' | translate }}</h2>
        <p>{{ 'home.contactText' | translate }}</p>
        <p class="btn-row">
          <a class="btn" href="mailto:access.job.manager@gmail.com">{{ 'home.email' | translate }}</a>
          <a [routerLink]="workLink()" fragment="work">{{ 'home.projects' | translate }}</a>
        </p>
      </section>
    </div>
  `,
})
export class JourneyPage {
  private readonly langs = inject(LangService);
  private readonly seo = inject(SeoService);
  private readonly router = inject(Router);

  protected readonly chapters = computed(() =>
    this.langs.content().chapters.map((c) => ({
      ...c,
      link: link(this.langs.lang(), c.id),
      tips: c.sections.reduce((n, s) => n + s.tips.length, 0),
    })),
  );
  protected readonly tipCount = computed(() => this.chapters().reduce((n, c) => n + c.tips, 0));
  protected readonly searchLink = computed(() => link(this.langs.lang(), 'search'));
  protected readonly workLink = computed(() => link(this.langs.lang(), 'work'));

  constructor() {
    effect(() => {
      this.seo.set(this.langs.lang(), 'journey', this.langs.t('home.metaTitle'), this.langs.t('home.metaDescription'));
    });
  }

  protected go(e: Event, q: string): void {
    e.preventDefault();
    this.router.navigate([this.searchLink()], { queryParams: q.trim() ? { q: q.trim() } : {} });
  }
}
