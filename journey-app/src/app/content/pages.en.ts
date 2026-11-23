import { CoachingPageContent, WorkPageContent } from './model';

export const WORK_EN: WorkPageContent = {
  metaTitle: 'Martin Jurk – Backend Developer, Rust & Java',
  metaDescription:
    'Martin Jurk: backend developer specialising in Rust, Java/Spring Boot, OAuth2/OIDC authentication and Kubernetes. Federated data platforms in medical research.',
  eyebrow: 'Backend Development',
  title: 'Martin Jurk',
  lead:
    'Backend developer. I build services in Rust and Java – from the API through authentication to the Kubernetes deployment. Most recently technical lead for two federated data platforms in cancer research.',
  aboutHeading: 'What I do',
  about: [
    'My focus is the backend and the security layer around it: REST APIs, OAuth2 and OIDC, secrets and token handling, containerised deployment. I have spent the last years on federated systems – independent sites that exchange sensitive data and need every approval to be traceable afterwards.',
    'I work terminal-first with a screen reader, which makes me precise about the things that are easy to skip: readable architecture documentation, reproducible builds, and interfaces that survive without a mouse.',
  ],
  projectsHeading: 'Selected work',
  projects: [
    {
      id: 'itcc',
      title: 'ITCC Federated Data Hub',
      text: [
        'International integration of paediatric cancer data across clinical sites. I was technical lead and designed and documented the federated architecture: FHIR and genetic data ingestion, pseudonymised central storage, Kubernetes deployment.',
      ],
      stackLead: 'Rust',
      stack: 'Axum, Tokio, aws-sdk-s3 · Apache Iceberg, S3, Kubernetes',
      link: { href: 'https://github.com/samply/itcc-federated-data-hub', label: 'Source on GitHub' },
    },
    {
      id: 'ajm',
      title: 'Accessible Job Manager',
      text: [
        'My own project, and the one I would show first. A job application manager for blind users, where screen reader operation is the premise the architecture is built on rather than a layer added afterwards. A posting is imported from a link and extracted into structured fields by a local language model. The cover letter is written as text and comes out as a DIN 5008-compliant PDF: the page geometry is a server-side guarantee, so nobody has to arrange an address block by hand.',
        'The part I find most interesting is the role model. Advisors and reviewers can support an applicant – suggest openings, read a letter before it goes out – but every document access is granted by the user and can be revoked again. MIT licensed and built to be self-hosted, so vocational rehabilitation providers can run their own instance. A <a href="https://ajm-demo.de/#/login">demo instance</a> is online.',
      ],
      stackLead: 'Java, Spring Boot',
      stack: 'Spring Security OAuth2, JPA · Angular · docx4j, Gotenberg · PostgreSQL, Garage (S3), Authentik · Docker, Azure Container Apps',
      link: { href: 'https://github.com/Martin1088/accessible-job-manager', label: 'Source and full documentation on GitHub' },
    },
    {
      id: 'secret-sync',
      title: 'secret-sync',
      text: [
        'Authentication component for the Bridgehead deployment. I contributed the OAuth automation and server-side token rotation: application and user enrolment against Authentik and Keycloak through their APIs, so component access is provisioned without manual secret handling.',
      ],
      stackLead: 'Rust',
      stack: 'Axum, Tokio, reqwest · Authentik, Keycloak, OAuth2',
      link: { href: 'https://github.com/samply/secret-sync', label: 'Source on GitHub' },
    },
    {
      id: 'samply-exporter',
      title: 'Samply Exporter – authentication layer',
      text: [
        'Secured an existing Java service that exports FHIR data into several formats. I implemented multiple Spring Security filter chains side by side – JWT resource server, browser login and API key – plus group-based authorization via OIDC claims.',
      ],
      stackLead: 'Java',
      stack: 'Spring Boot, Spring Security 6, OAuth2/OIDC',
      link: { href: 'https://github.com/samply/exporter/pull/75', label: 'The pull request on GitHub' },
    },
    {
      id: 'workspace-booking',
      title: 'Workspace booking system',
      text: [
        'A reinterpretation of the classic meeting room booking system as a web service: booking, administration, and OAuth login. Built end to end by me as a way to work through an ORM-heavy domain in Rust.',
      ],
      stackLead: 'Rust',
      stack: 'Loco, SeaORM · Angular, OAuth2',
      // TODO: check this repository URL on github.com/Martin1088
      link: { href: 'https://github.com/Martin1088', label: 'On my GitHub profile' },
    },
    {
      id: 'plantuml',
      title: 'Architecture diagrams with a screen reader',
      text: [
        'Diagrams are usually the least accessible artefact in a project. PlantUML is text, so it is the exception – a collection of ERDs, class diagrams, process flows and network views I write and read without ever seeing them rendered.',
      ],
      stackLead: 'PlantUML',
      stack: 'NeoVim, terminal workflow',
      // TODO: check the exact spelling of this repository name
      link: { href: 'https://github.com/Martin1088/Plantuml-With-Screenreader', label: 'Source on GitHub' },
    },
  ],
  skillsHeading: 'Technical profile',
  skills: [
    { title: 'Rust – production, around two years', detail: 'Axum, Tokio, SeaORM, Loco, Tauri' },
    { title: 'Java and Spring Boot', detail: 'Spring Security (OAuth2/OIDC), Hibernate/JPA, Gradle' },
    { title: 'Identity and access', detail: 'OAuth2, OIDC, Authentik, Keycloak, token rotation' },
    { title: 'Infrastructure', detail: 'Kubernetes (CKAD certified), Docker, Helm, GitLab CI, GitHub Actions, Linux, S3' },
    { title: 'Also used', detail: 'Go (project level), Python (Flask, SQLAlchemy), Angular, Svelte, PostgreSQL' },
  ],
  training:
    'Trained as IT specialist for application development (IHK Fachinformatiker Anwendungsentwicklung) at the German Cancer Research Center in Heidelberg.',
  contactHeading: 'Contact',
  contact: 'I am open to backend roles – remote, or within commuting distance of Karlsruhe.',
};

