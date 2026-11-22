import { Block } from './model';

/** Small helpers so the content files read like prose, not like JSON. */
export const p = (html: string): Block => ({ kind: 'p', html });
export const code = (text: string): Block => ({ kind: 'code', code: text.replace(/^\n/, '') });
export const list = (...items: string[]): Block => ({ kind: 'list', items });
export const steps = (...items: string[]): Block => ({ kind: 'list', items, ordered: true });
export const why = (html: string): Block => ({ kind: 'why', html });
