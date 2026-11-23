import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lang } from '../content/model';
import { PATHS, PageKey } from '../content/paths';

/**
 * Public URL of the app (the folder the journey pages are served from).
 * Used for canonical and hreflang links. Adjust if the Pages URL changes.
 */
export const SITE_URL = 'https://martin1088.github.io/journey-/journey/';

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
    return SITE_URL + (path ? path + '/' : '');
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
