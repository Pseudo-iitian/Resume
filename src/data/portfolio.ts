/**
 * Central portfolio data — generated from Abhishek Verma's resume (Abhishek_Verma.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Authentic to Abhishek's engineering journey: Backend, Fintech, Distributed Systems & Scale.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Abhishek Verma',
  displayName: 'Abhishek Verma',
  firstName: 'ABHISHEK',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ABHISHEK ORIGINAL',
  role: 'Software Engineer — Java Backend',
  tagline: ['Software Engineer', 'Java Backend', 'Distributed Systems'],
  intro:
    'Software Engineer with experience building scalable financial microservices in the lending domain. Skilled in Java 17/21, Spring Boot, REST APIs, Kafka, and PostgreSQL, with hands-on experience in Loan Management Systems (Apache Fineract) across the end-to-end loan lifecycle.',
  location: 'Noida, India',
  email: 'abhishek.verma.6561@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/1-abhishek-verma',
    github: 'https://github.com/Pseudo-iitian',
  },
  resumePdf: '/assets/Abhishek_Verma_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Abhishek Verma',
  },
  interests: ['Distributed Systems', 'System Design', 'Event-Driven Architecture', 'Cloud Computing (AWS)'],
};

export const education = [
  {
    school: 'Dr. A.P.J. Abdul Kalam Technical University (KIET Group of Institutions)',
    place: 'Ghaziabad, Delhi-NCR',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: 'November 2021 – June 2025',
    score: 'CGPA 8.2',
  },
];

export const experience = [
  {
    company: 'Rapipay Fintech Private Limited',
    role: 'Software Engineer',
    place: 'Noida, India',
    period: 'August 2024 – Present',
    points: [
      'Deployed a robust Java 17, Spring Boot, and AWS SQS engine that ensures instant REST API delivery of all collections and UTR-confirmed settlements to NBFC partners, processing over 50K records.',
      'Automated UPI/e-NACH due and overdue presentation through Digio and engineered Kafka bulk-upload pipelines for recovery, scaling throughput to 30K+ daily transactions.',
      'Designed an RBI-compliant NPA engine on DPD rules: loans beyond 90 DPD are classified as NPA and later collections go straight to principal, running on 100K+ loan records with 100% accuracy.',
      'Integrated Apache Fineract LMS with LOS for multiple NBFCs, covering restructuring, rescheduling, foreclosure, settlement, cancellation and write-off with zero manual steps.',
      'Reduced AWS writer DB utilization from 99% to 5–20% by rewriting slow PostgreSQL queries, fixing N+1 calls and adding B-tree indexes, trimming query latency by 40% on 1M+ record tables.',
      'Led technical design talks with the payments team and 3+ financial partners to finalize API contracts, accelerating partner onboarding TAT by 70% with fewer rework cycles.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'loan-origination-lms',
    title: 'Loan Origination & LMS',
    year: '2025',
    genre: 'Fintech • Microservices • Event-Driven',
    logline: 'Event-driven lending microservices & Apache Fineract LMS processing 100K+ monthly transactions at sub-200ms latency.',
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Spring Batch', 'AWS SQS'],
    build: [
      'Migrated EMI processing to event-driven microservices on Apache Kafka, shrinking latency from 7s to under 30ms (99%+ faster) and improving scalability and fault tolerance.',
      'Tuned repayment and settlement workflows to process 100K+ transactions/month at sub-200ms latency using Spring Batch.',
      'Integrated Apache Fineract LMS with LOS for multiple NBFCs, automating restructuring, foreclosure, and zero-manual settlement workflows.',
    ],
    features: [
      'Event-driven EMI processing on Kafka',
      'Sub-200ms Spring Batch repayment workflows',
      'Apache Fineract LMS & LOS integration',
      'Zero manual steps early closure & EMI reconciliation',
      'Sub-30ms EMI processing latency',
    ],
    metrics: [
      { value: '99%+', label: 'latency reduction (7s → <30ms)' },
      { value: '100K+', label: 'monthly transactions' },
      { value: '<200ms', label: 'settlement workflow latency' },
      { value: '100%', label: 'ledger reconciliation accuracy' },
    ],
    github: 'https://github.com/Pseudo-iitian',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'upi-nach-npa-engine',
    title: 'UPI/NACH & NPA Engine',
    year: '2025',
    genre: 'Fintech • SQS • Banking Integration',
    logline: 'Automated UPI/e-NACH collection pipeline with Digio, AWS SQS instant settlements, and rule-based 90+ DPD NPA engine.',
    stack: ['Java 17', 'Spring Boot', 'AWS SQS', 'Kafka', 'Digio SDK', 'PostgreSQL'],
    build: [
      'Engineered end-to-end UPI and e-NACH presentation pipelines via Digio and Kafka, scaling throughput to 30K+ daily transactions and boosting UPI repayment adoption by 50%.',
      'Designed an RBI-compliant NPA engine on DPD rules: loans beyond 90 DPD are classified as NPA with collections routed to principal across 100K+ loan records with 100% accuracy.',
      'Built an AWS SQS settlement posting engine that delivers UTR-confirmed settlements and collections to NBFC partners via instant REST APIs across 50K+ records.',
    ],
    features: [
      'End-to-end Digio UPI & e-NACH presentation',
      'RBI-compliant 90+ DPD rule-based NPA engine',
      'AWS SQS asynchronous settlement posting',
      'Kafka bulk-upload pipelines for debt recovery',
    ],
    metrics: [
      { value: '30K+', label: 'daily transactions' },
      { value: '+50%', label: 'UPI repayment adoption' },
      { value: '100K+', label: 'loan records evaluated' },
      { value: '50K+', label: 'partner settlement records' },
    ],
    github: 'https://github.com/Pseudo-iitian',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'bikedone',
    title: 'BikeDone Platform',
    year: '2026',
    genre: 'Distributed Systems • Real-Time • Full-Stack',
    logline: 'On-demand mechanic dispatch platform with AWS SQS auto-dispatching, STOMP WebSockets, and JWT RBAC.',
    stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Spring Security', 'AWS SQS', 'WebSocket', 'Razorpay'],
    build: [
      'Built an AWS SQS dispatch engine that auto-assigns the nearest mechanic within a 5–25 km radius with retries, real-time chat, and live tracking via WebSocket (STOMP).',
      'Implemented platform security with JWT auth, role-based access control, SHA-256 token rotation, and OTP login; integrated Razorpay with idempotent webhooks to prevent duplicate payments.',
      'Engineered ACID-compliant PostgreSQL schema with Flyway automated migrations, UUIDv4 keys, and B-Tree indexing, reducing query latency by 30%.',
    ],
    features: [
      'AWS SQS intelligent mechanic auto-dispatch (5–25 km radius)',
      'Real-time chat & live GPS tracking via WebSocket (STOMP)',
      'Stateless JWT auth with refresh token rotation & RBAC',
      'Idempotent Razorpay webhook payment processing',
    ],
    metrics: [
      { value: '5–25 km', label: 'mechanic dispatch radius' },
      { value: '30%', label: 'lower database query latency' },
      { value: '100%', label: 'idempotent payment webhooks' },
      { value: '0', label: 'duplicate transactions' },
    ],
    github: 'https://github.com/AishMishra001/bikeDone',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'dsa-mastery',
    title: '1,500+ Problems',
    org: 'LeetCode • GeeksforGeeks',
    detail: '550+ problems solved on LeetCode with deep mastery in Trees, Graphs, Dynamic Programming, and Concurrency.',
    laurel: 'Competitive Coding',
    link: 'https://github.com/Pseudo-iitian',
  },
  {
    id: 'db-optimization',
    title: 'DB Optimization',
    org: 'Rapipay Fintech',
    detail: 'Reduced AWS writer DB utilization from 99% to 5–20% on 1M+ record tables, slashing query latency by 40% and eliminating N+1 queries.',
    laurel: 'Production Impact',
  },
  {
    id: 'latency-reduction',
    title: '7s → <30ms Latency',
    org: 'Lending Microservices',
    detail: 'Transitioned EMI processing to event-driven microservices on Apache Kafka, cutting processing latency by 99% with fault tolerance.',
    laurel: 'Architecture Overhaul',
  },
  {
    id: 'npa-engine',
    title: '100K+ NPA Engine',
    org: 'Regulatory Compliance',
    detail: 'Engineered automated RBI-compliant NPA engine on 90+ DPD rules operating across 100K+ loan records with 100% classification accuracy.',
    laurel: 'Fintech Engine',
  },
  {
    id: 'partner-integrations',
    title: '70% Faster TAT',
    org: 'NBFC Integrations',
    detail: 'Architected configurable REST settlement posting engine, accelerating partner integration turnaround time by 70% across 3+ partners.',
    laurel: 'System Integration',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Fintech', name: 'Apache Fineract LMS & Loan Lifecycle Architecture', link: 'https://github.com/Pseudo-iitian' },
  { issuer: 'Kafka', name: 'Event-Driven Microservices & Message Streaming', link: 'https://github.com/Pseudo-iitian' },
  { issuer: 'AWS', name: 'AWS Cloud Architecture (SQS, Lambda, EC2, S3)', link: 'https://github.com/Pseudo-iitian' },
  { issuer: 'Java', name: 'Java Concurrency, JVM Memory Management & Spring Boot 3', link: 'https://github.com/Pseudo-iitian' },
  { issuer: 'PostgreSQL', name: 'PostgreSQL Advanced Query Optimization & B-Tree Indexing', link: 'https://github.com/Pseudo-iitian' },
  { issuer: 'Security', name: 'Stateless Security, JWT, RBAC & Idempotency Patterns', link: 'https://github.com/Pseudo-iitian' },
  { issuer: 'DSA', name: 'Data Structures & Algorithms (1,500+ Problems Solved)', link: 'https://github.com/Pseudo-iitian' },
  { issuer: 'Digio', name: 'UPI & e-NACH Automated Mandate & Presentation Workflows', link: 'https://github.com/Pseudo-iitian' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary powerhouse',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'PL/pgSQL', mono: 'Pl' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C / C++', mono: 'C+' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Frameworks',
    subtitle: 'High-throughput microservices',
    skills: [
      { name: 'Spring Boot', mono: 'Sb', note: 'Core' },
      { name: 'Spring Batch', mono: 'Ba' },
      { name: 'Spring Security', mono: 'Ss' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Hibernate / JPA', mono: 'Hb' },
    ],
  },
  {
    id: 'messaging',
    title: 'Messaging & Queues',
    subtitle: 'Event-driven streaming & decoupling',
    skills: [
      { name: 'Apache Kafka', mono: 'Kf', note: 'Streaming' },
      { name: 'AWS SQS', mono: 'Sq', note: 'Queue' },
      { name: 'WebSocket (STOMP)', mono: 'Ws' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    subtitle: 'Query tuning • Indexing • ACID',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg', note: 'Deep tuning' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'B-Tree Indexing', mono: 'Bt' },
      { name: 'Flyway', mono: 'Fw' },
      { name: 'ACID Transactions', mono: 'Ac' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Resilient infrastructure & shipping',
    skills: [
      { name: 'AWS (SQS, Lambda, EC2)', mono: 'Aw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'CI/CD Pipelines', mono: 'Ci' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'fintech-domain',
    title: 'Fintech Domain',
    subtitle: 'Lending • Banking • Compliance',
    skills: [
      { name: 'Apache Fineract LMS', mono: 'Af', note: 'LMS' },
      { name: 'UPI Integration', mono: 'Up' },
      { name: 'e-NACH Presentation', mono: 'Na' },
      { name: 'RBI NPA Engine (DPD)', mono: 'Np' },
      { name: 'Settlement & UTR', mono: 'Ut' },
      { name: 'Digio Mandate Flows', mono: 'Dg' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals & Design',
    subtitle: 'Core engineering foundations',
    skills: [
      { name: 'DSA (1,500+ Solved)', mono: 'Ds' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'Distributed Systems', mono: 'Di' },
      { name: 'Concurrency & Locks', mono: 'Mt' },
      { name: 'SOLID & Design Patterns', mono: 'So' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Rapipay Settlement Engine', 'BikeDone Backend', 'LMS Services'],
  SQL: ['PostgreSQL query optimization', 'Stored procedures on 1M+ tables'],
  'PL/pgSQL': ['PostgreSQL stored procedures & reporting'],
  'Spring Boot': ['Rapipay Fintech Systems', 'BikeDone Backend', 'Loan Origination & LMS'],
  'Spring Batch': ['100K+ monthly transactions repayment workflow'],
  'Spring Security': ['BikeDone JWT + SHA-256 token rotation & RBAC'],
  'Apache Kafka': ['EMI event-driven processing (7s → <30ms)', 'Bulk-upload recovery pipelines'],
  'AWS SQS': ['Partner settlement posting engine (50K+ records)', 'BikeDone mechanic auto-dispatch'],
  PostgreSQL: ['Reduced AWS DB writer load 99% → 5–20%', 'B-tree indexing on 1M+ tables'],
  'REST APIs': ['NBFC partner integrations (TAT accelerated 70%)', 'Digio collection APIs'],
  Microservices: ['Lending ecosystem', 'Settlement orchestration'],
  'Apache Fineract LMS': ['Restructuring, rescheduling, foreclosure & write-off automation'],
  'UPI Integration': ['Digio automated presentation (30K+ daily transactions)'],
  'e-NACH Presentation': ['Automated due & overdue presentation via Digio'],
  'RBI NPA Engine (DPD)': ['100K+ loan records evaluated at 90+ DPD rules with 100% accuracy'],
  'System Design': ['Event-driven architecture', 'Decoupled settlement posting'],
  'DSA (1,500+ Solved)': ['550+ LeetCode problems', 'GeeksforGeeks'],
  'WebSocket (STOMP)': ['BikeDone live tracking & real-time chat'],
  'AWS (SQS, Lambda, EC2)': ['BikeDone production hosting', 'Rapipay SQS settlement pipelines'],
  Docker: ['BikeDone containerized microservices', 'CI/CD deployment'],
  'Git / GitHub': ['https://github.com/Pseudo-iitian'],
  'Concurrency & Locks': ['ExecutorService, Thread Pools, Mutex & Locks in Java'],
  Redis: ['Caching & low-latency state retrieval'],
  'SOLID & Design Patterns': ['Strategy, Factory, Singleton in production microservices'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The CS Foundation',
    period: '2021 – 2025',
    synopsis: 'Computer Science & Engineering at KIET Group of Institutions (AKTU) — algorithms, core Java, DBMS, and competitive coding.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Computer Scientist',
        description: 'B.Tech in Computer Science and Engineering at KIET Group of Institutions (AKTU), graduating with an 8.2 CGPA.',
        tags: ['B.Tech CSE', 'KIET', 'AKTU', 'CGPA 8.2'],
        runtime: 'Nov 2021 – Jun 2025',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Problem Solver',
        description: 'Solved 1,500+ DSA problems across LeetCode (550+ problems) and GeeksforGeeks with deep mastery of graph algorithms, DP, and trees.',
        tags: ['DSA', 'LeetCode', '1,500+ Solved', 'Algorithms'],
        runtime: '1,500+ problems',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'Inside the JVM',
        description: 'Deep dive into Core Java, OOP, Collections Framework, Streams API, Multithreading, Concurrency, and Memory Management.',
        tags: ['Java', 'Multithreading', 'Concurrency', 'JVM'],
        runtime: 'Core Foundations',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Entering Fintech',
    period: '2024 – 2025',
    synopsis: 'Stepping into real-world fintech at Rapipay Fintech Private Limited — lending workflows, reporting automation, and UPI collection.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineering Intern',
        description: 'Automated Daily Collection and Loan Summary Reports from microservices, boosting stakeholder reporting efficiency by 60%.',
        tags: ['Rapipay', 'Spring Boot', 'Microservices'],
        runtime: 'Aug 2024 – Aug 2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'High-Volume Queries',
        description: 'Optimized complex SQL queries and PostgreSQL stored procedures across 500K+ records, cutting reporting latency by 30%.',
        tags: ['PostgreSQL', 'SQL', 'Performance'],
        runtime: 'Rapipay Fintech',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'The UPI Pipeline',
        description: 'Facilitated backend lending microservices for UPI collections handling 20K+ daily transactions with deterministic ledger consistency.',
        tags: ['UPI', 'DPD Calculations', 'Ledger'],
        runtime: '20K+ Daily Txns',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Scaling Distributed Systems',
    period: '2025 – Present',
    synopsis: 'Software Engineer at Rapipay — architecting high-throughput event-driven microservices, AWS SQS settlement posting, and NPA engines.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Settlement Engine',
        description: 'Deployed Java 17, Spring Boot, and AWS SQS engine ensuring instant REST API delivery of collections and UTR-confirmed settlements to NBFCs.',
        tags: ['Java 17', 'AWS SQS', 'NBFC Integrations'],
        runtime: '50K+ Records',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Sub-30ms Breakthrough',
        description: 'Moved EMI processing to event-driven microservices on Apache Kafka, shrinking latency from 7 seconds to under 30ms (99%+ faster).',
        tags: ['Apache Kafka', 'Event-Driven', 'Latency'],
        runtime: '99%+ Faster',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The 100K NPA Engine',
        description: 'Designed an RBI-compliant NPA engine on 90+ DPD rules operating across 100K+ loan records with 100% accuracy and complete audit trails.',
        tags: ['NPA Engine', 'RBI Compliance', 'DPD Logic'],
        runtime: '100K+ Records',
        palette: violet,
      },
      {
        code: 'S03 E04',
        title: 'Database Overhaul',
        description: 'Brought AWS writer DB utilization down from 99% to 5–20% by rewriting slow PostgreSQL queries, fixing N+1 calls and adding B-tree indexes.',
        tags: ['PostgreSQL', 'AWS RDS', 'B-Tree Indexing'],
        runtime: '99% → 5–20% DB Load',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Originals',
    period: '2025 – 2026',
    synopsis: 'Three production systems built for high-scale fintech, lending operations, and real-time on-demand services.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Loan Origination & LMS',
        description: 'End-to-end Apache Fineract LMS integration with LOS covering restructuring, foreclosure, and zero-manual settlement workflows.',
        tags: ['Apache Fineract', 'Spring Batch', 'Kafka'],
        runtime: '100K+ Monthly Txns',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'UPI/NACH & Digio Integration',
        description: 'Engineered automated UPI/e-NACH presentation pipelines via Digio and Kafka, scaling throughput to 30K+ daily transactions.',
        tags: ['Digio', 'UPI', 'e-NACH', 'AWS SQS'],
        runtime: '30K+ Daily Txns',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'BikeDone Platform',
        description: 'On-demand bike breakdown & service platform with AWS SQS auto-dispatch within 5–25 km radius, STOMP WebSockets, and JWT RBAC.',
        tags: ['Java 21', 'Spring Boot 3', 'WebSocket', 'AWS SQS'],
        runtime: 'Full-Stack Platform',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Architecting resilient, ultra-high-throughput distributed financial systems and next-generation cloud infrastructure.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Distributed Horizons',
        description: 'Exploring advanced distributed consensus, fault-tolerant event sourcing, and cloud architectures on AWS.',
        tags: ['Distributed Systems', 'System Design', 'AWS Cloud'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary weapon', title: 'Java & Spring Boot', detail: 'Java 17/21 • Spring Boot 3 • Microservices', palette: amber },
  { label: 'Latency miracle', title: '7s → <30ms', detail: '99%+ faster EMI processing via Kafka', palette: crimson },
  { label: 'Database impact', title: '99% → 5–20%', detail: 'AWS DB writer utilization reduction', palette: jade },
  { label: 'Fintech engine', title: 'RBI NPA Engine', detail: '100K+ loan records • 100% accuracy', palette: violet },
  { label: 'Queue architecture', title: 'AWS SQS & Kafka', detail: '50K+ daily settlement events', palette: ocean },
  { label: 'High throughput', title: '30K+ Daily Txns', detail: 'Automated UPI & e-NACH presentation via Digio', palette: amber },
  { label: 'DSA benchmark', title: '1,500+ Solved', detail: '550+ on LeetCode • Advanced DSA & System Design', palette: crimson },
  { label: 'LMS platform', title: 'Apache Fineract', detail: 'End-to-end loan lifecycle & NBFC integration', palette: ocean },
  { label: 'Real-time platform', title: 'BikeDone', detail: 'SQS auto-dispatch • STOMP WebSockets', palette: jade },
  { label: 'Education', title: 'B.Tech CSE (8.2 CGPA)', detail: 'KIET Group of Institutions (AKTU)', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Abhishek Verma',
    lines: ['Software Engineer — Java Backend Developer', 'Rapipay Fintech · Noida, India'],
    chips: ['Java 17/21', 'Spring Boot 3', 'Kafka', 'PostgreSQL'],
  },
  {
    kicker: 'Production Impact',
    title: '99% to 5–20% DB Load',
    lines: ['Rewrote PostgreSQL queries, eliminated N+1 calls & tuned B-tree indexes', 'Cut query latency by 40% on 1M+ record tables'],
    chips: ['PostgreSQL', 'Query Optimization', 'B-Tree Indexing'],
  },
  {
    kicker: 'Event-Driven Speed',
    title: '7s → <30ms Latency',
    lines: ['Moved EMI processing to event-driven Kafka microservices', 'Achieved 99%+ latency reduction with fault-tolerant streaming'],
    chips: ['Apache Kafka', 'Spring Batch', 'Event-Driven'],
  },
  {
    kicker: 'Fintech Scale',
    title: '50K+ Daily Settlements',
    lines: ['AWS SQS & Java 17 engine delivering instant UTR settlements to NBFCs', 'Automated UPI/e-NACH presentation with Digio (30K+ txns/day)'],
    chips: ['AWS SQS', 'UPI / e-NACH', 'Digio', 'Fineract LMS'],
  },
  {
    kicker: 'Flagship Projects',
    title: 'Three Originals',
    lines: ['Loan Origination & LMS — 100K+ monthly txns at <200ms latency', 'UPI & e-NACH Engine — 90+ DPD NPA engine on 100K+ records', 'BikeDone — Real-time SQS mechanic dispatch & WebSockets'],
  },
  {
    kicker: 'Problem Solving',
    title: '1,500+ DSA Problems',
    lines: ['550+ LeetCode problems solved', 'Deep command of Data Structures, System Design & Concurrency'],
    chips: ['1,500+ Solved', '550+ LeetCode', 'System Design'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech in Computer Science',
    lines: ['KIET Group of Institutions (AKTU)', 'November 2021 – June 2025 · CGPA: 8.2'],
  },
];

export type ProfileId = 'abhishek' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'abhishek',
    name: 'Abhishek',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, architecture & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Tech Lead',
    blurb: 'The production story & metrics first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Experience & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
