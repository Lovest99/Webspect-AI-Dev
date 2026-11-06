export type DeliverableType = 'Web App & AI' | 'Production Website' | 'Brand Identity & Design';

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientOrProject: string;
  projectType: 'Client project' | 'Independent product' | 'Civic platform' | 'Enterprise deployment';
  deliverableType: DeliverableType;
  sector: string;
  summary: string;
  challenge: string;
  approach: string;
  delivered: string[];
  keyDecisions: string[];
  techOrTools: string[];
  externalUrl?: string;
  relatedSolutionSlug: string;
  badgeAccent: string;
  imagePath?: string;
  galleryImages?: string[];
  featuredOrder?: number;
}

export const WORK_ITEMS: CaseStudy[] = [
  {
    id: 'analytico-ai-study',
    slug: 'analytico-business-intelligence',
    title: 'Analytico AI – Multi-Agent Business Intelligence & Predictive Analytics Platform',
    clientOrProject: 'Analytico AI',
    projectType: 'Independent product',
    deliverableType: 'Web App & AI',
    sector: 'Enterprise Analytics & Autonomous AI Agents',
    summary: 'A full-stack enterprise web application orchestrating a collaborative team of five specialized AI agents that ingest raw business data, model forecasts, and articulate plain-English boardroom summaries.',
    challenge: 'Executive leaders and finance teams waste dozens of hours each month querying fragmented SQL warehouses, reconciling conflicting Excel models, and assembling slide decks with manual copy-pasting—leading to stale decision-making and delayed board reports.',
    approach: 'Engineered a reactive, event-driven web application architecture with an interactive visual relationship graph of 5 autonomous agents (Ingestor, Janitor, Analyst, Oracle, Narrator). Built deterministic calculations coupled with Gemini reasoning models, streaming real-time status updates and generating verifiable, citation-backed executive memos.',
    delivered: [
      'Multi-agent collaborative relationship graph with live status and queuing cues',
      'Executive dashboard displaying live Net Revenue ($4.82M), CAC trends, and cohort retention',
      'Drag-and-drop ingestion pipeline supporting messy CSV, Excel, BigQuery, and Postgres datasets',
      'Automated board-ready narrative generator with plain-English insights and citation proofs',
      'SOC 2 Type II compliant secure authentication with enterprise role gating'
    ],
    keyDecisions: [
      'Gave each AI agent a dedicated operational domain to ensure verifiable, deterministic calculations rather than generic hallucinated text',
      'Designed a sleek, dark terminal-inspired interface with high-contrast data visualization and sub-millisecond chart rendering'
    ],
    techOrTools: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Multi-Agent Architecture', 'Gemini AI API', 'Data Visualization'],
    externalUrl: 'https://analyze-eloquent.lovable.app',
    relatedSolutionSlug: 'workflow-automation',
    badgeAccent: '#1442CB',
    imagePath: '/assets/aistudio/analytico-01-hero_b8a161d6.jpg',
    galleryImages: [
      '/assets/aistudio/analytico-01-hero_b8a161d6.jpg',
      '/assets/aistudio/analytico-03-dashboard_f6976e62.jpg',
      '/assets/aistudio/analytico-04-agent-network_1b58c3d0.jpg',
      '/assets/aistudio/analytico-02-auth_366c2970.jpg'
    ],
    featuredOrder: 1
  },
  {
    id: 'coverpilot-ops',
    slug: 'coverpilot-shift-automation',
    title: 'CoverPilot – Automated Shift Coverage & Emergency Workforce Dispatch Engine',
    clientOrProject: 'CoverPilot',
    projectType: 'Independent product',
    deliverableType: 'Web App & AI',
    sector: 'Workforce Operations & Health/Safety Dispatch',
    summary: 'An automated operational web application that detects roster shortfalls in real time, computes certification compliance, and dispatches on-call emergency staff via cascading SMS and WhatsApp triggers without manual phone tag.',
    challenge: 'When a critical industrial shift worker or medical officer calls in sick at 05:00 AM, operations managers spend up to 90 minutes frantically making one-by-one phone calls to off-duty staff—risking costly plant shutdowns and safety violations.',
    approach: 'Architected an automated coverage algorithm that models 24-hour deficit heatmaps, cross-checks worker rest periods and regulatory credentials, and triggers multi-channel broadcast waterfalls with sub-minute claim verification.',
    delivered: [
      'Real-time shift coverage deficit heatmaps with 24-hour operational forecast gauges',
      'Automated cascade messaging engine via WhatsApp and SMS with one-click claim links',
      'Compliance validation gate preventing uncertified or overtime-exceeded staff assignment',
      'Manager dispatch console with live roster sync, audit logs, and calendar push integrations'
    ],
    keyDecisions: [
      'Implemented automated compliance verification so uncertified workers cannot accidentally be dispatched to high-hazard sites',
      'Created visual shift coverage charts displaying 24-hour deficit warnings at a glance'
    ],
    techOrTools: ['React', 'TypeScript', 'Scheduling Algorithms', 'Real-time Messaging', 'Tailwind CSS', 'Node.js'],
    externalUrl: 'https://coverpilot-ops.lovable.app/',
    relatedSolutionSlug: 'workflow-automation',
    badgeAccent: '#2563EB',
    imagePath: '/assets/aistudio/coverpilot-01-hero_8848c129.jpg',
    galleryImages: [
      '/assets/aistudio/coverpilot-01-hero_8848c129.jpg',
      '/assets/aistudio/coverpilot-03-coverage-charts_f9e72658.jpg',
      '/assets/aistudio/coverpilot-02-auth_f228c853.jpg'
    ],
    featuredOrder: 2
  },
  {
    id: 'mist-corporate',
    slug: 'mist-civic-platform',
    title: 'Mist Corporate Services – Company Registration, PRAZ Tenders & Statutory Compliance Portal (mist.co.zw)',
    clientOrProject: 'Mist Corporate Services (mist.co.zw)',
    projectType: 'Client project',
    deliverableType: 'Production Website',
    sector: 'Corporate Secretarial, Legal Compliance & SME Advisory',
    summary: 'A fast, authoritative corporate website and digital client intake portal at mist.co.zw for Zimbabwe’s leading business consultancy, automating company registrations (Pvt Ltd, PBC), ZIMRA tax clearance (ITF263), PRAZ tender certificates, and secretarial compliance for entrepreneurs in Harare and Bulawayo.',
    challenge: 'Entrepreneurs and expanding companies across Zimbabwe struggled with complex, opaque statutory registration processes (Companies Act filings, ZIMRA TaRMS tax clearance, PRAZ procurement licensing). Inquiries overwhelmed office lines with repetitive basic questions and missing shareholder paperwork.',
    approach: 'Engineered a modern, high-credibility corporate web platform deployed at mist.co.zw. Built structured service navigation, clear compliance packages, and an automated inquiry questionnaire guiding entrepreneurs to select their business structure (Pvt Ltd, PBC), upload director IDs, and connect directly with secretarial consultants in Harare or Bulawayo via WhatsApp and email.',
    delivered: [
      'High-performance production website hosted at mist.co.zw with sub-second page loads on mobile networks',
      'Step-by-step company registration intake workflow for Pvt Ltd and Private Business Corporations (PBC)',
      'Statutory compliance guides and direct routing for ZIMRA tax clearance (ITF263) and PRAZ supplier certification',
      'Dedicated multi-office dispatch system connecting clients to Harare and Bulawayo (Mimosa House) offices',
      'Corporate package comparisons detailing secretarial, bookkeeping, and annual return filings'
    ],
    keyDecisions: [
      'Replaced confusing legal jargon with transparent, step-by-step compliance checklists so business owners know exactly what documents are needed upfront',
      'Structured instant WhatsApp inquiry channels pre-filled with the exact corporate service (Registration, PRAZ, ZIMRA, or Secretarial) to eliminate back-and-forth phone tag'
    ],
    techOrTools: ['Production Website', 'React', 'TypeScript', 'Tailwind CSS', 'Client Intake System', 'Responsive UI'],
    externalUrl: 'https://mist.co.zw/',
    relatedSolutionSlug: 'digital-presence',
    badgeAccent: '#0284C7',
    imagePath: '/assets/aistudio/mist-01-hero-archived_202dda1a.jpg',
    galleryImages: [
      '/assets/aistudio/mist-01-hero-archived_202dda1a.jpg',
      '/assets/aistudio/mist-02-services-archived_7328dbc6.jpg'
    ],
    featuredOrder: 3
  },
  {
    id: 'clarity-ai-sichel',
    slug: 'clarity-ai-enterprise-vision',
    title: 'Clarity AI – Mobile Command Center & Enterprise Telemetry for Energy Groups',
    clientOrProject: 'Sichel Energies & SIMRAC Zimbabwe',
    projectType: 'Client project',
    deliverableType: 'Web App & AI',
    sector: 'Commercial Energy, Logistics & Group Operations',
    summary: 'A high-security, mobile-first command center web app ("Run your empire from your phone") providing regional leadership with real-time fuel terminal telemetry, national distribution fleet tracking, and instant executive decision memos.',
    challenge: 'Executive directors and energy group stakeholders lacked centralized real-time visibility over multi-million dollar regional fuel depots, cross-border tanker fleets, and cashflow positions across Southern Africa without waiting for end-of-day spreadsheets.',
    approach: 'Architected a hardened, mobile-first enterprise web app with verified domain-restricted authentication (@sichel.co.zw), live depot tank sensor feeds, fleet transit tracking, and automated AI executive briefing summaries.',
    delivered: [
      'Mobile-first responsive executive dashboard ("Run your empire from your phone")',
      'Verified corporate authentication with custom domain email restrictions (@sichel.co.zw)',
      'Real-time supply chain monitoring with fuel reserve anomaly triggers',
      'Executive summary memo generator designed for instant boardroom decision-making'
    ],
    keyDecisions: [
      'Prioritized biometric mobile login and fast finger-touch ergonomics for leaders on the move',
      'Engineered an enterprise authentication system with role-based super-admin privileges and air-gapped data segregation'
    ],
    techOrTools: ['Mobile Web App', 'React', 'TypeScript', 'Tailwind CSS', 'Secure Auth', 'Enterprise Cloud Architecture'],
    externalUrl: 'https://clarity-empire-vision.lovable.app/',
    relatedSolutionSlug: 'product-development',
    badgeAccent: '#0369A1',
    imagePath: '/assets/aistudio/clarity-01-hero_1e4dd67f.jpg',
    galleryImages: [
      '/assets/aistudio/clarity-01-hero_1e4dd67f.jpg',
      '/assets/aistudio/clarity-02-auth_c17b6eb4.jpg'
    ],
    featuredOrder: 4
  },
  {
    id: 'lifeos',
    slug: 'lifeos-engineering-os',
    title: 'LifeOS – Personal High-Performance Engineering Operating System',
    clientOrProject: 'LifeOS',
    projectType: 'Independent product',
    deliverableType: 'Web App & AI',
    sector: 'Productivity Software & Cognitive Workflow Architecture',
    summary: 'A distraction-free personal operating system web application combining single-screen morning priority planning, micro-habit consistency tracking with streak resilience, and focused deep-work timers.',
    challenge: 'High-output software engineers and technical founders juggle dozens of competing tasks across bloated project management tools, resulting in context switching, cognitive fatigue, and lost momentum on needle-moving priorities.',
    approach: 'Designed a clean, minimalist single-screen operational hub with zero cognitive friction. Built around intentional daily architecture: 3 non-negotiable daily objectives, habit streaks that accommodate rest days without resetting momentum, and integrated focus sprint sessions.',
    delivered: [
      'Distraction-free single-screen morning priority triage dashboard',
      'Micro-habit streak resilience engine with cognitive fatigue protection',
      'Deep-work focus sprint timer with audio cues and session notes capture',
      'Offline-capable local persistence ensuring seamless usability without cloud lag'
    ],
    keyDecisions: [
      'Enforced a strict limit of 3 primary goals per day to prevent overwhelm and maintain ruthless execution velocity',
      'Designed an ultra-clean, distraction-free typographic palette with zero visual clutter'
    ],
    techOrTools: ['Web App', 'React', 'TypeScript', 'Local State Engine', 'Tailwind CSS', 'Clean UI Architecture'],
    externalUrl: 'https://life-bright.ai.studio/',
    relatedSolutionSlug: 'product-development',
    badgeAccent: '#4338CA',
    imagePath: '/assets/aistudio/bright-portfolio-01-hero.jpg',
    galleryImages: [
      '/assets/aistudio/bright-portfolio-01-hero.jpg'
    ],
    featuredOrder: 5
  },
  {
    id: 'relay-system',
    slug: 'relay-automation-engine',
    title: 'Relay AI – Intelligent Webhook Pipeline & Event-Driven Automation Router',
    clientOrProject: 'Relay AI',
    projectType: 'Independent product',
    deliverableType: 'Web App & AI',
    sector: 'Developer Infrastructure & Business Process Automation',
    summary: 'A high-throughput event router and webhook orchestration web application that ingests, filters, and transforms operational payloads with live JSON debugging and human-in-the-loop review thresholds.',
    challenge: 'Small and medium businesses pay steep monthly SaaS costs for complex enterprise integration platforms when they only need resilient, fast webhook transforms between WhatsApp, spreadsheets, and fulfillment backends.',
    approach: 'Built an event-driven Node.js router paired with a visual React configuration dashboard. Supports instant JSON schema validation, conditional filter pipelines, and interactive payload replays for error diagnosis.',
    delivered: [
      'Interactive visual webhook pipeline builder with condition branching',
      'Live payload inspection console with sub-millisecond JSON replay capabilities',
      'Configurable alert routes to WhatsApp, Slack, and webhooks',
      'Human-in-the-loop review threshold for high-value orders'
    ],
    keyDecisions: [
      'Implemented local in-memory fallback queues to prevent data loss during network hiccups',
      'Designed a zero-confusion visual rule builder rather than complex script editors'
    ],
    techOrTools: ['Web App', 'Node.js', 'Express', 'React', 'Tailwind CSS', 'Webhook Handlers'],
    externalUrl: 'https://relay-ai-pro.lovable.app/',
    relatedSolutionSlug: 'workflow-automation',
    badgeAccent: '#059669',
    imagePath: '/assets/aistudio/relay-01-hero_3d5e6359.jpg',
    galleryImages: [
      '/assets/aistudio/relay-01-hero_3d5e6359.jpg',
      '/assets/aistudio/relay-03-dashboard_3d786d9a.jpg',
      '/assets/aistudio/relay-04-analytics_0c732112.jpg',
      '/assets/aistudio/relay-02-auth_83c6b048.jpg'
    ],
    featuredOrder: 6
  },
  {
    id: 'multivate',
    slug: 'multivate-construction',
    title: 'Multivate Construction – Civil Engineering Corporate Website & Tender Portfolio',
    clientOrProject: 'Multivate Construction',
    projectType: 'Client project',
    deliverableType: 'Production Website',
    sector: 'Commercial Civil Engineering & Building Construction',
    summary: 'A robust, authoritative corporate website and categorized commercial project portfolio showcasing heavy machinery fleet, past civil engineering completions, and direct quotation intake.',
    challenge: 'Multivate delivers high-stakes commercial civil engineering projects across Zimbabwe, but lacked a central digital home to prove their project history, equipment capacity, and engineering accreditations to corporate developers.',
    approach: 'Designed an authoritative web platform structured around past civil completions, machinery fleet specifications, and direct WhatsApp tender channels. Optimized for fast mobile loading on construction sites.',
    delivered: [
      'Comprehensive company website with mobile-optimized architecture',
      'Categorized commercial project gallery (civil works, commercial builds, renovations)',
      'Direct tender and quotation inquiry flows connected to management',
      'Corporate promotional graphic collateral matching the new visual standards'
    ],
    keyDecisions: [
      'Prioritized equipment and safety accreditation proof directly on the homepage over abstract marketing copy',
      'Engineered an ultra-fast image gallery that loads seamlessly over variable mobile network connections'
    ],
    techOrTools: ['Production Website', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vector Branding'],
    relatedSolutionSlug: 'digital-presence',
    badgeAccent: '#D97706',
    imagePath: '/assets/aistudio/file_0000000034ec8211943d2fd9091f992f_33a58136.png',
    galleryImages: ['/assets/aistudio/file_0000000034ec8211943d2fd9091f992f_33a58136.png']
  },
  {
    id: 'deepstone-legacy',
    slug: 'deepstone-legacy-brand',
    title: 'Deepstone Legacy – 3D Isometric Brand Mark, Corporate Identity & Engineering Guidelines',
    clientOrProject: 'Deepstone Legacy Construction & Engineering',
    projectType: 'Client project',
    deliverableType: 'Brand Identity & Design',
    sector: 'Heavy Construction, Civil Engineering & Corporate Branding',
    summary: 'A high-precision 3D isometric brand identity system intertwining a structural navy "DS" block with a lime green "L" foundation beam, engineered to communicate structural dominance on vehicles, site hoardings, and tender submissions.',
    challenge: 'A prominent regional civil engineering contractor was bidding on institutional infrastructure tenders with fragmented, unstandardized company branding that diminished corporate credibility.',
    approach: 'Engineered a bespoke 3D isometric corporate logo mark expressing architectural solidity. Paired geometric industrial typography with high-contrast safety lime and deep slate blue, accompanied by complete brand implementation rules.',
    delivered: [
      '3D isometric vector brand mark optimized for large-scale site hoarding and hard hats',
      'Corporate stationery, tender proposal templates, and safety accreditation lockups',
      'Comprehensive visual identity manual specifying typography, scale, and color codes',
      'High-resolution vector assets formatted for embroidery, vehicle decals, and digital media'
    ],
    keyDecisions: [
      'Chose a 3D isometric perspective to visually communicate physical weight, civil depth, and foundational engineering integrity',
      'Calibrated a high-contrast lime green accent to mirror on-site safety apparel while maintaining executive boardroom dignity'
    ],
    techOrTools: ['Brand Identity & Design', 'Vector Identity', '3D Isometric Construction', 'Typography', 'Figma'],
    relatedSolutionSlug: 'brand-visibility',
    badgeAccent: '#65A30D'
  },
  {
    id: 'dr-shana',
    slug: 'dr-shana-healthcare',
    title: 'Dr Shana – Natural Health Formulations Brand Identity, Packaging & Commercial Posters',
    clientOrProject: 'Dr Shana Herbs & Food Supplements',
    projectType: 'Client project',
    deliverableType: 'Brand Identity & Design',
    sector: 'Healthcare, Natural Wellness & Commercial Campaign Design',
    summary: 'A complete commercial visual identity and high-converting promotional campaign poster suite for natural herbal remedies, featuring Liquid Chlorophyll Plus Guarana, Sea Cucumber Jelly, and full-range retail packaging with WhatsApp delivery channels.',
    challenge: 'Dr Shana manufactures premium herbal supplements in Zimbabwe, but needed high-trust, authoritative packaging visuals and promotional campaign posters that clearly educate customers on health benefits and drive phone/WhatsApp delivery orders.',
    approach: 'Crafted an opulent botanical visual identity utilizing deep emerald green, metallic gold archway accents, and clean typography. Created structured product showcase posters highlighting ingredients, dosage, and delivery logistics.',
    delivered: [
      'High-impact commercial campaign posters for Chlorophyll Plus Guarana and food supplements',
      'Direct order intake workflows connecting buyers to regional distribution hubs',
      'Mobile-ready nutritional benefit cards for WhatsApp marketing and social distribution',
      'Promotional signage guidelines for pharmacies and retail stockists'
    ],
    keyDecisions: [
      'Emphasized clear product dosage and verified health benefits over generic wellness stock imagery',
      'Prominently integrated Harare & Bulawayo dispatch contact routes and nationwide logistics guarantees'
    ],
    techOrTools: ['Brand Identity & Design', 'Campaign Collateral', 'Typography', 'Packaging Design', 'Figma'],
    relatedSolutionSlug: 'brand-visibility',
    badgeAccent: '#059669',
    imagePath: '/assets/aistudio/file_00000000103c821188fc16c750cdb539_40815e79.png',
    galleryImages: [
      '/assets/aistudio/file_00000000103c821188fc16c750cdb539_40815e79.png',
      '/assets/aistudio/file_0000000005088211b5bd4bc964906c62_4ee6230b.png'
    ]
  },
  {
    id: 'general-aluminium',
    slug: 'general-aluminium-solutions',
    title: 'General Aluminium Solutions – Architectural Fabrication Portfolio & Quote Specifier',
    clientOrProject: 'General Aluminium Solutions',
    projectType: 'Client project',
    deliverableType: 'Production Website',
    sector: 'Architectural Glazing & Metal Fabrication',
    summary: 'A custom commercial portfolio website and interactive specification builder for sliding aluminium doors, windows, shopfronts, and verandah enclosures in Harare, Zimbabwe.',
    challenge: 'Custom aluminium fabrication requires exact measurements and glass profile choices. Prospective clients sent vague WhatsApp messages, creating lengthy back-and-forth exchanges before prices could be determined.',
    approach: 'Created an architectural portfolio website spotlighting completed commercial and residential installations, paired with an intuitive self-guided profile selector guiding property owners through frame styles before requesting site visits.',
    delivered: [
      'Portfolio website displaying completed residential and commercial installations',
      'Interactive profile and glass selector for preliminary cost estimates',
      'Branded project sheets for tender submissions and builder meetings',
      'Direct WhatsApp handoff linking requested aluminium profile codes'
    ],
    keyDecisions: [
      'Focused visuals on macro details (clean mitres, powder-coated finishes, hardware)',
      'Created an intuitive profile guide demystifying glass thickness and frame types for property owners'
    ],
    techOrTools: ['Production Website', 'React', 'Tailwind CSS', 'Figma', 'Asset Optimization'],
    relatedSolutionSlug: 'digital-presence',
    badgeAccent: '#4B5563',
    imagePath: '/assets/aistudio/file_0000000012fc821199272b82bcbe0dc1_ec2eb850.png',
    galleryImages: ['/assets/aistudio/file_0000000012fc821199272b82bcbe0dc1_ec2eb850.png']
  },
  {
    id: 'mox',
    slug: 'professional-mox',
    title: 'Professional Mox – Corporate Facility Care Website & Structured Quote Intake',
    clientOrProject: 'Professional Mox',
    projectType: 'Client project',
    deliverableType: 'Production Website',
    sector: 'Corporate Hygiene & Facilities Maintenance',
    summary: 'A clean, trustworthy B2B corporate website and interactive quotation questionnaire structuring commercial cleaning, industrial fumigation, and corporate office maintenance services.',
    challenge: 'Professional Mox offers specialized industrial hygiene, fumigation, and corporate office care. Inquiries arrived scattered across WhatsApp and phone calls without details on square meterage or frequency, causing delay in sending accurate bids.',
    approach: 'Structured their service offerings into transparent enterprise and commercial tiers. Built a quick-intake service scoping flow where clients specify premises type, frequency, and custom needs before handoff.',
    delivered: [
      'Modern, trustworthy corporate website with clear service breakdowns',
      'Interactive facility scope questionnaire that pre-populates quotation requests',
      'Corporate brand collateral and social promotional suite',
      'Direct WhatsApp quote request integration with structured parameters'
    ],
    keyDecisions: [
      'Replaced vague service bullet points with clear premises checklists (offices, schools, medical facilities)',
      'Integrated an upfront checklist so clients submit floor size and frequency before the first call'
    ],
    techOrTools: ['Production Website', 'React', 'Tailwind CSS', 'WhatsApp Integration', 'Brand Design'],
    relatedSolutionSlug: 'customer-enquiries',
    badgeAccent: '#0D9488'
  },
  {
    id: 'brandmind-ai',
    slug: 'brandmind-ai-studio',
    title: 'BrandMind AI – Contextual Brand Strategy & Editorial Campaign Synthesizer',
    clientOrProject: 'BrandMind AI',
    projectType: 'Independent product',
    deliverableType: 'Web App & AI',
    sector: 'Marketing Strategy & Automated Copy Generation',
    summary: 'An AI-powered web application that synthesizes market differentiation angles, brand voice personas, and channel-specific campaign headlines grounded in verified audience psychographics.',
    challenge: 'Brand strategists and agency owners spend hours drafting repetitive positioning matrices and initial social copy hooks for multiple client brands.',
    approach: 'Built a specialized LLM orchestration interface that lets creative directors configure brand archetypes, analyze competitor positioning, and export complete social launch calendars in minutes.',
    delivered: [
      'Contextual brand voice configuration console with tone moderation sliders',
      'Differentiation matrix generator comparing brand against industry competitors',
      'Multi-channel headline synthesizer formatted for LinkedIn, Instagram, and billboards',
      'Collaborative workspace allowing team members to refine and star approved copy'
    ],
    keyDecisions: [
      'Constrained LLM temperature to maintain disciplined brand tone rather than wild generic slogans',
      'Designed a sleek visual workspace with instant one-click markdown and plain text exports'
    ],
    techOrTools: ['Web App', 'TypeScript', 'Gemini AI API', 'React', 'Tailwind CSS'],
    externalUrl: 'https://brand-mind-aizim.lovable.app/',
    relatedSolutionSlug: 'workflow-automation',
    badgeAccent: '#7C3AED',
    imagePath: '/assets/aistudio/brandmind-01-hero_14e58a22.jpg',
    galleryImages: [
      '/assets/aistudio/brandmind-01-hero_14e58a22.jpg',
      '/assets/aistudio/brandmind-02-design-workspace_502803f9.jpg',
      '/assets/aistudio/brandmind-03-templates_1f4783e1.jpg'
    ]
  },
  {
    id: 'plant-pulse-remote',
    slug: 'plant-pulse-telemetry',
    title: 'PlantPulse Remote – Agricultural IoT Telemetry & Micro-climate Monitoring Web App',
    clientOrProject: 'PlantPulse Remote',
    projectType: 'Independent product',
    deliverableType: 'Web App & AI',
    sector: 'Agritech & Remote Environmental Telemetry',
    summary: 'An IoT telemetry dashboard web application monitoring real-time soil moisture, ambient greenhouse temperature, and humidity sensors with automated threshold alerts for commercial growers.',
    challenge: 'Commercial greenhouse managers and horticulture farmers in Zimbabwe suffer crop loss due to undetected nighttime frost or irrigation line failures across remote plots.',
    approach: 'Built a responsive telemetry dashboard ingesting sensor webhooks every 60 seconds. Designed visual color-coded risk alerts and automated SMS notifications when moisture levels dip below safety thresholds.',
    delivered: [
      'Multi-zone sensor status feed with sub-minute telemetry graphing',
      'Threshold alert configurations (dryness warning, frost prevention)',
      'Daily watering and environmental summary reports for agronomists',
      'Mobile-optimized responsive dashboard for field inspection on smartphones'
    ],
    keyDecisions: [
      'Designed a high-contrast dark dashboard optimized for harsh sunlight readability on tablets',
      'Implemented offline data caching so field inspections remain readable even with patchy cellular coverage'
    ],
    techOrTools: ['Web App', 'IoT Telemetry Webhooks', 'React Dashboard', 'Chart Engine', 'Tailwind CSS'],
    externalUrl: 'https://plant-pulse-remote.lovable.app/',
    relatedSolutionSlug: 'business-operations',
    badgeAccent: '#15803D',
    imagePath: '/assets/aistudio/plantpulse-01-hero_5b98e4a5.jpg',
    galleryImages: [
      '/assets/aistudio/plantpulse-01-hero_5b98e4a5.jpg',
      '/assets/aistudio/plantpulse-02-auth_80a33401.jpg'
    ]
  },
  {
    id: 'happie',
    slug: 'happie-cosmetics-enterprise',
    title: 'Happie Cosmetics & Enterprise – FMCG & Beauty Brand Identity & Wholesale Catalogue',
    clientOrProject: 'Happie Cosmetics / Happie Enterprise',
    projectType: 'Client project',
    deliverableType: 'Brand Identity & Design',
    sector: 'Beauty Retail & Wholesale FMCG Distribution',
    summary: 'Vibrant retail perfume campaign posters, wholesale beverage catalogue architecture, and consistent promotional graphics for regional distribution.',
    challenge: 'Happie operates across retail beauty cosmetics and wholesale FMCG distribution. Their existing social content was ad-hoc, with low product legibility and inconsistent pricing announcements across regional WhatsApp groups.',
    approach: 'Designed a high-impact, cohesive visual identity for product launches. Created structured catalogue templates and monthly promotional poster suites that highlight product benefits, ingredients, and bulk wholesale tiers.',
    delivered: [
      'High-resolution promotional poster campaign for retail beauty ranges (Arthur Ford)',
      'Wholesale FMCG product catalogue layout with clear pricing tiers and EcoCash integration',
      'Monthly status and social promotional graphic packages',
      'Branded digital assets formatted for WhatsApp catalog and Instagram'
    ],
    keyDecisions: [
      'Developed a distinctive color-coded system separating retail cosmetics from bulk enterprise commodities',
      'Engineered templates for rapid weekly price updates without sacrificing visual polish'
    ],
    techOrTools: ['Brand Identity & Design', 'Brand System Design', 'Typography', 'Commercial Graphic Design'],
    relatedSolutionSlug: 'brand-visibility',
    badgeAccent: '#DB2777'
  }
];
