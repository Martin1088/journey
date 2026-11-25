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
      short: 'Inklusive Ausbildung am DKFZ: Terminal, SQL, Python, Java, Webentwicklung, Rust.',
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
            'Schon im ersten Lehrjahr habe ich angefangen, Diagramme als Text mit PlantUML zu schreiben: ERDs für die Datenbanken, dazu Klassen-, Aktivitäts- und Sequenzdiagramme. Meine Beispiele und ein <a href="https://github.com/Martin1088/Plantuml-With-Screenreader/tree/main/Tutorial">Tutorial für den Einstieg</a> liegen im öffentlichen Repository <a href="https://github.com/Martin1088/Plantuml-With-Screenreader">Plantuml-With-Screenreader</a>.',
            'Parallel dazu kam in der Berufsschule Python: <code>print</code> und <code>input</code>, Verzweigungen, Schleifen, Listen und das Abfangen falscher Eingaben. Meine Übungen aus Schule und Selbststudium liegen im Repository <a href="https://github.com/Martin1088/Python-With-Screenreader">Python-With-Screenreader</a>, in den Ordnern <a href="https://github.com/Martin1088/Python-With-Screenreader/tree/main/school">school</a> und <a href="https://github.com/Martin1088/Python-With-Screenreader/tree/main/begin">begin</a>.',
          ],
          tipsHeading: 'Praxis-Tipps: Terminal, Datenbanken und Python',
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
            {
              id: 'tip-docker-mysql',
              platform: 'both',
              title: 'MySQL mit Docker statt XAMPP',
              body: [
                p('XAMPP bringt MySQL mit, wird aber über ein grafisches Control Panel und phpMyAdmin im Browser bedient – beides ist mit Screenreader mühsam. Mit Docker startet MySQL mit einem einzigen Befehl, und alles Weitere passiert im Terminal:'),
                code(String.raw`
docker run -d --name mysql-test \
  -e MYSQL_ROOT_PASSWORD=geheim \
  -e MYSQL_DATABASE=test \
  -p 3306:3306 \
  -v mysql-daten:/var/lib/mysql \
  mysql:8.4

docker logs --tail 5 mysql-test               # auf „ready for connections“ warten
docker exec -it mysql-test mysql -uroot -p test`),
                list(
                  'In PowerShell den <code>docker run</code>-Befehl ohne die Backslashes in eine Zeile schreiben.',
                  '<code>-v mysql-daten:/var/lib/mysql</code> legt die Daten in einem Volume ab. Sie bleiben erhalten, auch wenn der Container gelöscht wird.',
                  '<code>docker stop mysql-test</code> und <code>docker start mysql-test</code> ersetzen die Start- und Stopp-Knöpfe im Control Panel.',
                  'Programme in Java, PHP oder Python verbinden sich wie bei XAMPP über <code>localhost:3306</code>.',
                ),
                why('<strong>Warum:</strong> Jede Übung bekommt ihre eigene, saubere Datenbank, und der Befehl lässt sich in einer Textdatei aufheben und wiederholen. Ein Klick-Weg im Control Panel lässt sich nicht so einfach nachlesen.'),
              ],
            },
            {
              id: 'tip-plantuml-erd',
              platform: 'both',
              title: 'Erstes ERD als Text: Datenbanken mit PlantUML planen',
              body: [
                p('Ein Entity-Relationship-Diagramm zeigt Tabellen, Schlüssel und Beziehungen. In PlantUML ist es eine Textdatei, die ich Zeile für Zeile lesen und im Git-Diff prüfen kann:'),
                code(String.raw`@startuml
entity Kunde {
  * id : int <<PK>>
  --
  name : varchar(100)
}

entity Konto {
  * iban : varchar(34) <<PK>>
  --
  * kunde_id : int <<FK>>
  saldo : decimal(19,2)
}

Kunde ||--o{ Konto : besitzt
@enduml`),
                list(
                  '<code>*</code> markiert Pflichtfelder, <code>--</code> trennt den Schlüssel von den übrigen Spalten.',
                  '<code>||--o{</code> heißt: genau ein Kunde, null bis viele Konten. Links steht die eine Seite, rechts die andere – das lässt sich auch vorgelesen gut merken.',
                  'Mehr ERDs aus meiner Ausbildung – Gebrauchtfahrzeuge, Unternehmen, Kurierdienst – im Ordner <a href="https://github.com/Martin1088/Plantuml-With-Screenreader/tree/main/database">database</a> meines Repositorys; Klassen-, Aktivitäts- und Sequenzdiagramme im <a href="https://github.com/Martin1088/Plantuml-With-Screenreader/tree/main/Tutorial">Tutorial</a>.',
                ),
                p('Ohne Bild prüfen: <code>plantuml -tutxt erd.puml</code> rendert das Diagramm als Text, <code>plantuml -checkonly erd.puml</code> prüft nur die Syntax.'),
              ],
            },
            {
              id: 'tip-python-input-loop',
              platform: 'both',
              title: 'Python: Eingaben in einer Schleife prüfen',
              body: [
                p('Die erste Hürde in Python sind Eingaben: <code>input()</code> liefert immer Text, und <code>int()</code> bricht bei „abc“ mit einem Fehler ab. Diese Schleife aus meinen Übungen fragt so lange nach, bis wirklich eine Zahl kommt:'),
                code(`
while True:
    try:
        zahl = int(input("Gib eine ganze Zahl ein: "))
        break
    except ValueError:
        print("Das ist keine gültige Ganzzahl.")
print(f"Deine Zahl: {zahl}")`),
                list(
                  'Die Fehlermeldung als eigene Zeile ausgeben – der Screenreader liest sie sofort, ohne dass ich suchen muss.',
                  'Den Text für <code>input()</code> mit Doppelpunkt und Leerzeichen enden lassen. Sonst klebt die eigene Eingabe in der Sprachausgabe direkt am Prompt.',
                  'Mehr Übungen – Listen, verschachtelte Listen, Fakultät, Kreisberechnung, Ratespiel – im Ordner <a href="https://github.com/Martin1088/Python-With-Screenreader/tree/main/begin/Exercise">begin/Exercise</a>.',
                ),
              ],
            },
            {
              id: 'tip-python-traceback',
              platform: 'both',
              title: 'Python-Fehlermeldungen von unten lesen',
              body: [
                p('Ein Traceback beginnt beim äußersten Aufruf und endet mit dem eigentlichen Fehler. Vorgelesen heißt das: Die wichtigste Zeile kommt zuletzt. Deshalb lese ich zuerst nur das Ende:'),
                code(`
python3 skript.py 2>&1 | tail -n 3                    # Linux und macOS
python skript.py 2>&1 | Select-Object -Last 3         # PowerShell`),
                p('Die letzte Zeile nennt Fehlertyp und Ursache, etwa <code>ValueError: invalid literal for int()</code>. Die Zeile davor enthält Datei und Zeilennummer (<code>File "skript.py", line 4</code>) – damit springe ich im Editor direkt hin.'),
                code('python3 -m py_compile skript.py   # nur die Syntax prüfen, ohne das Programm zu starten'),
              ],
            },
            {
              id: 'tip-python-repl',
              platform: 'both',
              title: 'Die interaktive Python-Shell zum Nachschlagen',
              body: [
                p('Statt in der Dokumentation zu blättern, frage ich Python selbst. In der interaktiven Shell (<code>python3</code> ohne Datei) liefern diese Zeilen reinen Text:'),
                code(`
>>> [m for m in dir(str) if not m.startswith("_")]   # Methoden von Strings, ohne Unterstrich-Namen
>>> print(str.split.__doc__)                          # Beschreibung einer Methode, ohne Pager`),
                p('<code>help()</code> öffnet dagegen einen Pager wie <code>less</code>; mit <kbd>q</kbd> kommst du wieder heraus. <code>python3 -i skript.py</code> führt ein Skript aus und bleibt danach in der Shell – praktisch, um Variablen nach dem Lauf abzufragen.'),
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
            'In der Berufsschule ging es mit Java in die Tiefe: Klassen, Vererbung, Interfaces und abstrakte Klassen, dazu Collections wie <code>ArrayList</code> und <code>HashMap</code>. Für alle, die mit Java anfangen wollen, habe ich daraus eigene Übungsaufgaben geschrieben – das <a href="https://github.com/Martin1088/Java-With-Screenreader/tree/main/selfWrittenTutorial">selfWrittenTutorial</a> im Repository <a href="https://github.com/Martin1088/Java-With-Screenreader">Java-With-Screenreader</a>.',
          ],
          tipsHeading: 'Praxis-Tipps: Linux-VM, Web, APIs und Java',
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
            {
              id: 'tip-jquery-ajax',
              platform: 'both',
              title: "Beispiel: Formular mit jQuery und Ajax absenden",
              body: [
                p('Aus meinen Übungen von damals (Projekt <code>liqui-planner</code>), leicht gekürzt.'),
                code(String.raw`$(document).ready(function () {
    load();
    balanceAll();
    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'planner.php',
            data: {
                target: "write_entry",
                title: $('#titel').val(),
                typ: $('input[name=typ]:checked').val(),
                amount: $('#betrag').val(),
                date: $('#datum').val(),
                submit: $('#submit').val(),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                location.reload();
            },
            error: function (jqXHR, textStatus) {
                console.log(textStatus);
                console.log(jqXHR.responseJSON);
            }
        });
    });
});`),
                list(
                  '<code>e.preventDefault()</code> verhindert das Neuladen der Seite, die Daten gehen per Ajax als JSON an <code>planner.php</code>.',
                  '<code>console.log</code> war mein wichtigstes Werkzeug: Die Konsole ist Text und damit voll zugänglich (siehe Tipp zur Browser-Konsole).',
                  'Heute geht das ohne Bibliothek mit <code>fetch()</code> und <code>new FormData(form)</code> – das Prinzip ist dasselbe.',
                ),
              ],
            },
            {
              id: 'tip-php-pdo',
              platform: 'both',
              title: "Beispiel: Datenbankzugriff in PHP mit PDO und Prepared Statements",
              body: [
                p('Aus meinen Übungen von damals (Projekt <code>liqui-planner</code>), leicht gekürzt.'),
                code(String.raw`class Database {
    public function __construct(private string $host,
                                private string $ports,
                                private string $name,
                                private string $user,
                                private string $password) {}

    public function getConnection(): PDO {
        $dsn = "mysql:host={$this->host};port={$this->ports};dbname={$this->name};charset=utf8";
        return new PDO($dsn, $this->user, $this->password, [
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::ATTR_STRINGIFY_FETCHES => false
        ]);
    }
}

// Model::write_entry()
$sql = 'INSERT INTO entry(title, titletyp, amount, titledate)
        VALUES(:title, :titletyp, :amount, :titledate)';
$stmt = $this->conn->prepare($sql);
$stmt->execute($data);`),
                why('<strong>Warum Prepared Statements:</strong> Die Platzhalter <code>:title</code> usw. trennen SQL und Daten. Was jemand ins Formular tippt, kann die Abfrage nicht verändern (SQL-Injection).'),
                p('Was ich heute anders mache: Zugangsdaten gehören nicht in den Code, sondern in Umgebungsvariablen – sonst landen sie mit im Git-Repository.'),
                code(String.raw`$database = new Database("localhost", "3306", "book",
                         getenv("DB_USER"), getenv("DB_PASSWORD"));`),
              ],
            },
            {
              id: 'tip-jquery-text',
              platform: 'both',
              title: "Daten mit .text() einfügen, nicht mit .append()",
              body: [
                p('Beim Durchsehen meines alten Codes aufgefallen: Zwei fast gleiche Zweige, ein wichtiger Unterschied.'),
                code(String.raw`// So stand es in einem Zweig meines Codes – HTML im Titel wird ausgeführt:
$('<span>').addClass("titel").append(data.title)

// So im anderen – der Titel bleibt immer Text:
$('<span>').addClass("titel").text(data.title)`),
                why('<strong>Warum:</strong> <code>.append()</code> behandelt einen String als HTML. Ein Eintrag mit dem Titel <code>&lt;img src=x onerror=alert(1)&gt;</code> würde Code ausführen (Cross-Site-Scripting). <code>.text()</code> fügt immer reinen Text ein – und der Screenreader liest genau das vor, was gespeichert ist.'),
              ],
            },
            {
              id: 'tip-java-single-file',
              platform: 'both',
              title: 'Java ohne IDE: kompilieren und starten im Terminal',
              body: [
                p('Für kleine Übungen brauche ich kein Projekt und keine IDE. Seit Java 11 startet <code>java</code> eine einzelne Quelldatei direkt; für mehrere Dateien zeigt <code>javac</code> mit <code>-Xlint</code> zusätzliche Warnungen:'),
                code(`
java Einkaufsliste.java                              # eine Datei: kompilieren und starten in einem Schritt
javac -Xlint:all -d out *.java 2>&1 | head -n 5      # mehrere Dateien, nur die ersten Meldungen
java -cp out Main`),
                p('Wie bei C gilt: erst den ersten Fehler beheben, dann neu kompilieren. Jede Meldung beginnt mit <code>Datei.java:zeile: error:</code>.'),
              ],
            },
            {
              id: 'tip-java-interface',
              platform: 'both',
              title: 'Interfaces und Vererbung: @Override als Sicherheitsnetz',
              body: [
                p('Aus meiner Übung zur Vererbung: Ein Interface legt fest, was jedes Fahrzeug können muss, und jede Klasse setzt es auf ihre Weise um.'),
                code(`
public interface Fahrzeug {
    void setKennzeichen(String kennzeichen);
    String getKennzeichen();
}

public class Flugzeug implements Fahrzeug {
    protected String kennzeichen;

    @Override
    public void setKennzeichen(String kennzeichen) {
        this.kennzeichen = kennzeichen;
    }

    @Override
    public String getKennzeichen() {
        return kennzeichen;
    }
}`),
                list(
                  '<code>@Override</code> lässt den Compiler prüfen, ob die Methode wirklich aus dem Interface stammt. Ein Tippfehler im Namen wird so zum Fehler statt zu einer stillen neuen Methode – vorgelesen klingen <code>setKennzeichen</code> und <code>setKenzeichen</code> fast gleich.',
                  'Groß- und Kleinschreibung bei Parametern prüfen: Heißt der Parameter <code>AnzahlSitze</code>, weist <code>this.anzahlSitze = anzahlSitze</code> das Feld sich selbst zu – ohne jede Fehlermeldung. Hier hilft die Braillezeile oder zeichenweises Vorlesen.',
                  'Die ganze Übung mit Interface, abstrakter Klasse und Unterklassen liegt im Ordner <a href="https://github.com/Martin1088/Java-With-Screenreader/tree/main/school/Vererbung">school/Vererbung</a>.',
                ),
              ],
            },
            {
              id: 'tip-java-tutorial-levels',
              platform: 'both',
              title: 'Java-Übungen in Stufen: vom Array zur eigenen Klasse',
              body: [
                p('Mein Tutorial baut jede Aufgabe in Stufen auf. Jede Stufe ist ein kleines Konsolenprogramm mit kurzer, gut hörbarer Ausgabe:'),
                steps(
                  '<a href="https://github.com/Martin1088/Java-With-Screenreader/blob/main/selfWrittenTutorial/task01.md">Einkaufsliste</a>: String-Array, <code>ArrayList</code>, <code>HashMap</code> und am Ende eine eigene Klasse <code>ShoppingItem</code>.',
                  '<a href="https://github.com/Martin1088/Java-With-Screenreader/blob/main/selfWrittenTutorial/task02.md">Rechnungsverwaltung</a>: ein Menü mit <code>Scanner</code> und <code>while</code>, jede Menüauswahl als eigene Methode.',
                  '<a href="https://github.com/Martin1088/Java-With-Screenreader/blob/main/selfWrittenTutorial/task03.md">Kontaktverwaltung</a>: eine CSV-Datei einlesen, fehlerhafte Zeilen erkennen, Hilfsmethoden in eine eigene Klasse auslagern.',
                  '<a href="https://github.com/Martin1088/Java-With-Screenreader/blob/main/selfWrittenTutorial/task04.md">Passwort-Generator</a>: die Anfangsbuchstaben eines Satzes abwechselnd groß und klein – mit eigenen Tests.',
                ),
                why('<strong>Warum zuerst die Konsole:</strong> Ein Menü im Terminal ist mit jedem Screenreader sofort bedienbar. Eine Oberfläche kommt erst, wenn die Logik steht.'),
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
            'Den Einstieg in Rust habe ich mit den Übungen eines Udemy-Kurses gemacht: rund 30 kleine Aufgaben von Funktionen und Ownership über <code>match</code>, <code>Option</code> und <code>Result</code> bis zu Traits, eigenen Fehlertypen und Tests. Meine Lösungen liegen im Ordner <a href="https://github.com/Martin1088/Rust-With-Screenreader/tree/main/Exercise">Exercise</a> des Repositorys <a href="https://github.com/Martin1088/Rust-With-Screenreader">Rust-With-Screenreader</a>.',
            'In der Berufsschule stand die Prüfungsvorbereitung in Java an: alte Prüfungsaufgaben wie Konto, Photovoltaik oder Packmaschine und Entwurfsmuster wie Singleton und Factory. Mit meinem Tutorial ging es weiter zu Spring Boot: die Kontaktverwaltung als REST API und danach im Docker-Container mit MySQL.',
            'Python habe ich im Selbststudium vertieft: Webanwendungen mit Flask und SQLAlchemy und erste Schritte in der Datenanalyse mit pandas. Beides liegt im Repository Python-With-Screenreader, in den Ordnern <a href="https://github.com/Martin1088/Python-With-Screenreader/tree/main/FlaskTutorial">FlaskTutorial</a> und <a href="https://github.com/Martin1088/Python-With-Screenreader/tree/main/data_science">data_science</a>.',
            'Mitte des dritten Lehrjahres bin ich auf einen Mac mit VoiceOver umgestiegen, seitdem ist er mein Hauptrechner. Das hieß noch einmal umlernen: andere Tastenlogik, ein anderes Terminal – und die Erfahrung, dass die Grundprinzipien von Windows übertragbar sind.',
            'Mein Abschlussprojekt war eine Raumbelegungssoftware mit REST API, ORM-Mapper, Docker und dynamischem Frontend, mit Kommunikation über Samply.beam. 2024 habe ich die Ausbildung abgeschlossen.',
          ],
          tipsHeading: 'Praxis-Tipps: Rust, Java, Python, Mac, Container, Dokumentation',
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
                p('Für die Projektdokumentation braucht man Diagramme. PlantUML beschreibt sie als Text – ich kann sie schreiben, im Git-Diff prüfen, und sehende Prüfer bekommen trotzdem ein Bild. Mehr dazu in meinem Repository <a href="https://github.com/Martin1088/Plantuml-With-Screenreader">Plantuml-With-Screenreader</a>.'),
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
            {
              id: 'tip-rust-exercise-bins',
              platform: 'both',
              title: 'Viele kleine Rust-Übungen in einem Projekt',
              body: [
                p('Statt für jede Übung ein eigenes Projekt anzulegen, liegt im Kursprojekt jede Aufgabe als eigene Datei in <code>src/bin</code>. Cargo macht daraus einzelne Programme:'),
                code(`
cargo run --bin a15         # nur Übung a15 bauen und starten
cargo run -q --bin a15      # -q: ohne Compiler-Meldungen, nur die Ausgabe des Programms
cargo test --bin a22        # nur die Tests aus a22`),
                list(
                  'Jede Datei beginnt mit einem Kommentarblock: Thema, Anforderungen, Hinweise. Den lese ich zuerst mit <code>head -n 25 src/bin/a15.rs</code>, bevor ich den Editor öffne.',
                  'Alle Aufgaben und meine Lösungen: <a href="https://github.com/Martin1088/Rust-With-Screenreader/tree/main/Exercise">Exercise</a>.',
                ),
              ],
            },
            {
              id: 'tip-rust-enum-match',
              platform: 'both',
              title: 'Rust: Enums mit Daten und match',
              body: [
                p('Eine meiner Lieblingsübungen: Eintrittskarten mit unterschiedlichen Daten je nach Art. Ein Enum hält die Varianten, <code>match</code> behandelt jede einzeln:'),
                code(`
enum Ticket {
    Backstage(f64, String),
    Vip(f64, String),
    Standard(f64),
}

fn main() {
    let tickets = vec![
        Ticket::Backstage(100.0, "Sam".to_owned()),
        Ticket::Vip(88.8, "Helli".to_owned()),
        Ticket::Standard(20.0),
    ];
    for ticket in tickets {
        match ticket {
            Ticket::Backstage(preis, name) => println!("Backstage: {}, {:.2} Euro", name, preis),
            Ticket::Vip(preis, name) => println!("VIP: {}, {:.2} Euro", name, preis),
            Ticket::Standard(preis) => println!("Standard: {:.2} Euro", preis),
        }
    }
}`),
                p('Der Compiler prüft, dass jeder Fall behandelt ist. Fehlt einer, nennt die Meldung ihn beim Namen: <code>non-exhaustive patterns: `Ticket::Standard(_)` not covered</code>. Das ist mit Screenreader schneller gefunden als ein vergessener <code>else</code>-Zweig.'),
              ],
            },
            {
              id: 'tip-java-singleton',
              platform: 'both',
              title: 'Entwurfsmuster für die Prüfung: Singleton in Java',
              body: [
                p('Ein Muster, das in Prüfungsaufgaben immer wieder vorkommt: Von einer Klasse soll es genau ein Objekt geben, zum Beispiel für die Datenbankverbindung.'),
                code(`
public class Singleton {
    private static Singleton instanz = null;

    private Singleton() { }

    public static Singleton getInstance() {
        if (instanz == null) {
            instanz = new Singleton();
        }
        return instanz;
    }
}`),
                list(
                  'Der private Konstruktor verhindert <code>new Singleton()</code> von außen; das einzige Objekt kommt über <code>getInstance()</code>.',
                  'Für die Prüfung reicht diese einfache Form. In Programmen mit mehreren Threads ist sie nicht threadsicher.',
                  'Weitere Muster wie Factory und Singleton für die Datenbank im Ordner <a href="https://github.com/Martin1088/Java-With-Screenreader/tree/main/school/Rule">school/Rule</a>, alte Prüfungsaufgaben in <a href="https://github.com/Martin1088/Java-With-Screenreader/tree/main/school/Examen">school/Examen</a>.',
                ),
              ],
            },
            {
              id: 'tip-spring-curl',
              platform: 'both',
              title: 'Eigene Spring-Boot-API im Terminal testen',
              body: [
                p('Im Tutorial wird aus der Kontaktverwaltung für die Konsole eine REST API: Jede Menüauswahl wird ein Endpoint. Getestet habe ich sie ohne Browser, zum Beispiel so:'),
                code(String.raw`
./mvnw spring-boot:run              # mit Gradle: ./gradlew bootRun
curl -s localhost:9000/seeAllContacts | jq .
curl -s -X POST localhost:9000/addContact \
  -H 'Content-Type: application/json' \
  -d '{"name": "Ada", "email": "ada@example.org"}'`),
                p('Die Aufgaben dazu: <a href="https://github.com/Martin1088/Java-With-Screenreader/blob/main/selfWrittenTutorial/task10.md">API mit Endpoints</a> und <a href="https://github.com/Martin1088/Java-With-Screenreader/blob/main/selfWrittenTutorial/task11.md">Spring Boot mit MySQL in Docker</a>.'),
              ],
            },
            {
              id: 'tip-flask-venv',
              platform: 'both',
              title: 'Flask: virtuelle Umgebung und Start im Terminal',
              body: [
                p('Jedes Flask-Projekt bekommt eine eigene virtuelle Umgebung. So bleiben die Pakete getrennt, und die Ausgabe beim Installieren bleibt kurz:'),
                code(String.raw`
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -q Flask               # -q: keine seitenlange Installationsausgabe
flask --app app run --debug`),
                list(
                  'Am Anfang des Prompts sagt <code>(.venv)</code> an, dass die Umgebung aktiv ist.',
                  '<code>--debug</code> lädt nach jeder Änderung neu. Fehler erscheinen als Traceback im Terminal – wie in Python üblich von unten lesen.',
                  'Meine Flask-Projekte liegen in <a href="https://github.com/Martin1088/Python-With-Screenreader/tree/main/FlaskTutorial">FlaskTutorial</a>; eine Übungsaufgabe für eine Mitglieder-API mit Validierung und Statuscodes in <a href="https://github.com/Martin1088/Python-With-Screenreader/blob/main/tutorial/task01.md">tutorial/task01.md</a>.',
                ),
              ],
            },
            {
              id: 'tip-pandas-text',
              platform: 'both',
              title: 'pandas-Tabellen als Text lesen',
              body: [
                p('Ein DataFrame wird als breite Tabelle mit abgeschnittenen Spalten ausgegeben. Diese Befehle bringen die Daten in eine Form, die sich vorlesen lässt:'),
                code(`
print(df.shape)                  # (Zeilen, Spalten) – zuerst die Größe
df.info()                        # eine Zeile pro Spalte: Name, Anzahl Werte, Typ
print(df.head(3).T)              # die ersten 3 Datensätze, Spalten untereinander
print(df.iloc[0].to_string())    # ein Datensatz, ein Feld pro Zeile`),
                p('Das ist dieselbe Idee wie <code>\\G</code> in MySQL: Datensätze untereinander statt nebeneinander. Meine Übungen mit pandas und Entscheidungsbäumen liegen im Ordner <a href="https://github.com/Martin1088/Python-With-Screenreader/tree/main/data_science/jupyter">data_science/jupyter</a>.'),
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
