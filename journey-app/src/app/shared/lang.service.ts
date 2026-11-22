import { DOCUMENT, Injectable, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CONTENT_DE } from '../content/content.de';
import { CONTENT_EN } from '../content/content.en';
import { ChapterId, Lang, SiteContent } from '../content/model';

const CONTENT: Record<Lang, SiteContent> = { de: CONTENT_DE, en: CONTENT_EN };

/**
 * The current language comes from the route (/de/… or /…), never from
 * browser storage, so every language has its own URL and prerendered page.
 */
@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>('en');
  readonly content = computed(() => CONTENT[this.lang()]);

  use(lang: Lang): Observable<unknown> {
    this.lang.set(lang);
    this.document.documentElement.lang = lang;
    return this.translate.use(lang);
  }

  chapter(id: ChapterId) {
    return this.content().chapters.find((c) => c.id === id)!;
  }

  t(key: string, params?: Record<string, unknown>): string {
    return this.translate.instant(key, params) as string;
  }

  static contentFor(lang: Lang): SiteContent {
    return CONTENT[lang];
  }
}
