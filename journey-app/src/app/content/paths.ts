import { ChapterId, Lang } from './model';

export type PageKey = 'work' | 'coaching' | 'journey' | ChapterId | 'search';

/**
 * URL path (without leading slash, relative to the base href) of every page.
 * English lives at the root, German under /de/.
 */
export const PATHS: Record<Lang, Record<PageKey, string>> = {
  de: {
    work: 'de',
    coaching: 'de/coaching',
    journey: 'de/weg',
    quikstep: 'de/weg/quikstep',
    training: 'de/weg/ausbildung',
    dkfz: 'de/weg/dkfz',
    search: 'de/suche',
  },
  en: {
    work: '',
    coaching: 'coaching',
    journey: 'journey',
    quikstep: 'journey/quikstep',
    training: 'journey/apprenticeship',
    dkfz: 'journey/dkfz',
    search: 'search',
  },
};

export const CHAPTER_ORDER: ChapterId[] = ['quikstep', 'training', 'dkfz'];

/** The top-level section a page belongs to, for the active state in the navigation. */
export function sectionOf(page: PageKey): 'work' | 'coaching' | 'journey' | 'search' {
  if (page === 'work' || page === 'coaching' || page === 'search') return page;
  return 'journey';
}

/** Router link (absolute within the app) for a page. */
export function link(lang: Lang, page: PageKey): string {
  return '/' + PATHS[lang][page];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}

