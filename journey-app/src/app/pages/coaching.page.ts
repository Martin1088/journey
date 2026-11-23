import { Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { link } from '../content/paths';
import { LangService } from '../shared/lang.service';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-coaching-page',
  imports: [RouterLink, TranslatePipe],
  template: `
    <div class="hero">
      <div class="wrap">
        <header>
          <p class="eyebrow">{{ c().eyebrow }}</p>
          <h1 id="main-heading" tabindex="-1">{{ c().title }}</h1>
          <p class="lead">{{ c().lead }}</p>
          <p class="btn-row">
            <a class="btn" [routerLink]="coachingLink()" fragment="contact">{{ 'coaching.getInTouch' | translate }}</a>
            <a [routerLink]="journeyLink()">{{ 'coaching.readJourney' | translate }}</a>
          </p>
        </header>
      </div>
    </div>

    <div class="wrap">
      <section aria-labelledby="why">
        <h2 id="why">{{ c().whyHeading }}</h2>
        @for (para of c().why; track $index) { <p>{{ para }}</p> }
      </section>

      <section aria-labelledby="offer">
        <h2 id="offer">{{ c().offersHeading }}</h2>
        <ul class="cards" role="list">
          @for (o of c().offers; track o.id) {
            <li [id]="o.id" tabindex="-1" [attr.aria-labelledby]="'h-' + o.id">
              <h3 [id]="'h-' + o.id">{{ o.title }}</h3>
              <p>{{ o.text }}</p>
            </li>
          }
        </ul>
        <p>{{ 'coaching.tipsHint' | translate }} <a [routerLink]="journeyLink()">{{ 'coaching.tipsLink' | translate }}</a>.</p>
      </section>

      <section class="contact" id="contact" aria-labelledby="contact-h">
        <h2 id="contact-h">{{ c().contactHeading }}</h2>
        <p>{{ c().contact }}</p>
        <p class="btn-row">
          <a class="btn" href="mailto:access.job.manager@gmail.com">{{ 'contact.email' | translate }}</a>
          <a href="https://github.com/Martin1088">github.com/Martin1088</a>
        </p>
      </section>
    </div>
  `,
})
export class CoachingPage {
  private readonly langs = inject(LangService);
  private readonly seo = inject(SeoService);

  protected readonly c = computed(() => this.langs.content().coaching);
  protected readonly coachingLink = computed(() => link(this.langs.lang(), 'coaching'));
  protected readonly journeyLink = computed(() => link(this.langs.lang(), 'journey'));

  constructor() {
    effect(() => this.seo.set(this.langs.lang(), 'coaching', this.c().metaTitle, this.c().metaDescription));
  }
}
