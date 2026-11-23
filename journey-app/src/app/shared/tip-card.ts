import { Component, ElementRef, inject, input, output, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tip } from '../content/model';
import { AnnouncerService } from './announcer.service';
import { LangService } from './lang.service';

/**
 * One tip as a native <details> element: keyboard, screen reader and
 * no-JS support come from the browser. Copy buttons appear only once the
 * app is running in the browser (`interactive`).
 */
@Component({
  selector: 'app-tip-card',
  imports: [TranslatePipe],
  template: `
    <details class="tip" [id]="tip().id" [open]="open()" (toggle)="onToggle($event)">
      <summary>
        <span class="tip-title">{{ tip().title }}</span>
        <span [class]="'tag tag-' + tip().platform">
          <span class="sr-only">{{ 'tip.platform' | translate }} </span>{{ 'tip.' + tip().platform | translate }}
        </span>
      </summary>
      <div class="tip-body">
        @for (b of tip().body; track $index) {
          @switch (b.kind) {
            @case ('p') { <p [innerHTML]="b.html"></p> }
            @case ('why') { <p class="why" [innerHTML]="b.html"></p> }
            @case ('list') {
              @if (b.ordered) {
                <ol>@for (i of b.items; track $index) { <li [innerHTML]="i"></li> }</ol>
              } @else {
                <ul>@for (i of b.items; track $index) { <li [innerHTML]="i"></li> }</ul>
              }
            }
            @case ('code') {
              <div class="cmd">
                @if (interactive()) {
                  <button type="button" class="copy-btn" [class.done]="copied() === $index"
                          [attr.aria-label]="'tip.copyLabel' | translate"
                          (click)="copy(b.code, $index)">
                    {{ (copied() === $index ? 'tip.copied' : 'tip.copy') | translate }}
                  </button>
                }
                <!-- tabindex: long lines scroll horizontally and must be reachable by keyboard -->
                <pre tabindex="0"><code>{{ b.code }}</code></pre>
              </div>
            }
          }
        }
      </div>
    </details>
  `,
})
export class TipCard {
  readonly tip = input.required<Tip>();
  readonly open = input(false);
  readonly interactive = input(false);
  readonly toggled = output<boolean>();

  protected readonly copied = signal<number | null>(null);
  private readonly announcer = inject(AnnouncerService);
  private readonly lang = inject(LangService);
  private readonly host = inject(ElementRef<HTMLElement>);

  onToggle(e: Event): void {
    const open = (e.target as HTMLDetailsElement).open;
    if (open !== this.open()) this.toggled.emit(open);
  }

  focusSummary(): void {
    this.host.nativeElement.querySelector('summary')?.focus();
  }

  copy(text: string, index: number): void {
    const fail = () => this.announcer.announce(this.lang.t('tip.copyFail'));
    if (!navigator.clipboard?.writeText) return fail();
    navigator.clipboard.writeText(text).then(() => {
      this.copied.set(index);
      this.announcer.announce(this.lang.t('tip.copiedMsg'));
      setTimeout(() => this.copied.set(null), 2000);
    }, fail);
  }
}
