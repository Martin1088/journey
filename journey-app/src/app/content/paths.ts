import { ChapterId, Lang } from './model';

export type PageKey = 'home' | ChapterId | 'search';

/** URL path (without leading slash, relative to the base href) of every page. */
export const PATHS: Record<Lang, Record<PageKey, string>> = {
  de: {
    home: 'de',
    quikstep: 'de/quikstep',
    training: 'de/ausbildung',
    dkfz: 'de/dkfz',
    search: 'de/suche',
  },
  en: {
    home: '',
    quikstep: 'quikstep',
    training: 'apprenticeship',
    dkfz: 'dkfz',
    search: 'search',
  },
};

export const CHAPTER_ORDER: ChapterId[] = ['quikstep', 'training', 'dkfz'];

/** Router link (absolute within the app) for a page. */
export function link(lang: Lang, page: PageKey): string {
  return '/' + PATHS[lang][page];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}
