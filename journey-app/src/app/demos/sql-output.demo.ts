import { Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LangService } from '../shared/lang.service';
import { canSpeak, speak, stopSpeaking } from '../shared/speech';

type Mode = 'table' | 'line';

const ROWS = {
  de: [
    { id: 1, firma: 'Beispiel GmbH', status: 'offen' },
    { id: 2, firma: 'Muster AG', status: 'Gespräch' },
  ],
  en: [
    { id: 1, firma: 'Example Ltd', status: 'open' },
    { id: 2, firma: 'Sample Inc', status: 'interview' },
  ],
};

/**
 * Shows the same query result as a psql-style table and in line mode,
 * with an approximation of what a screen reader speaks for each.
 */
@Component({
  selector: 'app-sql-output-demo',
  imports: [TranslatePipe],
  template: `
    <p class="demo-badge">{{ 'demo.badge' | translate }}</p>
    <h3 id="demo-sql-output">{{ 'demo.sql.title' | translate }}</h3>
    <p>{{ 'demo.sql.intro' | translate }}</p>

    <fieldset class="chips">
      <legend>{{ 'demo.sql.mode' | translate }}</legend>
      @for (m of modes; track m) {
        <span class="chip">
          <input type="radio" name="sql-mode" [id]="'sql-' + m" [checked]="mode() === m" (change)="setMode(m)">
          <label [for]="'sql-' + m">{{ 'demo.sql.' + m | translate }}</label>
        </span>
      }
    </fieldset>

    <p class="demo-label" id="sql-out-label">{{ 'demo.sql.output' | translate }}</p>
    <pre class="terminal" aria-labelledby="sql-out-label" tabindex="0"><code>{{ output() }}</code></pre>

    <p class="demo-label">{{ 'demo.sql.speech' | translate }}</p>
    <blockquote class="speech" [class.noisy]="mode() === 'table'">{{ speech() }}</blockquote>

    @if (speakable) {
      <p class="btn-row">
        <button type="button" class="tool-btn" (click)="read()">▶ {{ 'demo.speak' | translate }}</button>
        <button type="button" class="btn-outline tool-btn" (click)="stop()">{{ 'demo.stop' | translate }}</button>
      </p>
    }
  `,
})
export class SqlOutputDemo {
  private readonly langs = inject(LangService);
  protected readonly modes: Mode[] = ['table', 'line'];
  protected readonly mode = signal<Mode>('table');
  protected readonly speakable = canSpeak();

  protected readonly output = computed(() => {
    const lang = this.langs.lang();
    const rows = ROWS[lang];
    const col = lang === 'de' ? 'firma' : 'company';
    if (this.mode() === 'line') {
      return rows
        .map((r) => [`    id = ${r.id}`, `${col.padStart(7)} = ${r.firma}`, `${'status'.padStart(7)} = ${r.status}`].join('\n'))
        .join('\n\n');
    }
    const w = [4, 15, 10];
    const line = '+' + w.map((n) => '-'.repeat(n)).join('+') + '+';
    const row = (c: string[]) => '|' + c.map((v, i) => ' ' + v.padEnd(w[i] - 1)).join('|') + '|';
    return [line, row(['id', col, 'status']), line, ...rows.map((r) => row([String(r.id), r.firma, r.status])), line].join('\n');
  });

  protected readonly speech = computed(() =>
    this.langs.t(this.mode() === 'table' ? 'demo.sql.speechTable' : 'demo.sql.speechLine'),
  );

  protected setMode(m: Mode): void {
    this.mode.set(m);
    stopSpeaking();
  }

  protected read(): void {
    speak(this.speech(), this.langs.lang(), 1.3);
  }

  protected stop(): void {
    stopSpeaking();
  }
}
