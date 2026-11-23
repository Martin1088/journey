import { Component, computed, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { link } from '../content/paths';
import { LangService } from '../shared/lang.service';
import { SeoService } from '../shared/seo.service';

/** Start page: what I do, selected projects, technical profile. */
@Component({
  selector: 'app-work-page',
  imports: [RouterLink, TranslatePipe],
  template: `
    <div class="hero">
      <div class="wrap">
        <header>
          <p class="eyebrow">{{ c().eyebrow }}</p>
          <h1 id="main-heading" tabindex="-1">{{ c().title }}</h1>
          <p class="lead">{{ c().lead }}</p>
          <p class="btn-row">
            <a class="btn" [routerLink]="workLink()" fragment="work">{{ 'work.seeWork' | translate }}</a>
            <a [routerLink]="journeyLink()">{{ 'work.readJourney' | translate }}</a>
          </p>
        </header>
      </div>
    </div>

    <div class="wrap">
      <section aria-labelledby="about">
        <h2 id="about">{{ c().aboutHeading }}</h2>
        @for (para of c().about; track $index) { <p>{{ para }}</p> }
      </section>

      <section aria-labelledby="work">
        <h2 id="work">{{ c().projectsHeading }}</h2>
        <ul class="cards" role="list">
          @for (pr of c().projects; track pr.id) {
            <li [id]="pr.id" tabindex="-1" [attr.aria-labelledby]="'h-' + pr.id">
              <h3 [id]="'h-' + pr.id">{{ pr.title }}</h3>
              @for (para of pr.text; track $index) { <p [innerHTML]="para"></p> }
              <p class="stack"><strong>{{ pr.stackLead }}</strong> · {{ pr.stack }}</p>
              <p><a [href]="pr.link.href">{{ pr.link.label }}</a></p>
            </li>
          }
        </ul>
      </section>

      <section aria-labelledby="skills">
        <h2 id="skills">{{ c().skillsHeading }}</h2>
        <ul class="skills" role="list">
          @for (s of c().skills; track s.title) {
            <li><strong>{{ s.title }}</strong> <span>{{ s.detail }}</span></li>
          }
        </ul>
        <p>{{ c().training }}</p>
      </section>

      <section class="contact" aria-labelledby="contact-h">
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
export class WorkPage {
  private readonly langs = inject(LangService);
  private readonly seo = inject(SeoService);

  protected readonly c = computed(() => this.langs.content().work);
  protected readonly workLink = computed(() => link(this.langs.lang(), 'work'));
  protected readonly journeyLink = computed(() => link(this.langs.lang(), 'journey'));

  constructor() {
    effect(() => this.seo.set(this.langs.lang(), 'work', this.c().metaTitle, this.c().metaDescription));
  }
}
