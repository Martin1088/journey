import { code, list, p, steps, why } from './blocks';
import { SiteContent } from './model';
import { COACHING_DE, WORK_DE } from './pages.de';

export const CONTENT_DE: SiteContent = {
  work: WORK_DE,
  coaching: COACHING_DE,
  chapters: [
    // ================================================================
    {
      id: 'quikstep',
      when: '2020 – 2021',
      title: 'Berufliche Rehabilitation bei QuikStep',
      short: 'Arbeiten ohne Sehen lernen und mit C, Java, Python und HTML ins Programmieren einsteigen.',
      lead:
        'Nach meiner Erblindung 2015 habe ich 2020 bis 2021 eine berufliche Rehabilitation bei QuikStep in Durmersheim gemacht. Dort habe ich mir eine Arbeitsweise ganz ohne Visualität erarbeitet und die Grundlagen der Programmierung gelernt – vor allem in C, dazu Java, Python und HTML. Und dort ist ein Wissensdurst entstanden, der seitdem nicht nachgelassen hat: Ich wollte verstehen, wie Software funktioniert, nicht nur, wie man sie bedient. In diesem Jahr wurde mir klar: Programmieren ist Text, und mit Text kann ich in vollem Tempo arbeiten. Meine Empfehlung für alle, die dieselbe Neugier haben: die englischsprachige Videoreihe <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" lang="en">Crash Course Computer Science</a>: 40 Folgen mit Carrie Anne Philbin, von der Geschichte des Computers über die Hardware bis zu den Grundlagen von Programmierung und Software. Sie hat mir sehr geholfen.',
      sections: [
        {
          id: 'arbeitsweise',
          when: '2020',
          title: 'Eine Arbeitsweise ohne Sehen aufbauen',
          story: [
            'Der erste Teil der Reha drehte sich nicht um Informatik, sondern um das Werkzeug davor: Screenreader, Tastenkürzel, Audioausgabe und Brailleschrift. Ohne diese Grundlage ist jede Programmiersprache nur ein weiteres Hindernis.',
            'Mit Coaching habe ich gelernt, mich über die Struktur von Dokumenten und Anwendungen zu bewegen, statt sie Zeile für Zeile anzuhören. Meine Werkzeuge waren Windows mit den Screenreadern NVDA und JAWS – bis zu meinem Umstieg auf den Mac im dritten Lehrjahr.',
          ],
          tipsHeading: 'Praxis-Tipps für den Einstieg',
          tips: [
            {
              id: 'tip-screenreader-basics',
              platform: 'windows',
              title: 'NVDA und JAWS: die Struktur-Navigation zuerst lernen',
              body: [
                p('Unter Windows arbeite ich mit <strong>NVDA</strong> (kostenlos) und <strong>JAWS</strong>. Die Schnellnavigation im Web ist in beiden fast gleich – wer sie in einem Screenreader beherrscht, kommt im anderen sofort zurecht:'),
                list(
                  '<kbd>H</kbd> nächste Überschrift, <kbd>F</kbd> nächstes Formularfeld, <kbd>T</kbd> nächste Tabelle; Landmarks mit <kbd>D</kbd> in NVDA und <kbd>R</kbd> in JAWS',
                  'Listen auf einen Blick: NVDA <kbd>NVDA</kbd>+<kbd>F7</kbd> (Elementliste); JAWS <kbd>Einfg</kbd>+<kbd>F6</kbd> Überschriften, <kbd>Einfg</kbd>+<kbd>F7</kbd> Links, <kbd>Einfg</kbd>+<kbd>F5</kbd> Formularfelder',
                  'Lese- und Fokusmodus: NVDA wechselt mit <kbd>NVDA</kbd>+<kbd>Leertaste</kbd>, JAWS schaltet den virtuellen Cursor mit <kbd>Einfg</kbd>+<kbd>Z</kbd> – der häufigste Grund, warum „die Tasten plötzlich nicht mehr gehen“',
                ),
                why('<strong>Warum zwei Screenreader:</strong> Was in einem nicht vorgelesen wird, klappt im anderen oft – und beim Testen eigener Oberflächen zeigt der Vergleich echte Fehler statt Eigenheiten eines Programms.'),
              ],
            },
            {
              id: 'tip-speech-rate',
              platform: 'windows',
              title: 'Sprechtempo schrittweise erhöhen',
              body: [
                list(
                  '<strong>NVDA:</strong> <kbd>NVDA</kbd>+<kbd>Strg</kbd>+<kbd>Pfeil links/rechts</kbd> wählt eine Einstellung der Sprachausgabe (Geschwindigkeit, Tonhöhe, Lautstärke …), <kbd>NVDA</kbd>+<kbd>Strg</kbd>+<kbd>Pfeil hoch/runter</kbd> ändert ihren Wert.',
                  '<strong>JAWS:</strong> <kbd>Alt</kbd>+<kbd>Strg</kbd>+<kbd>Bild auf/ab</kbd> ändert die Geschwindigkeit sofort; dauerhaft im Einstellungscenter.',
                ),
                p('Erhöhe die Geschwindigkeit in kleinen Schritten, etwa alle ein bis zwei Wochen, sobald sich das aktuelle Tempo normal anfühlt. Ein hohes Tempo spart beim Lesen von Code und Logs jeden Tag viel Zeit.'),
                why('<strong>Warum:</strong> Zu schnell zu früh führt dazu, dass man mehr zurückspult als liest.'),
              ],
            },
            {
              id: 'tip-braille',
              platform: 'both',
              title: 'Braillezeile für Code: Zeichen, die Sprache verschluckt',
              body: [
                p('Sprachausgabe ist schnell, aber bei Code ungenau: Klammern, Semikolons und Einrückung gehen leicht unter. Eine Braillezeile mit 8-Punkt-Computerbraille zeigt jedes Zeichen genau so, wie es in der Datei steht.'),
                list(
                  'Für Überblick und Fließtext: Sprache',
                  'Für die eine Zeile mit dem Syntaxfehler: Braille',
                  'Die Satzzeichen-Ansage für Code-Arbeit auf „alle“ stellen, damit auch die Sprache Klammern vorliest',
                ),
              ],
            },
          ],
        },
        {
          id: 'c-lernen',
          when: '2020 – 2021',
          title: 'Programmieren lernen: C, Java, Python und HTML',
          story: [
            'Im zweiten Teil kamen die Grundlagen der Informatik dazu, mit C als Hauptsprache. C verzeiht wenig, und der Compiler antwortet mit Meldungen im Terminal – also mit Text. Genau das hat mir gezeigt, dass Softwareentwicklung ein Beruf ist, den ich ohne Sehen ausüben kann.',
            'Daneben habe ich in Java und Python hineingeschaut und meine ersten Seiten in HTML geschrieben – bewusst nur die Grundbausteine: Variablen, Schleifen und Funktionen, noch ohne Bibliotheken. Dieselben Konzepte in mehreren Sprachen wiederzuerkennen, hat meine Neugier auf Informatik erst richtig geweckt.',
          ],
          tipsHeading: 'Praxis-Tipps: erste Programme',
          tips: [
            {
              id: 'tip-first-c',
              platform: 'both',
              title: 'Erste C-Programme: immer nur den ersten Fehler lesen',
              body: [
                p('Ein einziger fehlender Strichpunkt erzeugt oft zwanzig Folgefehler. Mit Screenreader ist das besonders mühsam. Lass dir deshalb nur die ersten Zeilen ausgeben, korrigiere, kompiliere neu.'),
                code('gcc -Wall -Wextra -o hallo hallo.c 2>&1 | head -n 5'),
                p('Die Meldung beginnt mit <code>datei:zeile:spalte</code>. Mit der Zeilennummer springst du im Editor direkt hin, statt zu suchen.'),
              ],
            },
            {
              id: 'tip-indentation',
              platform: 'windows',
              title: 'Einrückung hörbar machen – Pflicht für Python',
              body: [
                p('In Python ist die Einrückung Teil der Syntax: Eine Zeile zu weit links beendet eine Schleife, ohne dass ein Zeichen fehlt. Lass dir die Einrückung deshalb ansagen, statt Leerzeichen zu zählen.'),
                list(
                  '<strong>NVDA:</strong> <kbd>NVDA</kbd>+<kbd>Strg</kbd>+<kbd>D</kbd> öffnet die Dokumentformatierung; unter „Zeileneinrückung“ „Töne“ oder „Sprache und Töne“ wählen. Die Tonhöhe steigt mit der Tiefe – ein Wechsel fällt sofort auf.',
                  '<strong>JAWS:</strong> kann Einrückungen ebenfalls ansagen; im Einstellungscenter nach „Einrückung“ suchen.',
                  'Einheitlich mit 4 Leerzeichen einrücken, nie mit Tabs gemischt – sonst klingen zwei gleich tiefe Zeilen verschieden.',
                ),
                why('<strong>Hilft auch bei C, Java und HTML:</strong> Dort ist Einrückung zwar keine Syntax, aber die schnellste Art, zu hören, wo ein Block endet.'),
              ],
            },
          ],
        },
      ],
    },

    // ================================================================
    {
      id: 'training',
      when: '2021 – 2024',
      title: 'Ausbildung zum Fachinformatiker',
      short: 'Inklusive Ausbildung am DKFZ: Terminal, SQL, Webentwicklung, Rust.',
      lead:
        'Am Deutschen Krebsforschungszentrum (DKFZ) in Heidelberg habe ich eine inklusive Ausbildung zum Fachinformatiker für Anwendungsentwicklung gemacht, mit der Hubert-Sternberg-Schule in Wiesloch als Berufsschule. Drei Jahre, drei Schwerpunkte – und 2024 der Abschluss vor der IHK.',
      sections: [
        {
          id: 'lehrjahr-1',
          when: '2021 – 2022 · Federated Information Systems',
          title: '1. Lehrjahr: Terminal, SQL und die Grundlagen',
          story: [
            'Das erste Jahr in der Abteilung Federated Information Systems drehte sich um die Grundlagen: verteilte Systeme, medizinische Informatik, Java, APIs, Docker, Linux-Konfiguration, Git, Datenbanken und Scrum.',
            'Hier habe ich gelernt, dass das Terminal für blinde Entwickler kein Notbehelf ist, sondern das zugänglichste Werkzeug überhaupt – wenn man die Ausgabe in eine lesbare Form bringt.',
          ],
          tipsHeading: 'Praxis-Tipps: Terminal und Datenbanken',
          demo: 'sql-output',
          tips: [
            {
              id: 'tip-linux-terminal',
              platform: 'linux',
              title: 'Linux-Terminal: Ausgabe in Häppchen statt als Wand',
              body: [
                p('Lange Ausgaben rauschen am Screenreader vorbei. Diese Muster halten sie lesbar – in WSL unter Windows genauso wie später im Terminal auf dem Mac:'),
                code(`
ls -1                      # eine Datei pro Zeile
ls -1 | wc -l              # erst zählen, dann entscheiden
befehl | head -n 20        # nur der Anfang
befehl | less              # seitenweise, mit /suche
befehl > ausgabe.txt 2>&1  # in Datei, dann im Editor lesen
cd -                       # zurück ins vorige Verzeichnis`),
                why('<strong>Warum:</strong> Eine Datei im Editor kann ich zeilenweise, mit Suche und in Ruhe lesen – eine scrollende Ausgabe nicht.'),
              ],
            },
            {
              id: 'tip-windows-terminal',
              platform: 'windows',
              title: 'Windows Terminal und PowerShell lesbar machen',
              body: [
                p('Windows Terminal war in der Ausbildung mein Hauptwerkzeug, mit NVDA und JAWS. Mit <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>F</kbd> durchsuchst du die Ausgabe, mit dem NVDA-Lesecursor (Ziffernblock <kbd>7</kbd> <kbd>8</kbd> <kbd>9</kbd>) gehst du Zeile für Zeile zurück. PowerShell gibt standardmäßig breite Tabellen aus – untereinander ist für Sprache viel angenehmer:'),
                code(String.raw`
Get-ChildItem | Select-Object -ExpandProperty Name
Get-Process code | Format-List Name, Id, CPU
Get-Content .\app.log -Tail 20
Get-ChildItem | Out-File liste.txt   # in Datei lesen
Get-Location | Set-Clipboard         # in die Zwischenablage`),
                p('In der klassischen Eingabeaufforderung liefert <code>dir /b</code> nur die Namen.'),
              ],
            },
            {
              id: 'tip-psreadline',
              platform: 'windows',
              title: 'PowerShell: Vorschläge beim Tippen abschalten',
              body: [
                p('PSReadLine blendet beim Tippen graue Vorschläge aus dem Verlauf ein. Je nach Screenreader werden sie mitgelesen oder verwirren beim Korrigieren, weil nicht klar ist, was wirklich in der Zeile steht. Abschalten, und Vorschläge nur bei Bedarf mit <kbd>F8</kbd> (Verlauf passend zum Anfang der Zeile) holen:'),
                code('Set-PSReadLineOption -PredictionSource None'),
                p('Damit das dauerhaft gilt, die Zeile in dein Profil schreiben – <code>notepad $PROFILE</code> öffnet es.'),
              ],
            },
            {
              id: 'tip-wsl',
              platform: 'windows',
              title: 'WSL: Linux-Werkzeuge mit dem Windows-Screenreader',
              body: [
                p('Mit WSL laufen Bash, psql, Docker-CLI und alle Linux-Tools im Windows Terminal – und NVDA oder JAWS lesen sie wie jede andere Ausgabe. So muss ich für Linux-Arbeit den Screenreader nicht wechseln.'),
                code(String.raw`
wsl --install          # einmalig, in PowerShell als Administrator
wsl -l -v              # installierte Distributionen
wsl ls -1              # einzelnen Linux-Befehl aus PowerShell starten
befehl | clip.exe      # Ausgabe aus WSL in die Windows-Zwischenablage
explorer.exe .         # aktuellen WSL-Ordner im Explorer öffnen`),
                p('Die Linux-Dateien erreichst du in Windows unter <code>\\\\wsl$</code>. Für die Arbeit an Projekten den Code im Linux-Dateisystem halten, nicht unter <code>/mnt/c</code> – das ist deutlich schneller.'),
              ],
            },
            {
              id: 'tip-sql-terminal',
              platform: 'both',
              title: 'SQL im Terminal: Datensätze untereinander statt Tabelle',
              body: [
                p('Eine breite Ergebnistabelle wird vorgelesen als „Strich Strich Plus Strich …“. Alle gängigen Kommandozeilen-Clients können Datensätze stattdessen als <em>Spalte = Wert</em> untereinander ausgeben:'),
                code(String.raw`
-- SQLite (sqlite3)
.headers on
.mode line
SELECT * FROM bewerbung LIMIT 3;

-- PostgreSQL (psql)
\x auto
\pset pager off
SELECT * FROM bewerbung LIMIT 3;

-- MySQL / MariaDB: Abfrage mit \G statt ; beenden
SELECT * FROM bewerbung LIMIT 3\G`),
                p('Für Skripte und schnelle Zählungen ohne Rahmen und Kopfzeile:'),
                code(`psql -d app -A -t -F ';' -c "SELECT status, count(*) FROM bewerbung GROUP BY status"`),
                why('<strong>Warum:</strong> Immer zuerst <code>count(*)</code> oder <code>LIMIT</code> – tausend Zeilen anzuhören ist keine Datenanalyse. Probier den Unterschied in der Demo unten aus.'),
              ],
            },
            {
              id: 'tip-git',
              platform: 'both',
              title: 'Git ohne Pager und mit kurzer Ausgabe',
              body: [
                p('Git öffnet Logs und Diffs in einem Pager, der für Screenreader oft schwer zu verlassen ist. Kurze Formate helfen sofort:'),
                code(`
git status -s
git --no-pager log --oneline -n 10
git diff --stat
git diff --word-diff   # zeigt, welches Wort sich geändert hat, nicht nur die Zeile`),
                p('Wer den Pager gar nicht will: <code>git config --global core.pager cat</code>.'),
              ],
            },
            {
              id: 'tip-docker-format',
              platform: 'both',
              title: 'Docker-Ausgaben auf das Wesentliche kürzen',
              body: [
                p('<code>docker ps</code> liefert eine sehr breite Tabelle. Mit <code>--format</code> bekommst du genau die Felder, die du brauchst:'),
                code(`docker ps --format '{{.Names}}: {{.Status}}'`),
                p('Ergebnis zum Beispiel: <code>db: Up 2 hours</code> – eine Zeile pro Container, sofort verständlich.'),
              ],
            },
          ],
        },
        {
          id: 'lehrjahr-2',
          when: '2022 – 2023 · Krebsinformationsdienst',
          title: '2. Lehrjahr: Webentwicklung',
          story: [
            'Im zweiten Jahr war ich beim Krebsinformationsdienst und habe mit PHP, JavaScript und jQuery an einer Online-Beratungsplattform mitgearbeitet. Das war meine erste Arbeit an Oberflächen, die andere Menschen benutzen – und die beste Schule dafür, Barrierefreiheit von der anderen Seite zu sehen. Gute Grundlagen in JavaScript hat mir ein Kurs auf Udemy gegeben.',
            'Von Mitte bis Ende des Jahres habe ich außerdem eine Ubuntu-VM in VirtualBox mit dem Konsolen-Screenreader Fenrir eingerichtet und getestet – mein erster Versuch, Linux ganz ohne Windows-Screenreader zu bedienen.',
          ],
          tipsHeading: 'Praxis-Tipps: Linux-VM, Web und APIs',
          demo: 'form-errors',
          tips: [
            {
              id: 'tip-fenrir',
              platform: 'linux',
              title: 'Fenrir: Screenreader für die Linux-Konsole',
              body: [
                p('<strong>Fenrir</strong> ist ein Screenreader für die Textkonsole (TTY), ganz ohne grafische Oberfläche: schlank, schnell und unabhängig vom Desktop. Unter Debian und Ubuntu gibt es ihn als Paket <code>fenrir</code>.'),
                list(
                  'Mit dem Review-Modus liest du bereits ausgegebene Zeilen nach, ohne die Eingabe zu verlassen.',
                  'Er funktioniert auch, wenn der Desktop nicht startet – gerade bei Systemproblemen ein großer Vorteil.',
                  'Für den Alltag unter Windows ist <abbr title="Windows-Subsystem für Linux">WSL</abbr> mit NVDA oder JAWS bequemer; Fenrir lohnt sich, wenn du ein echtes Linux ohne Desktop bedienen willst.',
                ),
              ],
            },
            {
              id: 'tip-virtualbox',
              platform: 'linux',
              title: 'Linux in VirtualBox ausprobieren, ohne den Windows-Screenreader zu verlieren',
              body: [
                p('Eine VM ist der sichere Weg, Linux und Fenrir kennenzulernen: Windows mit NVDA oder JAWS bleibt als Rückfallebene, und kaputtkonfigurieren ist kein Risiko.'),
                list(
                  'Klickt oder tippt man in das VM-Fenster, fängt die VM die Tastatur ab – dann erreichen auch die Kürzel deines Windows-Screenreaders nur noch die VM. Die Host-Taste (standardmäßig die rechte <kbd>Strg</kbd>) gibt die Tastatur wieder frei.',
                  'Damit Fenrir in der VM spricht, muss in den VM-Einstellungen Audio aktiviert sein.',
                  'Vor jedem Experiment einen Snapshot anlegen – zurück geht es dann in Sekunden.',
                ),
                code(`
VBoxManage list vms
VBoxManage snapshot "Ubuntu" take vor-fenrir-test
VBoxManage snapshot "Ubuntu" restore vor-fenrir-test   # bei ausgeschalteter VM`),
                why('<strong>Warum:</strong> Wer zwischen zwei Screenreadern wechselt, braucht immer einen Weg zurück, der garantiert spricht.'),
              ],
            },
            {
              id: 'tip-test-own-pages',
              platform: 'both',
              title: 'Eigene Seiten mit dem Screenreader in drei Schritten testen',
              body: [
                steps(
                  '<strong>Überschriften:</strong> Mit <kbd>H</kbd> durchspringen. Ergibt die Liste allein ein sinnvolles Inhaltsverzeichnis?',
                  '<strong>Bereiche:</strong> Mit <kbd>D</kbd> (NVDA) oder <kbd>R</kbd> (JAWS) durch die Landmarks. Gibt es <code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>?',
                  '<strong>Formulare:</strong> Mit <kbd>Tab</kbd> durch alle Felder. Wird zu jedem Feld eine Beschriftung vorgelesen, nicht nur „Eingabefeld“?',
                ),
                why('<strong>Warum:</strong> Diese drei Prüfungen finden in wenigen Minuten die meisten Probleme, lange bevor ein Audit-Tool läuft.'),
              ],
            },
            {
              id: 'tip-accessible-forms',
              platform: 'both',
              title: 'Formulare, die Fehler wirklich ansagen',
              body: [
                p('Ein rot umrandetes Feld sagt dem Screenreader nichts. Jede Fehlermeldung muss mit ihrem Feld verbunden sein:'),
                code(`
<label for="email">E-Mail</label>
<input id="email" type="email" autocomplete="email"
       aria-invalid="true" aria-describedby="email-fehler">
<p id="email-fehler">Bitte eine gültige E-Mail-Adresse eingeben.</p>`),
                list(
                  'Nach dem Absenden den Fokus auf das erste fehlerhafte Feld setzen.',
                  'Erfolg oder Fehler zusätzlich über eine <code>aria-live</code>-Region ansagen.',
                  'Pflichtfelder im Label kennzeichnen, nicht nur mit einem Sternchen-Symbol.',
                ),
                why('<strong>Ausprobieren:</strong> In der Demo unten kannst du beide Varianten absenden und hören, was angesagt wird.'),
              ],
            },
            {
              id: 'tip-keyboard-check',
              platform: 'both',
              title: 'Der Zwei-Minuten-Tastaturtest',
              body: [
                p('Maus weglegen und die eigene Anwendung nur mit der Tastatur bedienen:'),
                list(
                  'Erreicht <kbd>Tab</kbd> jedes Bedienelement in sinnvoller Reihenfolge?',
                  'Ist immer sichtbar und hörbar, wo der Fokus steht?',
                  'Lassen sich Dialoge mit <kbd>Esc</kbd> schließen, und landet der Fokus danach wieder am Auslöser?',
                  'Gibt es irgendetwas, das nur bei Mauszeiger-Hover erscheint?',
                ),
              ],
            },
            {
              id: 'tip-curl-jq',
              platform: 'both',
              title: 'APIs mit curl und jq statt im Browser lesen',
              body: [
                p('JSON im Browser ist mit Screenreader oft ein einziger langer Absatz. Im Terminal formatiert <code>jq</code> die Antwort und filtert genau das heraus, was du brauchst:'),
                code(`
curl -s https://api.example.org/jobs | jq '.'
curl -s https://api.example.org/jobs | jq -r '.items[].title'
curl -s https://api.example.org/jobs | jq '.items | length'`),
                p('Unter Windows gibt es <code>curl.exe</code> und <code>jq</code> ebenfalls, zum Beispiel über <code>winget install jqlang.jq</code>.'),
              ],
            },
            {
              id: 'tip-devtools-console',
              platform: 'both',
              title: 'Browser-Konsole statt visueller Entwicklertools',
              body: [
                p('Die visuellen Teile der Entwicklertools sind schwer zugänglich, die Konsole dagegen ist Text. Öffnen: Chrome <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd>, Firefox <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>K</kbd>.'),
                code(`
document.activeElement          // wo ist der Fokus gerade?
document.querySelectorAll('img:not([alt])').length   // Bilder ohne Alternativtext
[...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.trim())`),
              ],
            },
          ],
        },
        {
          id: 'lehrjahr-3',
          when: '2023 – 2024 · Federated Information Systems',
          title: '3. Lehrjahr: Rust und Abschlussprojekt',
          story: [
            'Im letzten Jahr habe ich mich eigenständig in Rust vertieft und mich in die Abteilungskomponente Samply.beam eingearbeitet, die Kommunikation in streng regulierten klinischen Netzwerken übernimmt.',
            'Mitte des dritten Lehrjahres bin ich auf einen Mac mit VoiceOver umgestiegen, seitdem ist er mein Hauptrechner. Das hieß noch einmal umlernen: andere Tastenlogik, ein anderes Terminal – und die Erfahrung, dass die Grundprinzipien von Windows übertragbar sind.',
            'Mein Abschlussprojekt war eine Raumbelegungssoftware mit REST API, ORM-Mapper, Docker und dynamischem Frontend, mit Kommunikation über Samply.beam. 2024 habe ich die Ausbildung abgeschlossen.',
          ],
          tipsHeading: 'Praxis-Tipps: Mac, Compiler, Container, Dokumentation',
          tips: [
            {
              id: 'tip-voiceover',
              platform: 'mac',
              title: 'Von NVDA/JAWS zu VoiceOver: was sich ändert',
              body: [
                p('VoiceOver ist auf jedem Mac eingebaut, funktioniert aber anders als die Windows-Screenreader. Die wichtigsten Umstellungen:'),
                list(
                  '<kbd>Cmd</kbd>+<kbd>F5</kbd> schaltet VoiceOver ein und aus.',
                  'Die VoiceOver-Taste (<abbr title="VoiceOver-Taste">VO</abbr>) ist <kbd>Ctrl</kbd>+<kbd>Option</kbd> – sie entspricht ungefähr der NVDA- oder Einfügen-Taste.',
                  '<kbd>VO</kbd>+<kbd>U</kbd> öffnet den Rotor: Listen von Überschriften, Links, Formularfeldern und Landmarks, wie die Elementliste in NVDA.',
                  'Im Web springt <kbd>VO</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd> zur nächsten Überschrift. Wer lieber wie in NVDA und JAWS nur <kbd>H</kbd> drückt, aktiviert im VoiceOver-Dienstprogramm die Schnellnavigation mit Einzeltasten.',
                  'Gruppen betreten und verlassen: <kbd>VO</kbd>+<kbd>Umschalt</kbd>+<kbd>Pfeil runter/hoch</kbd> – das gibt es so unter Windows nicht und ist anfangs die größte Umstellung.',
                  'Sprechtempo und Ausführlichkeit dauerhaft im VoiceOver-Dienstprogramm einstellen (<kbd>VO</kbd>+<kbd>F8</kbd>).',
                ),
              ],
            },
            {
              id: 'tip-mac-terminal',
              platform: 'mac',
              title: 'Terminal auf dem Mac: Zwischenablage und Werkzeuge',
              body: [
                p('Die Muster aus dem Linux-Terminal gelten auf dem Mac genauso. Zwei Mac-Eigenheiten helfen zusätzlich:'),
                code(`
befehl | pbcopy        # Ausgabe in die Zwischenablage, dann in Ruhe lesen
pbpaste | wc -l        # Zwischenablage zählen
brew install jq postgresql   # Werkzeuge über Homebrew`),
              ],
            },
            {
              id: 'tip-done-sound',
              platform: 'both',
              title: 'Hörbares Signal, wenn ein langer Befehl fertig ist',
              body: [
                p('Bei Builds, die Minuten dauern, will ich nicht ständig nachhören, ob sie fertig sind. Stattdessen sagt mir der Rechner Bescheid:'),
                code(String.raw`
cargo build; say "Build fertig"                 # macOS
cargo build; spd-say "Build fertig"             # Linux (speech-dispatcher)
cargo build; [console]::beep(800, 300)          # PowerShell`),
                p('Mit <code>&amp;&amp;</code> statt <code>;</code> kommt das Signal nur bei Erfolg (in PowerShell ab Version 7) – dann weiß ich am Ton, ob ich weiterarbeiten kann.'),
              ],
            },
            {
              id: 'tip-cargo-short',
              platform: 'both',
              title: 'Rust-Compilermeldungen kurz halten',
              body: [
                p('Rusts Fehlermeldungen sind hervorragend, aber lang und voller ASCII-Pfeile. Für den schnellen Durchlauf gibt es ein Kurzformat mit einer Zeile pro Fehler:'),
                code(`
cargo check --message-format short
cargo clippy --message-format short`),
                p('Erst wenn ein Fehler unklar ist, die ausführliche Meldung lesen – dann gezielt in eine Datei: <code>cargo check 2&gt; fehler.txt</code>.'),
              ],
            },
            {
              id: 'tip-compose-logs',
              platform: 'both',
              title: 'Logs eines einzelnen Containers verfolgen',
              body: [
                p('Die gemischten Logs aller Dienste sind nicht anhörbar. Immer einen Dienst und eine begrenzte Anzahl Zeilen wählen:'),
                code('docker compose logs --tail 20 -f api'),
                p('<code>--tail 20</code> zeigt nur die letzten 20 Zeilen, <code>-f</code> liest neue Zeilen live mit.'),
              ],
            },
            {
              id: 'tip-plantuml',
              platform: 'both',
              title: 'Diagramme für die Projektdoku als Text schreiben',
              body: [
                p('Für die Projektdokumentation braucht man Diagramme. PlantUML beschreibt sie als Text – ich kann sie schreiben, im Git-Diff prüfen, und sehende Prüfer bekommen trotzdem ein Bild.'),
                code(`
@startuml
actor Nutzer
Nutzer -> Frontend : Raum buchen
Frontend -> API : POST /buchungen
API -> Datenbank : INSERT
API --> Frontend : 201 Created
@enduml`),
                p('Zur Kontrolle ohne Bild: Syntax prüfen, oder das Diagramm als Text rendern und lesen.'),
                code(`
plantuml -checkonly ablauf.puml
plantuml -tutxt ablauf.puml   # erzeugt ablauf.utxt`),
              ],
            },
          ],
        },
      ],
    },

    // ================================================================
    {
      id: 'dkfz',
      when: '2024 – 2026',
      title: 'Arbeiten am DKFZ',
      short: 'Entwickler, Administrator und technische Leitung für Datenplattformen.',
      lead:
        'Nach der Ausbildung bin ich in der Abteilung Federated Information Systems geblieben: erst als Entwickler und Administrator, dann als technische Leitung für zwei Datenplattformen in der Krebsforschung.',
      sections: [
        {
          id: 'entwickler',
          when: '2024 – 2025',
          title: 'Entwickler und Administrator',
          story: [
            'Ich habe an <a href="https://github.com/samply/secret-sync">secret-sync</a> gearbeitet, einer Rust-Komponente, die das Anwendungs- und Nutzermanagement über Authentik und Keycloak automatisiert, und den Pseudonymisierungsdienst Mainzelliste über OAuth abgesichert.',
            'Außerdem war ich für die Serveradministration und interne Dienste (Confluence, GitLab, Authentik) sowie für das Gruppenmanagement der Forschungspartner verantwortlich. Dazu kamen ein Java-Generator für synthetische FHIR-Testdaten, API-Dokumentation mit Swagger UI und eine plattformübergreifende Version der Raumbelegungssoftware mit Tauri.',
          ],
          tipsHeading: 'Praxis-Tipps: Server und Betrieb',
          tips: [
            {
              id: 'tip-journalctl',
              platform: 'linux',
              title: 'Systemlogs gezielt statt komplett lesen',
              body: [
                code(`
journalctl -u nginx -n 20 --no-pager   # letzte 20 Zeilen eines Dienstes
journalctl -p err -b --no-pager        # nur Fehler seit dem letzten Start
grep -i -c error app.log               # wie viele Fehler gibt es überhaupt?`),
                why('<strong>Warum:</strong> <code>--no-pager</code> verhindert, dass ich in einem Pager festhänge; die Begrenzung auf Dienst, Priorität und Zeilenzahl macht aus tausend Zeilen zwanzig relevante.'),
              ],
            },
            {
              id: 'tip-ssh-config',
              platform: 'both',
              title: 'SSH-Kurznamen statt langer Adressen',
              body: [
                p(String.raw`Weniger tippen heißt weniger Tippfehler, die man sich erst wieder anhören muss. In <code>~/.ssh/config</code> (unter Windows <code>%USERPROFILE%\.ssh\config</code>):`),
                code(`
Host gitlab-server
    HostName gitlab.intern.example.org
    User admin
    IdentityFile ~/.ssh/id_ed25519`),
                p('Danach reicht <code>ssh gitlab-server</code>.'),
              ],
            },
            {
              id: 'tip-openapi',
              platform: 'both',
              title: 'API-Dokumentation als Liste statt als Swagger-Oberfläche',
              body: [
                p('Swagger UI ist für Sehende gemacht. Die OpenAPI-Datei dahinter ist JSON und lässt sich in Sekunden durchsuchen:'),
                code(`curl -s http://localhost:8080/v3/api-docs | jq -r '.paths | keys[]'`),
                p('Das liefert alle Endpunkte als Liste – eine Zeile pro Pfad.'),
              ],
            },
          ],
        },
        {
          id: 'leitung',
          when: '2025 – 2026',
          title: 'Technische Leitung',
          story: [
            'Ich habe die technische Leitung für zwei Datenplattformen übernommen: den <a href="https://github.com/samply/itcc-federated-data-hub" lang="en">ITCC Federated Data Hub</a> für die internationale Integration pädiatrischer Krebsdaten über Klinikstandorte hinweg, mit föderierter Annahme von FHIR- und genetischen Daten, pseudonymisierter Speicherung in S3 und Apache Iceberg und Deployment auf Kubernetes. Dazu <strong>LeMeDart</strong>, ein Data Hub mit Partnern in ganz Deutschland: zentrale Datenannahme aus REDCap, Pseudonymisierung und Speicherung.',
            'Ich war verantwortlich für Architektur, Backend-Services, Datenverarbeitung und Deployment und habe den Java-basierten Samply-Exporter mit mehreren Spring-Security-Filter-Chains und gruppenbasierter Autorisierung über OIDC abgesichert.',
          ],
          tipsHeading: 'Praxis-Tipps: Kubernetes, Editor, Architektur',
          tips: [
            {
              id: 'tip-kubectl',
              platform: 'both',
              title: 'kubectl: nur die Spalten, die du wirklich brauchst',
              body: [
                p('Die Standardtabellen von kubectl sind breit und voller Spalten, die man selten braucht. Besser:'),
                code(`
kubectl get pods -o name
kubectl get pods --no-headers -o custom-columns=NAME:.metadata.name,STATUS:.status.phase
kubectl logs deploy/api --tail=20
kubectl get events --sort-by=.lastTimestamp | tail -n 10`),
                p('Für <code>kubectl describe</code> gilt dasselbe wie bei Logs: in eine Datei oder durch <code>less</code>, dann mit Suche nach <code>Events</code> oder <code>Error</code> springen.'),
              ],
            },
            {
              id: 'tip-neovim-quiet',
              platform: 'both',
              title: 'NeoVim für den Screenreader ruhig stellen',
              body: [
                p('Zeilennummern, Icons und eingeblendete Diagnosen sehen gut aus, werden aber bei jeder Zeile mitgelesen. In meiner Konfiguration (<code>init.lua</code>) schalte ich sie ab und hole mir Informationen gezielt, wenn ich sie brauche:'),
                code(`
vim.opt.number = false
vim.opt.relativenumber = false
vim.opt.signcolumn = "no"
vim.diagnostic.config({ virtual_text = false, signs = false })`),
                list(
                  '<kbd>]d</kbd> / <kbd>[d</kbd> springt zur nächsten / vorigen Diagnose, <kbd>Strg</kbd>+<kbd>W</kbd> <kbd>d</kbd> zeigt die Meldung an (NeoVim 0.10+)',
                  '<code>:lua vim.diagnostic.setqflist()</code> und <code>:copen</code> listen alle Fehler untereinander',
                  'In Distributionen wie AstroNvim lassen sich Icons über <code>icons_enabled</code> abschalten',
                ),
              ],
            },
            {
              id: 'tip-architecture-text',
              platform: 'both',
              title: 'Architektur so dokumentieren, dass das ganze Team sie lesen kann',
              body: [
                p('Als technische Leitung muss ich Architektur erklären, nicht nur bauen. Ich halte jedes Diagramm als PlantUML im Repository, direkt neben dem Code, und schreibe zu jedem Diagramm zwei, drei Sätze Fließtext.'),
                list(
                  'Diagramme liegen versioniert im Git und werden im Merge Request mit geprüft.',
                  'Der Begleittext ist die Alternative für alle, die das Bild nicht sehen – und hilft auch Sehenden beim Einstieg.',
                  'Eine Datei pro Sicht: Komponenten, Datenfluss, Deployment.',
                ),
              ],
            },
            {
              id: 'tip-ai-terminal',
              platform: 'both',
              title: 'KI-Assistent im Terminal: Text rein, Text raus',
              body: [
                p('Ich arbeite mit Claude Code im Terminal. Für mich ist das ideal, weil alles Text ist: keine Seitenleisten, keine Pop-ups. Was mir am meisten hilft:'),
                list(
                  'Zusammenfassungen anfordern: „Fasse diesen Diff in drei Sätzen zusammen“ statt hundert Zeilen anzuhören.',
                  'Ausgaben umformen lassen, etwa eine breite Tabelle in eine Liste.',
                  'Erzeugten Code trotzdem selbst lesen und testen – die Verantwortung bleibt bei mir.',
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
