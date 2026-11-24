/**
 * Content model for the journey pages.
 *
 * All story text and tips live in content.de.ts and content.en.ts with the
 * same structure. Strings in `html` fields may contain a small set of inline
 * tags (strong, em, code, kbd, a, abbr). Code blocks are plain text.
 */

export type Lang = 'de' | 'en';
/** 'both' = cross-platform (works on Windows, Linux and macOS). */
export type Platform = 'windows' | 'linux' | 'mac' | 'both';
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
  /** Lead paragraph at the top of the chapter page, inline HTML allowed. */
  lead: string;
  sections: Section[];
}

export interface Project {
  /** Stable id, identical in both languages, used for deep links. */
  id: string;
  title: string;
  /** Paragraphs, inline HTML allowed. */
  text: string[];
  /** Main technology, shown in bold before the rest of the stack. */
  stackLead: string;
  stack: string;
  link: { href: string; label: string };
}

export interface Skill {
  title: string;
  detail: string;
}

export interface WorkPageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  aboutHeading: string;
  about: string[];
  projectsHeading: string;
  projects: Project[];
  skillsHeading: string;
  skills: Skill[];
  training: string;
  contactHeading: string;
  contact: string;
}

export interface Offer {
  id: string;
  title: string;
  text: string;
}

export interface CoachingPageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  whyHeading: string;
  why: string[];
  offersHeading: string;
  offers: Offer[];
  contactHeading: string;
  contact: string;
}

export interface SiteContent {
  work: WorkPageContent;
  coaching: CoachingPageContent;
  chapters: Chapter[];
}
