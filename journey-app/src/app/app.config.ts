import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  TranslateLoader, TranslationObject, provideTranslateLoader, provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { routes } from './app.routes';
import de from './i18n/de.json';
import en from './i18n/en.json';

/**
 * UI strings are bundled instead of fetched over HTTP: no request during
 * prerendering, no flash of untranslated keys, and no base-href issues on
 * GitHub Pages. The long story and tip texts live in content/*.ts.
 */
class StaticLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of((lang === 'de' ? de : en) as TranslationObject);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    provideClientHydration(withEventReplay()),
    provideTranslateService({ fallbackLang: 'en', lang: 'en', loader: provideTranslateLoader(StaticLoader) }),
  ],
};
