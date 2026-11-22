import { Injectable, signal } from '@angular/core';

/**
 * One polite live region for the whole app (rendered in App).
 * Clearing first makes screen readers repeat identical messages.
 */
@Injectable({ providedIn: 'root' })
export class AnnouncerService {
  readonly message = signal('');
  private timer?: ReturnType<typeof setTimeout>;

  announce(text: string, delay = 50): void {
    this.message.set('');
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.message.set(text), delay);
  }
}
