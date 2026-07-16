import { IMAGES } from './images';
import { LINKS } from './links';

export type ProjectStatus =
  | 'ACTIVE DEVELOPMENT'
  | 'LIVE · EVOLVING'
  | 'PRE-LAUNCH'
  | 'RESEARCH PHASE'
  | 'RESEARCH COMPLETE'
  | 'PRIVATE BETA'
  | 'ALPHA';

export type SystemStatusState = 'STABLE' | 'IN DEVELOPMENT' | 'PLANNED' | 'COMPLETE' | 'TESTING' | 'RESEARCH' | 'PROTOTYPING';

export interface SystemStatusItem {
  label: string;
  state: SystemStatusState;
}

export interface BuildLogEntry {
  date: string;
  milestone: string;
  note?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullStory: string;
  positioning: string;         // one emotional line shown on tile
  status: ProjectStatus;
  year: string;
  tags: string[];
  themeColors: {
    primary: string;
    secondary: string;
    glow: string;               // CSS color for ambient glow
    text: string;
  };
  logo: string | null;         // from IMAGES
  tileImage: string | null;    // hero/cinematic image for the tile background
  screenshots: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  techStack: string[];
  systemStatus: SystemStatusItem[];
  buildLog: BuildLogEntry[];
  builtFeatures: string[];
  plannedFeatures: string[];
  whatToNotice?: string[];        // "Look at how I think" — architecture/decisions to notice
  skillsDemonstrated?: string[];  // capabilities this project demonstrates
  hidden?: boolean;            // set true to hide from public listing
  featured?: boolean;          // set true to highlight in featured section
}

