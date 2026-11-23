import { Injectable } from '@angular/core';
import { Block, ChapterId, Lang, Platform } from '../content/model';
import { PageKey } from '../content/paths';
import { LangService } from './lang.service';
import { PlatformFilter } from './prefs.service';

/** Top-level area a result belongs to; also the value of the area filter. */
export type Area = 'work' | 'coaching' | ChapterId;

export interface SearchDoc {
  kind: 'tip' | 'section' | 'project' | 'offer';
  area: Area;
  /** The page the result links to. */
  page: PageKey;
  areaTitle: string;
  /** Second breadcrumb level (section title, or the page section heading). */
  context: string;
  title: string;
  /** Plain text for display (snippets). */
  text: string;
  platform: Platform | null;
  fragment: string;
  /** Normalised haystacks. */
  nTitle: string;
  nText: string;
}

export interface Snippet {
  text: string;
  hit: boolean;
}

export interface SearchHit {
  doc: SearchDoc;
  score: number;
  snippet: Snippet[];
}

/** Lowercase and strip diacritics so "Uberschrift" finds "Überschrift". */
export function normalise(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

const ENTITIES: Record<string, string> = { '&gt;': '>', '&lt;': '<', '&amp;': '&', '&quot;': '"' };

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&(gt|lt|amp|quot);/g, (m) => ENTITIES[m]);
}

function blockText(b: Block): string {
  switch (b.kind) {
    case 'p':
    case 'why':
      return stripHtml(b.html);
    case 'code':
      return b.code;
    case 'list':
      return b.items.map(stripHtml).join(' · ');
  }
}

/**
 * Client-side full-text search over the content of one language.
 * The index is built once per language from the same data the pages render,
 * so search and pages can never drift apart.
 */
@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly cache = new Map<Lang, SearchDoc[]>();

  index(lang: Lang): SearchDoc[] {
    let docs = this.cache.get(lang);
    if (docs) return docs;
    docs = [];
    const content = LangService.contentFor(lang);
    const work = content.work;
    for (const pr of work.projects) {
      const text = [...pr.text.map(stripHtml), pr.stackLead, pr.stack].join(' ');
      docs.push(this.doc('project', 'work', 'work', work.title, work.projectsHeading, pr.title, text, null, pr.id));
    }
    const coaching = content.coaching;
    for (const o of coaching.offers) {
      docs.push(this.doc('offer', 'coaching', 'coaching', coaching.title, coaching.offersHeading, o.title, o.text, null, o.id));
    }
    for (const ch of content.chapters) {
      for (const s of ch.sections) {
        const text = s.story.map(stripHtml).join(' ');
        docs.push(this.doc('section', ch.id, ch.id, ch.title, s.title, s.title, text, null, s.id));
        for (const tip of s.tips) {
          const tipText = tip.body.map(blockText).join(' ');
          docs.push(this.doc('tip', ch.id, ch.id, ch.title, s.title, tip.title, tipText, tip.platform, tip.id));
        }
      }
    }
    this.cache.set(lang, docs);
    return docs;
  }

  search(lang: Lang, query: string, area: Area | 'all', platform: PlatformFilter): SearchHit[] {
    const terms = normalise(query).split(/\s+/).filter((t) => t.length > 0);
    if (!terms.length) return [];

    const hits: SearchHit[] = [];
    for (const doc of this.index(lang)) {
      if (area !== 'all' && doc.area !== area) continue;
      if (platform !== 'all') {
        // The platform filter applies to tips; everything else stays visible.
        if (doc.platform && doc.platform !== 'both' && doc.platform !== platform) continue;
      }
      let score = 0;
      let all = true;
      for (const t of terms) {
        const inTitle = doc.nTitle.includes(t);
        const inText = doc.nText.includes(t);
        if (!inTitle && !inText) {
          all = false;
          break;
        }
        score += inTitle ? 10 : 0;
        score += inText ? 1 + Math.min(4, this.count(doc.nText, t)) : 0;
      }
      if (!all) continue;
      if (doc.kind !== 'section') score += 1;
      hits.push({ doc, score, snippet: this.snippet(doc, terms) });
    }
    return hits.sort((a, b) => b.score - a.score);
  }

  private doc(
    kind: SearchDoc['kind'],
    area: Area,
    page: PageKey,
    areaTitle: string,
    context: string,
    title: string,
    text: string,
    platform: Platform | null,
    fragment: string,
  ): SearchDoc {
    const clean = text.replace(/\s+/g, ' ').trim();
    return {
      kind, area, page, areaTitle, context, title, text: clean, platform, fragment,
      nTitle: normalise(title),
      nText: normalise(clean),
    };
  }

  private count(hay: string, needle: string): number {
    let n = 0;
    let i = hay.indexOf(needle);
    while (i !== -1) {
      n++;
      i = hay.indexOf(needle, i + needle.length);
    }
    return n;
  }

  /** ~160 characters around the first match, split into highlighted parts. */
  private snippet(doc: SearchDoc, terms: string[]): Snippet[] {
    const text = doc.text;
    // normalise() keeps string length for the characters used here,
    // so indices in nText map onto text.
    const first = Math.min(...terms.map((t) => doc.nText.indexOf(t)).filter((i) => i >= 0), Infinity);
    const center = first === Infinity ? 0 : first;
    let start = Math.max(0, center - 60);
    const end = Math.min(text.length, start + 160);
    if (start > 0) start = text.lastIndexOf(' ', start) + 1;
    const nPart = doc.nText.slice(start, end);
    const part = text.slice(start, end);

    // Mark every occurrence of every term inside the window.
    const marks = new Array<boolean>(part.length).fill(false);
    for (const t of terms) {
      let i = nPart.indexOf(t);
      while (i !== -1) {
        for (let k = i; k < i + t.length && k < marks.length; k++) marks[k] = true;
        i = nPart.indexOf(t, i + t.length);
      }
    }
    const out: Snippet[] = [];
    if (start > 0) out.push({ text: '… ', hit: false });
    let buf = '';
    let state = marks[0] ?? false;
    for (let i = 0; i < part.length; i++) {
      if (marks[i] !== state) {
        out.push({ text: buf, hit: state });
        buf = '';
        state = marks[i];
      }
      buf += part[i];
    }
    if (buf) out.push({ text: buf, hit: state });
    if (end < text.length) out.push({ text: ' …', hit: false });
    return out;
  }
}