export const COACHING_EN: CoachingPageContent = {
  metaTitle: 'Coaching – Working and programming with a screen reader | Martin Jurk',
  metaDescription:
    'Martin Jurk coaches blind and low-vision people and their teams: screen-reader-driven development, accessible digital workplaces, and hands-on IT guidance.',
  eyebrow: 'Coaching & Services',
  title: 'Working with a screen reader',
  lead:
    'I am a blind backend developer. I work terminal-first with a screen reader every day, and I show other people how to do the same – hands-on, patient, and grounded in my own practice.',
  whyHeading: 'Why me',
  why: [
    'I lost my sight in 2015 and had to rebuild the way I work from scratch: braille, screen readers (JAWS, NVDA, VoiceOver, Orca), keyboard-driven navigation. Today I develop software professionally that way – APIs, authentication, deployment.',
    'That means I do not teach from a manual. I know which tools hold up over an eight-hour working day and which ones only look accessible in a demo.',
  ],
  offersHeading: 'What I offer',
  offers: [
    {
      id: 'learn-to-program',
      title: 'Learn to program blind',
      text: 'Screen-reader-driven development: editor, terminal, code navigation, and the daily workflows that make it fast rather than merely possible.',
    },
    {
      id: 'accessible-workplace',
      title: 'An accessible workplace',
      text: 'Tools, settings and methods for a digital workplace that works without sight – for individuals setting themselves up, and for teams onboarding a blind colleague.',
    },
    {
      id: 'it-guidance',
      title: 'IT questions and guidance',
      text: 'Individual support for a concrete problem: a setup that will not cooperate, a tool you cannot get to speak, a next step you want to think through with someone who has been there.',
    },
  ],
  contactHeading: 'Contact',
  contact: 'Interested in coaching, or want to ask whether I can help with something specific? Write to me – I answer every message.',
};
