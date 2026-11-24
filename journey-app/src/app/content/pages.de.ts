import { CoachingPageContent, WorkPageContent } from './model';

export const WORK_DE: WorkPageContent = {
  metaTitle: 'Martin Jurk – Backend-Entwickler, Rust & Java',
  metaDescription:
    'Martin Jurk: Backend-Entwickler mit Schwerpunkt Rust, Java/Spring Boot, OAuth2/OIDC-Authentifizierung und Kubernetes. Föderierte Datenplattformen in der medizinischen Forschung.',
  eyebrow: 'Backend-Entwicklung',
  title: 'Martin Jurk',
  lead:
    'Backend-Entwickler. Ich baue Services in Rust und Java – von der API über die Authentifizierung bis zum Deployment auf Kubernetes. Zuletzt technische Leitung für zwei föderierte Datenplattformen in der Krebsforschung.',
  aboutHeading: 'Was ich mache',
  about: [
    'Mein Schwerpunkt ist das Backend und die Sicherheitsschicht drumherum: REST-APIs, OAuth2 und OIDC, Umgang mit Secrets und Tokens, Deployment in Containern. Die letzten Jahre habe ich an föderierten Systemen gearbeitet – unabhängige Standorte, die sensible Daten austauschen und bei denen jede Freigabe hinterher nachvollziehbar sein muss.',
    'Ich arbeite im Terminal mit Screenreader. Das macht mich genau bei Dingen, die man leicht überspringt: lesbare Architekturdokumentation, reproduzierbare Builds und Oberflächen, die ohne Maus funktionieren.',
  ],
  projectsHeading: 'Ausgewählte Projekte',
  projects: [
    {
      id: 'itcc',
      title: 'ITCC Federated Data Hub',
      text: [
        'Internationale Integration pädiatrischer Krebsdaten über Klinikstandorte hinweg. Als technische Leitung habe ich die föderierte Architektur entworfen und dokumentiert: Annahme von FHIR- und genetischen Daten, pseudonymisierte zentrale Speicherung, Deployment auf Kubernetes.',
      ],
      stackLead: 'Rust',
      stack: 'Axum, Tokio, aws-sdk-s3 · Apache Iceberg, S3, Kubernetes',
      link: { href: 'https://github.com/samply/itcc-federated-data-hub', label: 'Quellcode auf GitHub' },
    },
    {
      id: 'ajm',
      title: 'Accessible Job Manager',
      text: [
        'Mein eigenes Projekt und das, das ich zuerst zeigen würde. Eine Bewerbungsplattform für blinde Nutzerinnen und Nutzer, bei der die Bedienung mit Screenreader die Grundlage der Architektur ist und keine nachträglich aufgesetzte Schicht. Eine Stellenanzeige wird über einen Link importiert und von einem lokalen Sprachmodell in strukturierte Felder übertragen. Das Anschreiben wird als Text geschrieben und kommt als DIN-5008-konformes PDF heraus: Die Seitengeometrie garantiert der Server, niemand muss einen Adressblock von Hand ausrichten.',
        'Am spannendsten finde ich das Rollenmodell. Beraterinnen und Reviewer können eine Bewerberin unterstützen – Stellen vorschlagen, ein Anschreiben vor dem Versand lesen –, aber jeder Zugriff auf Dokumente wird von der Nutzerin freigegeben und lässt sich jederzeit widerrufen. MIT-lizenziert und für Self-Hosting gebaut, damit Reha-Träger ihre eigene Instanz betreiben können. Eine <a href="https://ajm-demo.de/#/login">Demo-Instanz</a> ist online.',
      ],
      stackLead: 'Java, Spring Boot',
      stack: 'Spring Security OAuth2, JPA · Angular · docx4j, Gotenberg · PostgreSQL, Garage (S3), Authentik · Docker, Azure Container Apps',
      link: { href: 'https://github.com/Martin1088/accessible-job-manager', label: 'Quellcode und vollständige Dokumentation auf GitHub' },
    },
    {
      id: 'secret-sync',
      title: 'secret-sync',
      text: [
        'Authentifizierungskomponente für das Bridgehead-Deployment. Mein Beitrag waren die OAuth-Automatisierung und die serverseitige Token-Rotation: Anwendungen und Nutzer werden über die APIs von Authentik und Keycloak eingerichtet, sodass Komponenten Zugriff bekommen, ohne dass jemand Secrets von Hand verteilt.',
      ],
      stackLead: 'Rust',
      stack: 'Axum, Tokio, reqwest · Authentik, Keycloak, OAuth2',
      link: { href: 'https://github.com/samply/secret-sync', label: 'Quellcode auf GitHub' },
    },
    {
      id: 'samply-exporter',
      title: 'Samply-Exporter – Authentifizierungsschicht',
      text: [
        'Absicherung eines bestehenden Java-Dienstes, der FHIR-Daten in verschiedene Formate exportiert. Ich habe mehrere Spring-Security-Filter-Chains nebeneinander umgesetzt – JWT-Resource-Server, Browser-Login und API-Key – sowie gruppenbasierte Autorisierung über OIDC-Claims.',
      ],
      stackLead: 'Java',
      stack: 'Spring Boot, Spring Security 6, OAuth2/OIDC',
      link: { href: 'https://github.com/samply/exporter/pull/75', label: 'Der Pull Request auf GitHub' },
    },
    {
      id: 'workspace-booking',
      title: 'Arbeitsplatz-Buchungssystem',
      text: [
        'Eine Neuinterpretation des klassischen Raumbuchungssystems als Webservice: Buchung, Verwaltung und Login über OAuth. Von mir komplett gebaut, um mich in Rust durch eine Domäne mit viel ORM-Logik zu arbeiten.',
      ],
      stackLead: 'Rust',
      stack: 'Loco, SeaORM · Angular, OAuth2',
      // TODO: check this repository URL on github.com/Martin1088
      link: { href: 'https://github.com/Martin1088', label: 'Auf meinem GitHub-Profil' },
    },
    {
      id: 'plantuml',
      title: 'Architekturdiagramme mit Screenreader',
      text: [
        'Diagramme sind in den meisten Projekten der am wenigsten barrierefreie Teil. PlantUML ist Text und damit die Ausnahme – eine Sammlung von ERDs, Klassendiagrammen, Prozessabläufen und Netzwerkdarstellungen, die ich schreibe und lese, ohne sie je gerendert zu sehen.',
      ],
      stackLead: 'PlantUML',
      stack: 'NeoVim, Arbeiten im Terminal',
      link: { href: 'https://github.com/Martin1088/Plantuml-With-Screenreader', label: 'Quellcode auf GitHub' },
    },
  ],
  skillsHeading: 'Technisches Profil',
  skills: [
    { title: 'Rust – im produktiven Einsatz, rund zwei Jahre', detail: 'Axum, Tokio, SeaORM, Loco, Tauri' },
    { title: 'Java und Spring Boot', detail: 'Spring Security (OAuth2/OIDC), Hibernate/JPA, Gradle' },
    { title: 'Identität und Zugriff', detail: 'OAuth2, OIDC, Authentik, Keycloak, Token-Rotation' },
    { title: 'Infrastruktur', detail: 'Kubernetes (CKAD-zertifiziert), Docker, Helm, GitLab CI, GitHub Actions, Linux, S3' },
    { title: 'Außerdem genutzt', detail: 'Go (Projektebene), Python (Flask, SQLAlchemy), Angular, Svelte, PostgreSQL' },
  ],
  training:
    'Ausgebildeter Fachinformatiker für Anwendungsentwicklung (IHK) am Deutschen Krebsforschungszentrum in Heidelberg.',
  contactHeading: 'Kontakt',
  contact: 'Ich bin offen für Stellen im Backend – remote oder im Pendelbereich von Karlsruhe.',
};

