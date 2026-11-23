import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lang } from '../content/model';
import { PATHS, PageKey } from '../content/paths';

/**
 * Public URL of the site, used for canonical and hreflang links.
 * The Pages workflow injects the real one at build time
 * (`ng build --define SITE_URL='"https://…/"'`), so it follows the
 * repository name or a custom domain; the fallback is for local builds.
 */
declare const SITE_URL: string | undefined;
const SITE = (typeof SITE_URL === 'string' && SITE_URL ? SITE_URL : 'https://martin1088.github.io/journey/').replace(/\/?$/, '/');

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  set(lang: Lang, page: PageKey, title: string, description: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: this.url(lang, page) });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'de' ? 'de_DE' : 'en_GB' });

    this.setLink('canonical', this.url(lang, page));
    this.setLink('alternate', this.url('de', page), 'de');
    this.setLink('alternate', this.url('en', page), 'en');
  }

  private url(lang: Lang, page: PageKey): string {
    const path = PATHS[lang][page];
    return SITE + (path ? path + '/' : '');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const head = this.document.head;
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let el = head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.document.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
