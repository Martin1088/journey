import { Component, DestroyRef, PLATFORM_ID, afterNextRender, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { Lang } from './content/model';
import { PATHS, PageKey, link, otherLang } from './content/paths';
import { AnnouncerService } from './shared/announcer.service';
import { LangService } from './shared/lang.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TranslatePipe],
  template: `
    <a class="skip-link" href="#content" (click)="skip($event)">{{ 'nav.skip' | translate }}</a>

    <div class="topbar">
      <div class="wrap">
        <a class="brand" [routerLink]="homeLink()">Martin Jurk</a>
        <nav [attr.aria-label]="'nav.main' | translate">
          <ul>
            <li><a href="../">{{ 'nav.work' | translate }}</a></li>
            <li><a [routerLink]="homeLink()" [attr.aria-current]="page() === 'home' ? 'page' : null"
                   [class.active]="page() !== 'search'">{{ 'nav.journey' | translate }}</a></li>
            <li><a href="../coaching/">{{ 'nav.coaching' | translate }}</a></li>
            <li><a [routerLink]="searchLink()" [attr.aria-current]="page() === 'search' ? 'page' : null">
              {{ 'nav.search' | translate }}</a></li>
            <li><a [routerLink]="switchLink()" [attr.lang]="other()" [attr.hreflang]="other()">
              {{ 'nav.switch' | translate }}</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <main id="content" tabindex="-1">
      <router-outlet />
    </main>

    <footer>
      <div class="wrap">
        <p>{{ 'footer.coaching' | translate }} <a href="../coaching/">{{ 'footer.coachingLink' | translate }}</a>.</p>
        <p>{{ 'footer.copyright' | translate }}</p>
      </div>
    </footer>

    <div class="sr-only" aria-live="polite" aria-atomic="true">{{ announcer.message() }}</div>
  `,
})
export class App {
  private readonly router = inject(Router);
  private readonly langs = inject(LangService);
  protected readonly announcer = inject(AnnouncerService);

  protected readonly lang = this.langs.lang;
  protected readonly other = computed(() => otherLang(this.lang()));
  protected readonly page = computed<PageKey>(() => this.pageFor(this.lang(), this.currentPath()));
  protected readonly homeLink = computed(() => link(this.lang(), 'home'));
  protected readonly searchLink = computed(() => link(this.lang(), 'search'));
  protected readonly switchLink = computed(() => link(this.other(), this.page()));

  private readonly currentPath = signal('');

  constructor() {
    this.currentPath.set(this.stripPath(this.router.url));
    const sub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.currentPath.set(this.stripPath(e.urlAfterRedirects));
    });
    inject(DestroyRef).onDestroy(() => sub.unsubscribe());

    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      afterNextRender(() => this.manageFocus());
    }
  }

  protected skip(e: Event): void {
    e.preventDefault();
    document.getElementById('content')?.focus();
  }

  /**
   * After an in-app navigation, move focus to the new page heading so screen
   * readers announce the page – unless the URL has a fragment (the page
   * handles that) or only query parameters changed (live search).
   */
  private manageFocus(): void {
    let lastPath = this.currentPath();
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const path = this.stripPath(e.urlAfterRedirects);
      if (e.id === 1) {
        // Initial navigation after page load: the browser already starts at the top.
        lastPath = path;
        return;
      }
      const samePath = path === lastPath;
      lastPath = path;
      const fragment = this.router.parseUrl(e.urlAfterRedirects).fragment;
      if (samePath || fragment) return;
      setTimeout(() => document.getElementById('main-heading')?.focus(), 0);
    });
  }

  private stripPath(url: string): string {
    return url.split(/[?#]/)[0].replace(/^\//, '').replace(/\/$/, '');
  }

  private pageFor(lang: Lang, path: string): PageKey {
    const entry = Object.entries(PATHS[lang]).find(([, p]) => p === path);
    return (entry?.[0] as PageKey) ?? 'home';
  }
}