export const COACHING_DE: CoachingPageContent = {
  metaTitle: 'Coaching – Arbeiten und Programmieren mit Screenreader | Martin Jurk',
  metaDescription:
    'Martin Jurk coacht blinde und sehbehinderte Menschen und ihre Teams: Softwareentwicklung mit Screenreader, barrierefreie digitale Arbeitsplätze und praktische Hilfe bei IT-Fragen.',
  eyebrow: 'Coaching & Angebote',
  title: 'Arbeiten mit Screenreader',
  lead:
    'Ich bin blinder Backend-Entwickler. Ich arbeite jeden Tag mit Screenreader im Terminal und zeige anderen, wie das geht – praktisch, geduldig und aus meiner eigenen Erfahrung.',
  whyHeading: 'Warum ich',
  why: [
    '2015 bin ich erblindet und musste meine Arbeitsweise komplett neu aufbauen: Braille, Screenreader (JAWS, NVDA, VoiceOver, Orca), Bedienung über die Tastatur. Heute entwickle ich so beruflich Software – APIs, Authentifizierung, Deployment.',
    'Ich unterrichte deshalb nicht nach Handbuch. Ich weiß, welche Werkzeuge einen achtstündigen Arbeitstag durchhalten und welche nur in einer Demo barrierefrei wirken.',
  ],
  offersHeading: 'Was ich anbiete',
  offers: [
    {
      id: 'learn-to-program',
      title: 'Blind programmieren lernen',
      text: 'Softwareentwicklung mit Screenreader: Editor, Terminal, Navigation im Code und die täglichen Abläufe, die das schnell machen statt nur möglich.',
    },
    {
      id: 'accessible-workplace',
      title: 'Ein barrierefreier Arbeitsplatz',
      text: 'Werkzeuge, Einstellungen und Methoden für einen digitalen Arbeitsplatz, der ohne Sehen funktioniert – für Einzelne, die sich selbst einrichten, und für Teams, die eine blinde Kollegin oder einen blinden Kollegen einarbeiten.',
    },
    {
      id: 'it-guidance',
      title: 'IT-Fragen und Begleitung',
      text: 'Individuelle Unterstützung bei einem konkreten Problem: ein Setup, das nicht will, ein Programm, das nicht spricht, ein nächster Schritt, den du mit jemandem durchdenken möchtest, der das selbst kennt.',
    },
  ],
  contactHeading: 'Kontakt',
  contact: 'Interesse an Coaching, oder du möchtest wissen, ob ich bei etwas Bestimmtem helfen kann? Schreib mir – ich beantworte jede Nachricht.',
};
