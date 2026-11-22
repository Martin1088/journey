import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type PlatformFilter = 'all' | 'windows' | 'linux' | 'mac';

/** Per-viewer conveniences. Storage may be unavailable; the page works without it. */
@Injectable({ providedIn: 'root' })
export class PrefsService {
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly platform = signal<PlatformFilter>(this.read());

  setPlatform(value: PlatformFilter): void {
    this.platform.set(value);
    if (!this.browser) return;
    try {
      localStorage.setItem('journey-platform', value);
    } catch {
      /* ignore */
    }
  }

  private read(): PlatformFilter {
    // Always start with "all" so the prerendered HTML and the first client
    // render match; the stored value is applied after hydration.
    return 'all';
  }

  restore(): void {
    if (!this.browser) return;
    try {
      const v = localStorage.getItem('journey-platform');
      if (v === 'linux' || v === 'windows' || v === 'mac' || v === 'all') this.platform.set(v);
    } catch {
      /* ignore */
    }
  }
}
