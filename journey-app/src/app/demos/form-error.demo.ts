import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnnouncerService } from '../shared/announcer.service';
import { LangService } from '../shared/lang.service';
import { canSpeak, speak, stopSpeaking } from '../shared/speech';

type Variant = 'bad' | 'good';

/**
 * The same email field twice: once with a purely visual error, once with
 * aria-invalid, aria-describedby, focus management and a live announcement.
 * The "bad" variant is deliberately inaccessible – that is the lesson.
 */
@Component({
  selector: 'app-form-error-demo',
  imports: [TranslatePipe],
  template: `
    <p class="demo-badge">{{ 'demo.badge' | translate }}</p>
    <h3 id="demo-form-errors">{{ 'demo.form.title' | translate }}</h3>
    <p>{{ 'demo.form.intro' | translate }}</p>

    <fieldset class="chips">
      <legend>{{ 'demo.form.variant' | translate }}</legend>
      @for (v of variants; track v) {
        <span class="chip">
          <input type="radio" name="form-variant" [id]="'fv-' + v" [checked]="variant() === v" (change)="setVariant(v)">
          <label [for]="'fv-' + v">{{ 'demo.form.' + v | translate }}</label>
        </span>
      }
    </fieldset>

    <form class="demo-form" novalidate (submit)="submit($event)">
      <label for="demo-email">{{ 'demo.form.email' | translate }}</label>
      @if (variant() === 'good') {
        <input #field id="demo-email" type="email" autocomplete="off" [value]="value()" (input)="onInput($event)"
               [attr.aria-invalid]="state() === 'error' ? 'true' : null"
               [attr.aria-describedby]="state() === 'error' ? 'demo-email-error' : null"
               [class.invalid]="state() === 'error'">
      } @else {
        <input #field id="demo-email" type="email" autocomplete="off" [value]="value()" (input)="onInput($event)"
               [class.invalid]="state() === 'error'">
      }
      @if (state() === 'error') {
        <p id="demo-email-error" class="field-error">{{ 'demo.form.error' | translate }}</p>
      }
      @if (state() === 'ok') {
        <p class="field-ok">{{ 'demo.form.success' | translate }}</p>
      }
      <button type="submit" class="tool-btn">{{ 'demo.form.submit' | translate }}</button>
    </form>

    <p class="demo-label">{{ 'demo.form.announce' | translate }}</p>
    <blockquote class="speech" [class.noisy]="variant() === 'bad' && state() === 'error'">{{ announcement() }}</blockquote>
    @if (state() === 'error') {
      <p class="why">{{ (variant() === 'good' ? 'demo.form.explainGood' : 'demo.form.explainBad') | translate }}</p>
    }
    @if (speakable && state() !== 'idle') {
      <p class="btn-row">
        <button type="button" class="tool-btn" (click)="read()">▶ {{ 'demo.speak' | translate }}</button>
        <button type="button" class="btn-outline tool-btn" (click)="stop()">{{ 'demo.stop' | translate }}</button>
      </p>
    }
  `,
})
export class FormErrorDemo {
  private readonly langs = inject(LangService);
  private readonly announcer = inject(AnnouncerService);
  private readonly field = viewChild<ElementRef<HTMLInputElement>>('field');

  protected readonly variants: Variant[] = ['bad', 'good'];
  protected readonly variant = signal<Variant>('bad');
  protected readonly value = signal('martin@beispiel');
  protected readonly state = signal<'idle' | 'error' | 'ok'>('idle');
  protected readonly speakable = canSpeak();

  protected readonly announcement = computed(() => {
    if (this.state() === 'idle') return this.langs.t('demo.form.announceIdle');
    const value = this.value() || '…';
    if (this.state() === 'ok') return this.langs.t('demo.form.success');
    return this.langs.t(this.variant() === 'good' ? 'demo.form.announceGoodText' : 'demo.form.announceBadText', { value });
  });

  protected setVariant(v: Variant): void {
    this.variant.set(v);
    this.state.set('idle');
    stopSpeaking();
  }

  protected onInput(e: Event): void {
    this.value.set((e.target as HTMLInputElement).value);
  }

  protected submit(e: Event): void {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.value());
    this.state.set(valid ? 'ok' : 'error');
    if (valid) {
      this.announcer.announce(this.langs.t('demo.form.success'));
      return;
    }
    if (this.variant() === 'good') {
      // Accessible version: focus the field and announce the error.
      this.field()?.nativeElement.focus();
      this.announcer.announce(this.langs.t('demo.form.error'));
    }
    // Inaccessible version: nothing is announced, focus stays on the button.
  }

  protected read(): void {
    speak(this.announcement(), this.langs.lang());
  }

  protected stop(): void {
    stopSpeaking();
  }
}
