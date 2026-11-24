import { code, list, p, steps, why } from './blocks';
import { SiteContent } from './model';
import { COACHING_EN, WORK_EN } from './pages.en';

export const CONTENT_EN: SiteContent = {
  work: WORK_EN,
  coaching: COACHING_EN,
  chapters: [
    // ================================================================
    {
      id: 'quikstep',
      when: '2020 – 2021',
      title: 'Vocational rehabilitation at QuikStep',
      short: 'Learning to work without sight and starting to program in C, Java, Python and HTML.',
      lead:
        'After losing my sight in 2015, I did vocational rehabilitation at QuikStep in Durmersheim from 2020 to 2021. There I built a way of working entirely without visuals and learned the fundamentals of programming – mainly in C, plus Java, Python and HTML. And it is where a thirst for knowledge began that has not let up since: I wanted to understand how software works, not just how to use it. That year it became clear to me: programming is text, and with text I can work at full speed. My recommendation for anyone with the same curiosity: the video series <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo">Crash Course Computer Science</a>: 40 episodes with Carrie Anne Philbin, from the history of computers through hardware to the basics of programming and software. It helped me a lot.',
      sections: [
        {
          id: 'arbeitsweise',
          when: '2020',
          title: 'Building a way of working without sight',
          story: [
            'The first part of rehabilitation was not about computer science but about the tools that come before it: screen reader, keyboard shortcuts, audio output and braille. Without that foundation every programming language is just one more obstacle.',
            'With coaching I learned to move through documents and applications by their structure instead of listening to them line by line. My tools were Windows with the NVDA and JAWS screen readers – until I switched to the Mac in my third year.',
          ],
          tipsHeading: 'Practical tips for getting started',
          tips: [
            {
              id: 'tip-screenreader-basics',
              platform: 'windows',
              title: 'NVDA and JAWS: learn structural navigation first',
              body: [
                p('On Windows I work with <strong>NVDA</strong> (free) and <strong>JAWS</strong>. Quick navigation on the web is almost the same in both – master it in one and you are at home in the other right away:'),
                list(
                  '<kbd>H</kbd> next heading, <kbd>F</kbd> next form field, <kbd>T</kbd> next table; landmarks with <kbd>D</kbd> in NVDA and <kbd>R</kbd> in JAWS',
                  'Lists at a glance: NVDA <kbd>NVDA</kbd>+<kbd>F7</kbd> (elements list); JAWS <kbd>Insert</kbd>+<kbd>F6</kbd> headings, <kbd>Insert</kbd>+<kbd>F7</kbd> links, <kbd>Insert</kbd>+<kbd>F5</kbd> form fields',
                  'Browse and focus mode: NVDA switches with <kbd>NVDA</kbd>+<kbd>Space</kbd>, JAWS toggles the virtual cursor with <kbd>Insert</kbd>+<kbd>Z</kbd> – the most common reason “the keys suddenly stopped working”',
                ),
                why('<strong>Why two screen readers:</strong> what one does not read, the other often does – and when testing your own interfaces, comparing both reveals real bugs instead of one program’s quirks.'),
              ],
            },
            {
              id: 'tip-speech-rate',
              platform: 'windows',
              title: 'Raise the speech rate step by step',
              body: [
                list(
                  '<strong>NVDA:</strong> <kbd>NVDA</kbd>+<kbd>Ctrl</kbd>+<kbd>Left/Right arrow</kbd> selects a synth setting (rate, pitch, volume …), and <kbd>NVDA</kbd>+<kbd>Ctrl</kbd>+<kbd>Up/Down arrow</kbd> changes its value.',
                  '<strong>JAWS:</strong> <kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>Page Up/Down</kbd> changes the rate immediately; make it permanent in the Settings Center.',
                ),
                p('Increase the rate in small steps, every week or two, once the current speed feels normal. A high rate saves a lot of time every day when reading code and logs.'),
                why('<strong>Why:</strong> too fast too early means you rewind more than you read.'),
              ],
            },
            {
              id: 'tip-braille',
              platform: 'both',
              title: 'A braille display for code: the characters speech swallows',
              body: [
                p('Speech is fast but imprecise for code: brackets, semicolons and indentation are easy to miss. A braille display with 8-dot computer braille shows every character exactly as it is in the file.'),
                list(
                  'For overview and prose: speech',
                  'For the one line with the syntax error: braille',
                  'Set the punctuation level to “all” for coding, so speech reads brackets too',
                ),
              ],
            },
          ],
        },
        {
          id: 'c-lernen',
          when: '2020 – 2021',
          title: 'Learning to program: C, Java, Python and HTML',
          story: [
            'The second part added the fundamentals of computer science, with C as the main language. C forgives little, and the compiler answers with messages in the terminal – in other words, with text. That is exactly what showed me that software development is a profession I can practise without sight.',
            'Alongside it I tried Java and Python and wrote my first pages in HTML – deliberately only the building blocks: variables, loops and functions, no libraries yet. Recognising the same concepts across several languages is what really sparked my curiosity about computer science.',
          ],
          tipsHeading: 'Practical tips: first programs',
          tips: [
            {
              id: 'tip-first-c',
              platform: 'both',
              title: 'First C programs: only ever read the first error',
              body: [
                p('A single missing semicolon often causes twenty follow-up errors. With a screen reader that is especially tiring. Print only the first lines, fix, compile again.'),
                code('gcc -Wall -Wextra -o hello hello.c 2>&1 | head -n 5'),
                p('The message starts with <code>file:line:column</code>. With the line number you jump straight there in the editor instead of searching.'),
              ],
            },
            {
              id: 'tip-indentation',
              platform: 'windows',
              title: 'Make indentation audible – essential for Python',
              body: [
                p('In Python, indentation is part of the syntax: a line one level too far left ends a loop without a single character missing. So have the indentation announced instead of counting spaces.'),
                list(
                  '<strong>NVDA:</strong> <kbd>NVDA</kbd>+<kbd>Ctrl</kbd>+<kbd>D</kbd> opens document formatting; under “Line indentation reporting” choose “Tones” or “Both speech and tones”. The pitch rises with the depth, so a change stands out immediately.',
                  '<strong>JAWS:</strong> can announce indentation too; search the Settings Center for “indentation”.',
                  'Indent consistently with 4 spaces, never mixed with tabs – otherwise two lines at the same depth sound different.',
                ),
                why('<strong>Helps with C, Java and HTML too:</strong> there indentation is not syntax, but it is the quickest way to hear where a block ends.'),
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
      title: 'Apprenticeship as an IT specialist',
      short: 'Inclusive apprenticeship at the DKFZ: terminal, SQL, web development, Rust.',
      lead:
        'At the German Cancer Research Center (DKFZ) in Heidelberg I completed an inclusive apprenticeship as an IT specialist for application development (Fachinformatiker Anwendungsentwicklung), with the Hubert-Sternberg-Schule in Wiesloch as vocational school. Three years, three focus areas – and in 2024 the final exam before the Chamber of Commerce (IHK).',
      sections: [
        {
          id: 'lehrjahr-1',
          when: '2021 – 2022 · Federated Information Systems',
          title: 'Year 1: terminal, SQL and the fundamentals',
          story: [
            'The first year in the Federated Information Systems department was about the fundamentals: distributed systems, medical informatics, Java, APIs, Docker, Linux configuration, Git, databases and Scrum.',
            'This is where I learned that the terminal is not a workaround for blind developers but the most accessible tool there is – once you bring its output into a readable shape.',
            'Already in the first year I started writing diagrams as text with PlantUML: ERDs for the databases, plus class, activity and sequence diagrams. My examples and a <a href="https://github.com/Martin1088/Plantuml-With-Screenreader/tree/main/Tutorial">tutorial for getting started</a> are in the public repository <a href="https://github.com/Martin1088/Plantuml-With-Screenreader">Plantuml-With-Screenreader</a>.',
          ],
          tipsHeading: 'Practical tips: terminal and databases',
          demo: 'sql-output',
          tips: [
            {
              id: 'tip-linux-terminal',
              platform: 'linux',
              title: 'Linux terminal: output in bites, not as a wall',
              body: [
                p('Long output rushes past a screen reader. These patterns keep it readable – in WSL on Windows just as later in the Mac terminal:'),
                code(`
ls -1                      # one file per line
ls -1 | wc -l              # count first, then decide
command | head -n 20       # just the beginning
command | less             # page by page, with /search
command > output.txt 2>&1  # to a file, then read it in the editor
cd -                       # back to the previous directory`),
                why('<strong>Why:</strong> a file in the editor I can read line by line, search, and take my time with – scrolling output I cannot.'),
              ],
            },
            {
              id: 'tip-windows-terminal',
              platform: 'windows',
              title: 'Make Windows Terminal and PowerShell readable',
              body: [
                p('Windows Terminal was my main tool during the apprenticeship, with NVDA and JAWS. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> searches the output, and the NVDA review cursor (numpad <kbd>7</kbd> <kbd>8</kbd> <kbd>9</kbd>) moves back line by line. PowerShell prints wide tables by default – a vertical list is much nicer for speech:'),
                code(String.raw`
Get-ChildItem | Select-Object -ExpandProperty Name
Get-Process code | Format-List Name, Id, CPU
Get-Content .\app.log -Tail 20
Get-ChildItem | Out-File list.txt    # read it as a file
Get-Location | Set-Clipboard         # to the clipboard`),
                p('In the classic command prompt, <code>dir /b</code> prints names only.'),
              ],
            },
            {
              id: 'tip-psreadline',
              platform: 'windows',
              title: 'PowerShell: turn off suggestions while typing',
              body: [
                p('PSReadLine shows grey suggestions from your history as you type. Depending on the screen reader they get read out, or they confuse you when correcting, because it is unclear what is really on the line. Turn them off and fetch history on demand with <kbd>F8</kbd> (history matching the start of the line):'),
                code('Set-PSReadLineOption -PredictionSource None'),
                p('To make it permanent, put the line in your profile – <code>notepad $PROFILE</code> opens it.'),
              ],
            },
            {
              id: 'tip-wsl',
              platform: 'windows',
              title: 'WSL: Linux tools with your Windows screen reader',
              body: [
                p('With WSL, Bash, psql, the Docker CLI and every other Linux tool run inside Windows Terminal – and NVDA or JAWS read them like any other output. So I never have to switch screen readers for Linux work.'),
                code(String.raw`
wsl --install          # once, in PowerShell as administrator
wsl -l -v              # installed distributions
wsl ls -1              # run a single Linux command from PowerShell
command | clip.exe     # WSL output to the Windows clipboard
explorer.exe .         # open the current WSL folder in Explorer`),
                p('From Windows you reach the Linux files at <code>\\\\wsl$</code>. Keep project code in the Linux file system, not under <code>/mnt/c</code> – it is much faster.'),
              ],
            },
            {
              id: 'tip-sql-terminal',
              platform: 'both',
              title: 'SQL in the terminal: records stacked, not as a table',
              body: [
                p('A wide result table is read out as “dash dash plus dash …”. All common command-line clients can print records as <em>column = value</em> instead, one below the other:'),
                code(String.raw`
-- SQLite (sqlite3)
.headers on
.mode line
SELECT * FROM application LIMIT 3;

-- PostgreSQL (psql)
\x auto
\pset pager off
SELECT * FROM application LIMIT 3;

-- MySQL / MariaDB: end the query with \G instead of ;
SELECT * FROM application LIMIT 3\G`),
                p('For scripts and quick counts without borders and headers:'),
                code(`psql -d app -A -t -F ';' -c "SELECT status, count(*) FROM application GROUP BY status"`),
                why('<strong>Why:</strong> always start with <code>count(*)</code> or <code>LIMIT</code> – listening to a thousand rows is not data analysis. Try the difference in the demo below.'),
              ],
            },
            {
              id: 'tip-git',
              platform: 'both',
              title: 'Git without a pager and with short output',
              body: [
                p('Git opens logs and diffs in a pager that is often awkward to leave with a screen reader. Short formats help straight away:'),
                code(`
git status -s
git --no-pager log --oneline -n 10
git diff --stat
git diff --word-diff   # shows which word changed, not just the line`),
                p('If you never want the pager: <code>git config --global core.pager cat</code>.'),
              ],
            },
            {
              id: 'tip-docker-format',
              platform: 'both',
              title: 'Trim Docker output to what matters',
              body: [
                p('<code>docker ps</code> prints a very wide table. With <code>--format</code> you get exactly the fields you need:'),
                code(`docker ps --format '{{.Names}}: {{.Status}}'`),
                p('Result, for example: <code>db: Up 2 hours</code> – one line per container, understood instantly.'),
              ],
            },
            {
              id: 'tip-plantuml-erd',
              platform: 'both',
              title: 'A first ERD as text: planning databases with PlantUML',
              body: [
                p('An entity-relationship diagram shows tables, keys and relationships. In PlantUML it is a text file I can read line by line and review in a Git diff:'),
                code(String.raw`@startuml
entity Customer {
  * id : int <<PK>>
  --
  name : varchar(100)
}

entity Account {
  * iban : varchar(34) <<PK>>
  --
  * customer_id : int <<FK>>
  balance : decimal(19,2)
}

Customer ||--o{ Account : owns
@enduml`),
                list(
                  '<code>*</code> marks required fields, <code>--</code> separates the key from the other columns.',
                  '<code>||--o{</code> means: exactly one customer, zero to many accounts. One side on the left, the other on the right – easy to remember when it is read aloud, too.',
                  'More examples – ERD, class, activity and sequence diagrams – in the <a href="https://github.com/Martin1088/Plantuml-With-Screenreader/tree/main/Tutorial">tutorial in my repository</a>.',
                ),
                p('Checking without an image: <code>plantuml -tutxt erd.puml</code> renders the diagram as text, <code>plantuml -checkonly erd.puml</code> only checks the syntax.'),
              ],
            },
          ],
        },
        {
          id: 'lehrjahr-2',
          when: '2022 – 2023 · Cancer Information Service',
          title: 'Year 2: web development',
          story: [
            'In my second year I was at the Cancer Information Service (Krebsinformationsdienst), working with PHP, JavaScript and jQuery on an online counselling platform. It was my first work on interfaces that other people use – and the best school for seeing accessibility from the other side. A course on Udemy gave me a solid grounding in JavaScript.',
            'From the middle to the end of that year I also set up and tested an Ubuntu VM in VirtualBox with the console screen reader Fenrir – my first attempt at using Linux entirely without a Windows screen reader.',
          ],
          tipsHeading: 'Practical tips: Linux VM, web and APIs',
          demo: 'form-errors',
          tips: [
            {
              id: 'tip-fenrir',
              platform: 'linux',
              title: 'Fenrir: a screen reader for the Linux console',
              body: [
                p('<strong>Fenrir</strong> is a screen reader for the text console (TTY), with no graphical desktop at all: lean, fast and independent of the desktop. On Debian and Ubuntu it is available as the package <code>fenrir</code>.'),
                list(
                  'Review mode lets you read lines that were already printed without leaving the prompt.',
                  'It works even when the desktop will not start – a big advantage exactly when something is broken.',
                  'For everyday work on Windows, <abbr title="Windows Subsystem for Linux">WSL</abbr> with NVDA or JAWS is more convenient; Fenrir is worth it when you want to run a real Linux without a desktop.',
                ),
              ],
            },
            {
              id: 'tip-virtualbox',
              platform: 'linux',
              title: 'Try Linux in VirtualBox without losing your Windows screen reader',
              body: [
                p('A VM is the safe way to get to know Linux and Fenrir: Windows with NVDA or JAWS stays as a fallback, and breaking the configuration is no risk.'),
                list(
                  'Once you click or type into the VM window, the VM captures the keyboard – then even your Windows screen reader’s shortcuts only reach the VM. The host key (right <kbd>Ctrl</kbd> by default) releases the keyboard again.',
                  'For Fenrir to speak inside the VM, audio has to be enabled in the VM settings.',
                  'Take a snapshot before every experiment – going back then takes seconds.',
                ),
                code(`
VBoxManage list vms
VBoxManage snapshot "Ubuntu" take before-fenrir-test
VBoxManage snapshot "Ubuntu" restore before-fenrir-test   # with the VM powered off`),
                why('<strong>Why:</strong> when you switch between two screen readers, you always need a way back that is guaranteed to speak.'),
              ],
            },
            {
              id: 'tip-test-own-pages',
              platform: 'both',
              title: 'Test your own pages with a screen reader in three steps',
              body: [
                steps(
                  '<strong>Headings:</strong> jump through them with <kbd>H</kbd>. Does the list alone make a sensible table of contents?',
                  '<strong>Regions:</strong> move through landmarks with <kbd>D</kbd> (NVDA) or <kbd>R</kbd> (JAWS). Are there <code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>?',
                  '<strong>Forms:</strong> <kbd>Tab</kbd> through every field. Is a label read for each one, not just “edit text”?',
                ),
                why('<strong>Why:</strong> these three checks find most problems within minutes, long before an audit tool runs.'),
              ],
            },
            {
              id: 'tip-accessible-forms',
              platform: 'both',
              title: 'Forms that actually announce their errors',
              body: [
                p('A red border tells a screen reader nothing. Every error message has to be linked to its field:'),
                code(`
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email"
       aria-invalid="true" aria-describedby="email-error">
<p id="email-error">Please enter a valid email address.</p>`),
                list(
                  'After submitting, move focus to the first invalid field.',
                  'Also announce success or failure through an <code>aria-live</code> region.',
                  'Mark required fields in the label text, not only with an asterisk.',
                ),
                why('<strong>Try it:</strong> in the demo below you can submit both versions and hear what gets announced.'),
              ],
            },
            {
              id: 'tip-keyboard-check',
              platform: 'both',
              title: 'The two-minute keyboard test',
              body: [
                p('Put the mouse away and use your application with the keyboard only:'),
                list(
                  'Does <kbd>Tab</kbd> reach every control in a sensible order?',
                  'Is it always visible and audible where the focus is?',
                  'Do dialogs close with <kbd>Esc</kbd>, and does focus return to the button that opened them?',
                  'Is there anything that only appears on mouse hover?',
                ),
              ],
            },
            {
              id: 'tip-curl-jq',
              platform: 'both',
              title: 'Read APIs with curl and jq instead of in the browser',
              body: [
                p('JSON in the browser is often one long paragraph for a screen reader. In the terminal, <code>jq</code> formats the response and filters out exactly what you need:'),
                code(`
curl -s https://api.example.org/jobs | jq '.'
curl -s https://api.example.org/jobs | jq -r '.items[].title'
curl -s https://api.example.org/jobs | jq '.items | length'`),
                p('On Windows, <code>curl.exe</code> and <code>jq</code> are available too, for example via <code>winget install jqlang.jq</code>.'),
              ],
            },
            {
              id: 'tip-devtools-console',
              platform: 'both',
              title: 'The browser console instead of visual dev tools',
              body: [
                p('The visual parts of developer tools are hard to use, but the console is text. Open it: Chrome <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd>, Firefox <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>.'),
                code(`
document.activeElement          // where is the focus right now?
document.querySelectorAll('img:not([alt])').length   // images without alt text
[...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.trim())`),
              ],
            },
            {
              id: 'tip-jquery-ajax',
              platform: 'both',
              title: "Example: submitting a form with jQuery and Ajax",
              body: [
                p('From my exercises at the time (project <code>liqui-planner</code>), slightly shortened.'),
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
                  '<code>e.preventDefault()</code> stops the page from reloading; the data goes to <code>planner.php</code> via Ajax as JSON.',
                  '<code>console.log</code> was my most important tool: the console is text and therefore fully accessible (see the browser console tip).',
                  'Today you can do this without a library using <code>fetch()</code> and <code>new FormData(form)</code> – the principle is the same.',
                ),
              ],
            },
            {
              id: 'tip-php-pdo',
              platform: 'both',
              title: "Example: database access in PHP with PDO and prepared statements",
              body: [
                p('From my exercises at the time (project <code>liqui-planner</code>), slightly shortened.'),
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
                why('<strong>Why prepared statements:</strong> the placeholders <code>:title</code> etc. keep SQL and data apart. Whatever someone types into the form cannot change the query (SQL injection).'),
                p('What I do differently today: credentials do not belong in the code but in environment variables – otherwise they end up in the Git repository.'),
                code(String.raw`$database = new Database("localhost", "3306", "book",
                         getenv("DB_USER"), getenv("DB_PASSWORD"));`),
              ],
            },
            {
              id: 'tip-jquery-text',
              platform: 'both',
              title: "Insert data with .text(), not .append()",
              body: [
                p('Something I noticed going through my old code: two almost identical branches, one important difference.'),
                code(String.raw`// One branch of my code did this – HTML in the title gets executed:
$('<span>').addClass("titel").append(data.title)

// The other branch did this – the title always stays text:
$('<span>').addClass("titel").text(data.title)`),
                why('<strong>Why:</strong> <code>.append()</code> treats a string as HTML. An entry titled <code>&lt;img src=x onerror=alert(1)&gt;</code> would run code (cross-site scripting). <code>.text()</code> always inserts plain text – and the screen reader reads out exactly what was stored.'),
              ],
            },
          ],
        },
        {
          id: 'lehrjahr-3',
          when: '2023 – 2024 · Federated Information Systems',
          title: 'Year 3: Rust and the final project',
          story: [
            'In my final year I taught myself Rust in depth and got into the department’s Samply.beam component, which handles communication in strictly regulated clinical networks.',
            'In the middle of my third year I switched to a Mac with VoiceOver, and it has been my main machine since. That meant relearning once more: different key logic, a different terminal – and the experience that the principles from Windows carry over.',
            'My final project was a room booking application with a REST API, ORM mapper, Docker and a dynamic frontend, communicating via Samply.beam. I qualified in 2024.',
          ],
          tipsHeading: 'Practical tips: Mac, compiler, containers, documentation',
          tips: [
            {
              id: 'tip-voiceover',
              platform: 'mac',
              title: 'From NVDA/JAWS to VoiceOver: what changes',
              body: [
                p('VoiceOver is built into every Mac, but it works differently from the Windows screen readers. The main adjustments:'),
                list(
                  '<kbd>Cmd</kbd>+<kbd>F5</kbd> turns VoiceOver on and off.',
                  'The VoiceOver key (<abbr title="VoiceOver key">VO</abbr>) is <kbd>Ctrl</kbd>+<kbd>Option</kbd> – roughly the counterpart of the NVDA or Insert key.',
                  '<kbd>VO</kbd>+<kbd>U</kbd> opens the rotor: lists of headings, links, form fields and landmarks, like the NVDA elements list.',
                  'On the web, <kbd>VO</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd> jumps to the next heading. If you prefer pressing just <kbd>H</kbd> as in NVDA and JAWS, enable single-key Quick Nav in VoiceOver Utility.',
                  'Entering and leaving groups: <kbd>VO</kbd>+<kbd>Shift</kbd>+<kbd>Down/Up arrow</kbd> – there is nothing quite like it on Windows, and it is the biggest adjustment at first.',
                  'Set speech rate and verbosity permanently in VoiceOver Utility (<kbd>VO</kbd>+<kbd>F8</kbd>).',
                ),
              ],
            },
            {
              id: 'tip-mac-terminal',
              platform: 'mac',
              title: 'Terminal on the Mac: clipboard and tools',
              body: [
                p('The patterns from the Linux terminal apply on the Mac just the same. Two Mac specifics help on top:'),
                code(`
command | pbcopy       # output to the clipboard, then read it at leisure
pbpaste | wc -l        # count what is on the clipboard
brew install jq postgresql   # tools via Homebrew`),
              ],
            },
            {
              id: 'tip-done-sound',
              platform: 'both',
              title: 'An audible signal when a long command finishes',
              body: [
                p('With builds that take minutes, I do not want to keep checking whether they are done. Instead the computer tells me:'),
                code(String.raw`
cargo build; say "Build done"                   # macOS
cargo build; spd-say "Build done"               # Linux (speech-dispatcher)
cargo build; [console]::beep(800, 300)          # PowerShell`),
                p('With <code>&amp;&amp;</code> instead of <code>;</code> the signal only comes on success (in PowerShell from version 7) – the sound tells me whether I can carry on.'),
              ],
            },
            {
              id: 'tip-cargo-short',
              platform: 'both',
              title: 'Keep Rust compiler messages short',
              body: [
                p('Rust’s error messages are excellent, but long and full of ASCII arrows. For a quick pass there is a short format with one line per error:'),
                code(`
cargo check --message-format short
cargo clippy --message-format short`),
                p('Only read the full message when an error is unclear – and then into a file: <code>cargo check 2&gt; errors.txt</code>.'),
              ],
            },
            {
              id: 'tip-compose-logs',
              platform: 'both',
              title: 'Follow the logs of a single container',
              body: [
                p('The mixed logs of every service are impossible to listen to. Always pick one service and a limited number of lines:'),
                code('docker compose logs --tail 20 -f api'),
                p('<code>--tail 20</code> shows only the last 20 lines, <code>-f</code> follows new lines live.'),
              ],
            },
            {
              id: 'tip-plantuml',
              platform: 'both',
              title: 'Write the project’s diagrams as text',
              body: [
                p('Project documentation needs diagrams. PlantUML describes them as text – I can write them, review them in a Git diff, and sighted examiners still get a picture. More in my repository <a href="https://github.com/Martin1088/Plantuml-With-Screenreader">Plantuml-With-Screenreader</a>.'),
                code(`
@startuml
actor User
User -> Frontend : book room
Frontend -> API : POST /bookings
API -> Database : INSERT
API --> Frontend : 201 Created
@enduml`),
                p('To check without an image: validate the syntax, or render the diagram as text and read it.'),
                code(`
plantuml -checkonly flow.puml
plantuml -tutxt flow.puml   # creates flow.utxt`),
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
      title: 'Working at the DKFZ',
      short: 'Developer, administrator and technical lead for data platforms.',
      lead:
        'After the apprenticeship I stayed in the Federated Information Systems department: first as developer and administrator, then as technical lead for two data platforms in cancer research.',
      sections: [
        {
          id: 'entwickler',
          when: '2024 – 2025',
          title: 'Developer and administrator',
          story: [
            'I worked on <a href="https://github.com/samply/secret-sync">secret-sync</a>, a Rust component that automates application and user management through Authentik and Keycloak, and secured the Mainzelliste pseudonymisation service with OAuth.',
            'I was also responsible for server administration and internal services (Confluence, GitLab, Authentik) and for group management for our research partners. On top of that: a Java generator for synthetic FHIR test data, API documentation with Swagger UI, and a cross-platform version of the room booking software built with Tauri.',
          ],
          tipsHeading: 'Practical tips: servers and operations',
          tips: [
            {
              id: 'tip-journalctl',
              platform: 'linux',
              title: 'Read system logs selectively, not in full',
              body: [
                code(`
journalctl -u nginx -n 20 --no-pager   # last 20 lines of one service
journalctl -p err -b --no-pager        # only errors since the last boot
grep -i -c error app.log               # how many errors are there at all?`),
                why('<strong>Why:</strong> <code>--no-pager</code> stops me getting stuck in a pager; limiting by service, priority and line count turns a thousand lines into twenty relevant ones.'),
              ],
            },
            {
              id: 'tip-ssh-config',
              platform: 'both',
              title: 'SSH aliases instead of long addresses',
              body: [
                p(String.raw`Less typing means fewer typos you have to listen back to. In <code>~/.ssh/config</code> (on Windows <code>%USERPROFILE%\.ssh\config</code>):`),
                code(`
Host gitlab-server
    HostName gitlab.internal.example.org
    User admin
    IdentityFile ~/.ssh/id_ed25519`),
                p('After that, <code>ssh gitlab-server</code> is enough.'),
              ],
            },
            {
              id: 'tip-openapi',
              platform: 'both',
              title: 'API docs as a list instead of the Swagger interface',
              body: [
                p('Swagger UI is made for sighted users. The OpenAPI file behind it is JSON and can be searched in seconds:'),
                code(`curl -s http://localhost:8080/v3/api-docs | jq -r '.paths | keys[]'`),
                p('That gives you every endpoint as a list – one line per path.'),
              ],
            },
          ],
        },
        {
          id: 'leitung',
          when: '2025 – 2026',
          title: 'Technical lead',
          story: [
            'I took over as technical lead for two data platforms: the <a href="https://github.com/samply/itcc-federated-data-hub">ITCC Federated Data Hub</a> for the international integration of paediatric cancer data across clinical sites, with federated ingestion of FHIR and genetic data, pseudonymised storage in S3 and Apache Iceberg, and deployment on Kubernetes. And <strong>LeMeDart</strong>, a data hub with partners across Germany: central data intake from REDCap, pseudonymisation and storage.',
            'I was responsible for architecture, backend services, data processing and deployment, and secured the Java-based Samply Exporter with multiple Spring Security filter chains and group-based authorisation via OIDC.',
          ],
          tipsHeading: 'Practical tips: Kubernetes, editor, architecture',
          tips: [
            {
              id: 'tip-kubectl',
              platform: 'both',
              title: 'kubectl: only the columns you actually need',
              body: [
                p('kubectl’s default tables are wide and full of columns you rarely need. Better:'),
                code(`
kubectl get pods -o name
kubectl get pods --no-headers -o custom-columns=NAME:.metadata.name,STATUS:.status.phase
kubectl logs deploy/api --tail=20
kubectl get events --sort-by=.lastTimestamp | tail -n 10`),
                p('The same goes for <code>kubectl describe</code> as for logs: into a file or through <code>less</code>, then search for <code>Events</code> or <code>Error</code>.'),
              ],
            },
            {
              id: 'tip-neovim-quiet',
              platform: 'both',
              title: 'Quieten NeoVim for the screen reader',
              body: [
                p('Line numbers, icons and inline diagnostics look nice but get read out with every line. In my configuration (<code>init.lua</code>) I turn them off and fetch information on demand:'),
                code(`
vim.opt.number = false
vim.opt.relativenumber = false
vim.opt.signcolumn = "no"
vim.diagnostic.config({ virtual_text = false, signs = false })`),
                list(
                  '<kbd>]d</kbd> / <kbd>[d</kbd> jumps to the next / previous diagnostic, <kbd>Ctrl</kbd>+<kbd>W</kbd> <kbd>d</kbd> shows the message (NeoVim 0.10+)',
                  '<code>:lua vim.diagnostic.setqflist()</code> and <code>:copen</code> list all errors one below the other',
                  'In distributions such as AstroNvim, icons can be turned off via <code>icons_enabled</code>',
                ),
              ],
            },
            {
              id: 'tip-architecture-text',
              platform: 'both',
              title: 'Document architecture so the whole team can read it',
              body: [
                p('As technical lead I have to explain architecture, not just build it. I keep every diagram as PlantUML in the repository, right next to the code, and write two or three sentences of prose for each.'),
                list(
                  'Diagrams are versioned in Git and reviewed in the merge request.',
                  'The prose is the alternative for everyone who cannot see the image – and helps sighted readers get started too.',
                  'One file per view: components, data flow, deployment.',
                ),
              ],
            },
            {
              id: 'tip-ai-terminal',
              platform: 'both',
              title: 'An AI assistant in the terminal: text in, text out',
              body: [
                p('I work with Claude Code in the terminal. For me that is ideal, because everything is text: no sidebars, no pop-ups. What helps me most:'),
                list(
                  'Ask for summaries: “Summarise this diff in three sentences” instead of listening to a hundred lines.',
                  'Have output reshaped, for example a wide table into a list.',
                  'Still read and test generated code myself – the responsibility stays with me.',
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
