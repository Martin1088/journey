/**
 * Content model for the journey pages.
 *
 * All story text and tips live in content.de.ts and content.en.ts with the
 * same structure. Strings in `html` fields may contain a small set of inline
 * tags (strong, em, code, kbd, a, abbr). Code blocks are plain text.
 */

export type Lang = 'de' | 'en';
export type Platform = 'linux' | 'windows' | 'both';
export type ChapterId = 'quikstep' | 'training' | 'dkfz';
export type DemoId = 'sql-output' | 'form-errors';

export type Block =
  | { kind: 'p'; html: string }
  | { kind: 'code'; code: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'why'; html: string };

export interface Tip {
  /** Stable id, identical in both languages, used for deep links (#tip-…). */
  id: string;
  platform: Platform;
  title: string;
  body: Block[];
}

export interface Section {
  /** Stable id, identical in both languages. */
  id: string;
  when: string;
  title: string;
  /** Paragraphs of the story, inline HTML allowed. */
  story: string[];
  tipsHeading: string;
  tips: Tip[];
  demo?: DemoId;
}

export interface Chapter {
  id: ChapterId;
  when: string;
  title: string;
  /** One line for tiles and search results. */
  short: string;
  /** Lead paragraph at the top of the chapter page. */
  lead: string;
  sections: Section[];
}

export interface SiteContent {
  chapters: Chapter[];
}