export const PROJECTS: Project[] = [
  // ─────────────────────────────────────────────────────────────────
  // 01 — OPERONIX
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'operonix',
    featured: true,
    name: 'Operonix',
    tagline: 'AI-assisted execution operating system for builders and founders.',
    shortDescription: 'Execution infrastructure for people who build ambitious things.',
    fullStory: `Most builders don't fail because of bad ideas. They fail because execution gets messy — context scattered across tools, decisions undocumented, priorities shifting without a system holding them together.\n\nOperonix is being built to fix that. It's an AI-assisted execution layer that understands your projects, tracks your decisions, surfaces the right context at the right time, and keeps the execution engine running even when you're not actively managing it.\n\nIt's not a to-do list. It's not a project manager. It's an operating system for building.`,
    positioning: 'Execution infrastructure for ambitious builders.',
    status: 'ACTIVE DEVELOPMENT',
    year: '2024',
    tags: ['AI', 'INFRA', 'SYSTEMS', 'SAAS'],
    themeColors: {
      primary: '#7C3AED',
      secondary: '#06B6D4',
      glow: 'rgba(124, 58, 237, 0.4)',
      text: '#C4B5FD',
    },
    logo: IMAGES.projectLogos.operonix,
    tileImage: IMAGES.projectLogos.operonix,
    screenshots: [],
    liveUrl: LINKS.projects.operonix,
    repoUrl: LINKS.repos.operonix,
    techStack: ['FastAPI', 'Supabase', 'Next.js', 'LangChain', 'Redis', 'Docker'],
    systemStatus: [
      { label: 'CORE EXECUTION ENGINE',     state: 'IN DEVELOPMENT' },
      { label: 'AI ORCHESTRATION LAYER',    state: 'IN DEVELOPMENT' },
      { label: 'CONTEXT PERSISTENCE',       state: 'PLANNED' },
      { label: 'MULTI-AGENT ROUTING',       state: 'PLANNED' },
      { label: 'DASHBOARD INTERFACE',       state: 'PLANNED' },
    ],
    buildLog: [
      { date: '2024-12', milestone: 'Core architecture designed', note: 'Backend structure and data models finalized' },
      { date: '2025-01', milestone: 'Execution engine scaffolded', note: 'Initial API layer live in dev' },
      { date: '2025-02', milestone: 'AI routing system in design', note: 'Bottleneck: defining memory persistence architecture' },
    ],
    builtFeatures: ['Project scaffolding', 'API infrastructure', 'Auth system'],
    plannedFeatures: ['AI context engine', 'Decision logging', 'Multi-agent routing', 'Dashboard UI'],
    whatToNotice: ['Behavioral system architecture', 'AI workflow design', 'Operational continuity engine', 'Local-first thinking', 'State-driven UX'],
    skillsDemonstrated: ['Product Architecture', 'FastAPI', 'PostgreSQL', 'AI Integration', 'System Design', 'UX Strategy'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 02 — BIKETRIBE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'biketribe',
    featured: true,
    name: 'BikeTribe',
    tagline: 'Digital infrastructure layer for biker communities, rides, touring, and motorcycle culture.',
    shortDescription: 'Operating system for motorcycle culture.',
    fullStory: `Motorcycle culture doesn't have infrastructure built for it — just fragmented WhatsApp groups, manual route sharing, and no live coordination layer.\n\nBikeTribe is the digital backbone that motorcycle communities have been missing: real-time ride coordination, live GPS tracking, group formation, route intelligence, and a community layer that keeps the culture alive between rides.\n\nBuilt on WebSockets for true real-time behavior. Designed for riders who want technology to disappear and the ride to dominate.`,
    positioning: 'Operating system for motorcycle culture.',
    status: 'ACTIVE DEVELOPMENT',
    year: '2024',
    tags: ['REALTIME', 'COMMUNITY', 'MOBILE', 'MAPS'],
    themeColors: {
      primary: '#EA580C',
      secondary: '#0EA5E9',
      glow: 'rgba(234, 88, 12, 0.35)',
      text: '#FED7AA',
    },
    logo: IMAGES.projectLogos.biketribe,
    tileImage: IMAGES.projectImages.biketribe.hero,
    screenshots: [
      IMAGES.projectImages.biketribe.img1,
      IMAGES.projectImages.biketribe.img2,
    ],
    liveUrl: LINKS.projects.biketribe,
    repoUrl: LINKS.repos.biketribe,
    techStack: ['React', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Redis', 'Leaflet'],
    systemStatus: [
      { label: 'RIDE CREATION SYSTEM',      state: 'STABLE' },
      { label: 'REAL-TIME GPS TRACKING',    state: 'IN DEVELOPMENT' },
      { label: 'GROUP COORDINATION',        state: 'IN DEVELOPMENT' },
      { label: 'COMMUNITY LAYER',           state: 'PLANNED' },
      { label: 'MOBILE APP',                state: 'PLANNED' },
    ],
    buildLog: [
      { date: '2024-09', milestone: 'Ride creation flow complete', note: 'Core CRUD working' },
      { date: '2024-11', milestone: 'WebSocket infrastructure deployed' },
      { date: '2025-01', milestone: 'GPS tracking in active development', note: 'Bottleneck: accuracy on mobile browsers' },
    ],
    builtFeatures: ['Ride creation & management', 'User auth', 'WebSocket infrastructure', 'Route display'],
    plannedFeatures: ['Live GPS tracking', 'Group chat', 'Mobile app', 'Community profiles', 'Route intelligence'],
    whatToNotice: ['Realtime architecture', 'Community ecosystem design', 'WebSocket infrastructure', 'Mobile-first engineering'],
    skillsDemonstrated: ['React Native', 'FastAPI', 'Realtime Systems', 'Product Thinking', 'Database Design'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 03 — OOZE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'ooze',
    featured: true,
    name: 'OOZE',
    tagline: 'Experimental digital fashion universe blending cinematic UI with futuristic streetwear.',
    shortDescription: 'Digital fashion engineered like an experience.',
    fullStory: `Fashion wasn't supposed to be a form. OOZE started as an experiment: what happens when you treat a fashion brand like a software product?\n\nEvery interaction is intentional. Every visual decision is a system. The storefront is the product — not just a container for products.\n\nCurrently live. Actively evolving its digital identity and commerce layer.`,
    positioning: 'Digital fashion engineered like an experience.',
    status: 'LIVE · EVOLVING',
    year: '2024',
    tags: ['FASHION', 'ECOMMERCE', 'DESIGN', 'BRAND'],
    themeColors: {
      primary: '#9333EA',
      secondary: '#EC4899',
      glow: 'rgba(147, 51, 234, 0.4)',
      text: '#E9D5FF',
    },
    logo: IMAGES.projectLogos.ooze,
    tileImage: IMAGES.projectLogos.ooze,
    screenshots: [],
    liveUrl: LINKS.projects.ooze,
    repoUrl: null,
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Sanity CMS'],
    systemStatus: [
      { label: 'STOREFRONT',                state: 'STABLE' },
      { label: 'PRODUCT CATALOG',           state: 'STABLE' },
      { label: 'CHECKOUT FLOW',             state: 'STABLE' },
      { label: 'DIGITAL LOOKBOOK',          state: 'IN DEVELOPMENT' },
      { label: 'AR PREVIEW',                state: 'PLANNED' },
    ],
    buildLog: [
      { date: '2024-08', milestone: 'Brand identity established' },
      { date: '2024-10', milestone: 'Storefront live', note: 'First products listed' },
      { date: '2025-01', milestone: 'Digital lookbook in design', note: 'Exploring AR preview concept' },
    ],
    builtFeatures: ['Full storefront', 'Product catalog', 'Checkout', 'Brand system'],
    plannedFeatures: ['Digital lookbook', 'AR product preview', 'Community layer'],
    whatToNotice: ['Cinematic commerce UX', 'Brand-as-product thinking', 'Motion-driven storytelling', 'Conversion-focused storefront'],
    skillsDemonstrated: ['Next.js', 'Framer Motion', 'Stripe', 'Sanity CMS', 'Design Systems', 'Brand Strategy'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 04 — ARCHITECT AI
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'architect-ai',
    featured: true,
    name: 'Architect AI',
    tagline: 'Intelligent strategic workspace that transforms raw ideas into executable systems.',
    shortDescription: 'Turns raw ideas into execution-ready architecture.',
    fullStory: `Ideas are cheap. Architecture is expensive. The gap between "I have an idea" and "here is a system that executes it" is where most projects die.\n\nArchitect AI is being built to close that gap — a workspace where you dump raw thinking and get back structured execution blueprints, system diagrams, and decision frameworks that a team can actually build from.\n\nNot an AI chat tool. An intelligent co-architect.`,
    positioning: 'Turns raw ideas into execution-ready architecture.',
    status: 'RESEARCH PHASE',
    year: '2025',
    tags: ['AI', 'STRATEGY', 'TOOLS', 'SAAS'],
    themeColors: {
      primary: '#06B6D4',
      secondary: '#8B5CF6',
      glow: 'rgba(6, 182, 212, 0.35)',
      text: '#A5F3FC',
    },
    logo: IMAGES.projectLogos.architectai,
    tileImage: IMAGES.projectLogos.architectai,
    screenshots: [],
    liveUrl: null,
    repoUrl: null,
    techStack: ['Next.js', 'FastAPI', 'LangChain', 'GPT-4', 'Supabase', 'React Flow'],
    systemStatus: [
      { label: 'IDEA PROCESSING ENGINE',    state: 'RESEARCH' },
      { label: 'STRATEGY MAPPING',          state: 'PROTOTYPING' },
      { label: 'EXECUTION FRAMEWORK',       state: 'PLANNED' },
      { label: 'AI INTEGRATION',            state: 'PLANNED' },
      { label: 'COLLABORATIVE WORKSPACE',   state: 'PLANNED' },
    ],
    buildLog: [
      { date: '2025-01', milestone: 'Concept validated through personal use', note: 'Using manual version to run Operonix' },
      { date: '2025-02', milestone: 'Core idea processing approach defined' },
      { date: '2025-03', milestone: 'Prototype in early design', note: 'Bottleneck: defining AI instruction boundaries' },
    ],
    builtFeatures: ['Concept validation', 'Architecture prototype'],
    plannedFeatures: ['Idea parsing engine', 'System diagram generator', 'Execution blueprint export', 'Team collaboration'],
    whatToNotice: ['Idea-to-architecture workflow', 'AI orchestration design', 'Visual system mapping', 'Decision-framework modeling'],
    skillsDemonstrated: ['Next.js', 'FastAPI', 'LangChain', 'React Flow', 'AI Integration', 'System Design'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 05 — SEVA AGRO
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'seva-agro',
    featured: true,
    name: 'Seva Agro',
    tagline: 'Industrial-grade agricultural machinery platform for modern farming businesses.',
    shortDescription: 'Industrial infrastructure for modern agriculture.',
    fullStory: `Agriculture runs on equipment. The businesses that supply that equipment run on relationships, trust, and reputation — not technology. Seva Agro is changing that.\n\nAn end-to-end platform for an agricultural machinery manufacturer: product catalog, dealer network, machinery specifications, and a digital presence that matches the industrial weight of the machines being sold.\n\nBuilt with Next.js 15 and Django — production-grade from day one.`,
    positioning: 'Industrial infrastructure for modern agriculture.',
    status: 'PRE-LAUNCH',
    year: '2024',
    tags: ['INFRA', 'INDUSTRIAL', 'B2B', 'PLATFORM'],
    themeColors: {
      primary: '#16A34A',
      secondary: '#CA8A04',
      glow: 'rgba(22, 163, 74, 0.35)',
      text: '#BBF7D0',
    },
    logo: null,
    tileImage: null,
    screenshots: [],
    liveUrl: LINKS.projects.sevaagro,
    repoUrl: LINKS.repos.sevaagro,
    techStack: ['Next.js 15', 'Django', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    systemStatus: [
      { label: 'PRODUCT CATALOG',           state: 'IN DEVELOPMENT' },
      { label: 'MACHINERY DATABASE',        state: 'IN DEVELOPMENT' },
      { label: 'DEALER NETWORK',            state: 'PLANNED' },
      { label: 'SMART RECOMMENDATIONS',     state: 'PLANNED' },
      { label: 'FIELD ANALYTICS',           state: 'PLANNED' },
    ],
    buildLog: [
      { date: '2024-11', milestone: 'Architecture decided: Next.js 15 + Django', note: 'Chosen for long-term maintainability' },
      { date: '2025-01', milestone: 'Product catalog structure designed' },
      { date: '2025-02', milestone: 'Backend API in active development', note: 'Bottleneck: machinery data modeling' },
    ],
    builtFeatures: ['Project architecture', 'Backend API foundation', 'Frontend scaffold'],
    plannedFeatures: ['Product catalog', 'Machinery specs system', 'Dealer portal', 'Inquiry system'],
    whatToNotice: ['Production-grade architecture', 'Industrial B2B catalog modeling', 'SEO-first structure', 'Dealer-network design'],
    skillsDemonstrated: ['Next.js 15', 'Django', 'PostgreSQL', 'TypeScript', 'System Architecture'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 06 — FREELANCEFLOW
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'freelanceflow',
    name: 'FreelanceFlow',
    tagline: 'AI-assisted freelance operations and client acquisition management system.',
    shortDescription: 'One system to run your entire independent operation.',
    fullStory: `Freelancing is running a business. Most freelancers don't treat it that way — which is exactly why most freelancers hit an income ceiling.\n\nFreelanceFlow gives independents the operational infrastructure they need: client management, income tracking, deadline visibility, Stripe-connected payments, and an AI layer that helps write proposals, follow up intelligently, and identify revenue gaps.\n\nNot a task manager. An operations system.`,
    positioning: 'One system to run your entire independent operation.',
    status: 'PRE-LAUNCH',
    year: '2024',
    tags: ['SAAS', 'AI', 'OPERATIONS', 'B2C'],
    themeColors: {
      primary: '#0EA5E9',
      secondary: '#10B981',
      glow: 'rgba(14, 165, 233, 0.35)',
      text: '#BAE6FD',
    },
    logo: null,
    tileImage: IMAGES.projectImages.freelanceflow.img1,
    screenshots: [
      IMAGES.projectImages.freelanceflow.img1,
      IMAGES.projectImages.freelanceflow.img2,
    ],
    liveUrl: LINKS.projects.freelanceflow,
    repoUrl: LINKS.repos.freelanceflow,
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'Stripe', 'TypeScript'],
    systemStatus: [
      { label: 'CLIENT MANAGEMENT',         state: 'STABLE' },
      { label: 'INCOME TRACKING',           state: 'STABLE' },
      { label: 'AI PROPOSAL GENERATOR',     state: 'IN DEVELOPMENT' },
      { label: 'STRIPE INTEGRATION',        state: 'TESTING' },
      { label: 'ANALYTICS DASHBOARD',       state: 'PLANNED' },
    ],
    buildLog: [
      { date: '2024-08', milestone: 'Client dashboard complete' },
      { date: '2024-10', milestone: 'Stripe payment integration tested' },
      { date: '2025-01', milestone: 'AI proposal generation in development', note: 'Core income tracking stable' },
    ],
    builtFeatures: ['Client dashboard', 'Income tracking', 'Deadline management', 'Basic Stripe integration'],
    plannedFeatures: ['AI proposal writer', 'Client acquisition automation', 'Revenue forecasting', 'Contract management'],
    whatToNotice: ['Operations-system thinking', 'Payments integration', 'AI-assisted workflows', 'Client lifecycle modeling'],
    skillsDemonstrated: ['React', 'FastAPI', 'PostgreSQL', 'Stripe', 'TypeScript', 'Product Design'],
  },

  // ─────────────────────────────────────────────────────────────────
  // 07 — LIVER DISEASE PREDICTOR
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'liver-disease-predictor',
    name: 'Liver Disease Predictor',
    tagline: 'Machine learning system for early liver disease risk prediction and health analysis.',
    shortDescription: 'ML classification pipeline for healthcare risk intelligence.',
    fullStory: `Healthcare AI is most valuable when it catches what humans miss. This project is a multi-model classification pipeline trained to predict liver disease risk from standard clinical parameters.\n\nFive algorithms compared. Data from 583 patient records. Built to understand how ML models behave in healthcare contexts — where false negatives cost more than false positives, and explainability matters as much as accuracy.`,
    positioning: 'ML classification pipeline for healthcare risk intelligence.',
    status: 'RESEARCH COMPLETE',
    year: '2023',
    tags: ['ML', 'HEALTHCARE', 'PYTHON', 'RESEARCH'],
    themeColors: {
      primary: '#14B8A6',
      secondary: '#6366F1',
      glow: 'rgba(20, 184, 166, 0.35)',
      text: '#99F6E4',
    },
    logo: null,
    tileImage: IMAGES.projectImages.liverdisease.img1,
    screenshots: [IMAGES.projectImages.liverdisease.img1],
    liveUrl: LINKS.projects.liverdisease,
    repoUrl: LINKS.repos.liverdisease,
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'NumPy'],
    systemStatus: [
      { label: 'DATA PIPELINE',             state: 'COMPLETE' },
      { label: 'MODEL TRAINING',            state: 'COMPLETE' },
      { label: 'PREDICTION API',            state: 'COMPLETE' },
      { label: 'VISUALIZATION LAYER',       state: 'COMPLETE' },
      { label: 'CLINICAL VALIDATION',       state: 'RESEARCH' },
    ],
    buildLog: [
      { date: '2023-09', milestone: 'Dataset cleaned and preprocessed', note: '583 patient records' },
      { date: '2023-10', milestone: '5 ML models trained and compared' },
      { date: '2023-11', milestone: 'Best model achieved 83% accuracy', note: 'Random Forest outperformed others' },
    ],
    builtFeatures: ['Data preprocessing pipeline', 'Multi-model training', 'Performance comparison', 'Visualization dashboard', 'Prediction API'],
    plannedFeatures: ['Clinical validation study', 'Web interface', 'Model explainability layer'],
    whatToNotice: ['ML pipeline design', 'Multi-model comparison', 'Healthcare data handling', 'Explainability focus'],
    skillsDemonstrated: ['Python', 'Scikit-learn', 'Pandas', 'Data Modeling', 'ML Evaluation'],
  },
];

/** Helper: get a project by slug */
export function getProject(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}

/** Helper: get all public projects */
export function getPublicProjects(): Project[] {
  return PROJECTS.filter(p => !p.hidden);
}

/** Helper: get featured projects */
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.featured === true);
}
