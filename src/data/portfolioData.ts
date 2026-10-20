export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'geospatial' | 'security' | 'civic' | 'vision' | 'agentic';
  categoryLabel: string;
  trustTier: 'OBSERVED & MODELLED' | 'PRODUCTION DEFENSE' | 'GOVTECH PROTOTYPE' | 'CV CAPSTONE' | 'RUNTIME GATE';
  metrics: { label: string; value: string }[];
  description: string;
  problemStatement: string;
  keyInnovations: string[];
  techStack: string[];
  liveStatus: 'Active Prototype' | 'Simulated Engine' | 'SIH Finalist' | 'Research Prototype';
  accentColor: string;
  architectureHighlights: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  stars?: number;
  forks?: number;
  updatedAt?: string;
  isLiveGithubRepo?: boolean;
}

export const SOCIAL_LINKS = {
  name: "Harshvardhan Gund",
  githubUsername: "harshvgund1508-create",
  githubUrl: "https://github.com/harshvgund1508-create",
  linkedinUrl: "https://www.linkedin.com/in/harshvardhangund",
  email: "harshvgund1508@gmail.com",
  location: "Maharashtra, India",
};

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'cycloneshield-ai',
    title: 'CycloneShield AI',
    tagline: 'Anticipatory Disaster Intelligence & Compound Hydraulic Simulation',
    category: 'geospatial',
    categoryLabel: 'Disaster & Spatial AI',
    trustTier: 'OBSERVED & MODELLED',
    metrics: [
      { label: 'Spatial Precision', value: '30m DEM' },
      { label: 'Storm Surge Sim', value: '1.0–1.5m' },
      { label: 'Forecast Grounding', value: 'IMD RSMC' },
      { label: 'Map Layers', value: '8 Dynamic' },
    ],
    description:
      'Shifts disaster management from reactive rescue to anticipatory municipal action. Built around historical Severe Cyclonic Storm Michaung (Dec 2023) landfall at Bapatla, synthesizing IMD ground truth, Copernicus 30m DEM, and OpenStreetMap infrastructure.',
    problemStatement:
      'Traditional disaster alerts provide raw meteorology but fail to simulate compound terrain flooding, road severance, or power substation inundation before landfall occurs.',
    keyInnovations: [
      'Sequential 6-stage analytical pipeline converting terrain topography into disruption intelligence',
      '7-step visual hydraulic causality chain mapping compound rainfall-to-road severance mechanisms',
      'Parametric meteorological index triggers automating anticipatory municipal liquidity release',
      'Multi-agency automated advisory generator for NDRF, Hospital CMOs, and Infrastructure Operators',
    ],
    techStack: ['React 19', 'FastAPI', 'Copernicus 30m DEM', 'IMD Bulletins', 'OpenStreetMap', 'Tailwind CSS', 'Vite'],
    liveStatus: 'Active Prototype',
    accentColor: 'from-cyan-500 to-blue-600',
    architectureHighlights: [
      'IMD RSMC Cyclone Track Ingestion',
      'Hydrological Inundation Model on Copernicus 30m Grid',
      'SH-48 & NH-16 Evacuation Route Optimizer',
      'Parametric Insurance Trigger Engine',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/cycloneshield-ai',
    liveDemoUrl: 'https://cycloneshield-ai-five.vercel.app',
    isLiveGithubRepo: true,
  },
  {
    id: 'mahainnovate',
    title: 'MahaInnovate',
    tagline: 'Maharashtra Startup Innovation & Public Procurement Platform',
    category: 'civic',
    categoryLabel: 'GovTech & Civic Innovation',
    trustTier: 'GOVTECH PROTOTYPE',
    metrics: [
      { label: 'SIH Problem Code', value: 'SIH26136' },
      { label: 'Procurement Rule', value: 'GeM 149(viii)' },
      { label: 'Pilot Telemetry', value: '4 Districts' },
      { label: 'Projected ROI', value: '3.2x Scale' },
    ],
    description:
      'Smart India Hackathon prototype enabling Maharashtra Government departments to discover, verify, pilot, procure, and scale innovative solutions from DPIIT-registered startups within statutory procurement frameworks.',
    problemStatement:
      'Public procurement regulations make it nearly impossible for innovative startups to sell to state governments without cumbersome multi-year tenders and lack of structured pilot verification.',
    keyInnovations: [
      'Structured 8-scene innovation pipeline from government problem formulation to multi-district scaling',
      'Objective 6-weighted criteria evaluation matrix scoring startups with explainable AI match scores',
      'Live Pilot Telemetry Hub tracking fuel (-18.2%), collection efficiency (+31.5%), and citizen complaints (-27.1%)',
      'Dynamic multi-district scale calculator estimating deployment costs, citizens impacted, and annual savings',
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'DPIIT Registry Logic', 'GeM Rule Engine', 'Chart.js'],
    liveStatus: 'SIH Finalist',
    accentColor: 'from-amber-500 to-orange-600',
    architectureHighlights: [
      'Statutory Rule 149(viii) Compliance Workflow',
      'Live IoT Sensor Telemetry Aggregator',
      'Multi-District Scaling Financial Modeler',
      'Role-Based Access for Officers & Startups',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/mahainnvate',
    liveDemoUrl: 'https://mahainnvate.vercel.app',
    isLiveGithubRepo: true,
  },
  {
    id: 'digital-fraud-portal',
    title: 'Digital Fraud Awareness & Detection',
    tagline: 'Evidence-Based Real-Time Cyber Threat Classification Engine',
    category: 'security',
    categoryLabel: 'Cybersecurity & Trust',
    trustTier: 'PRODUCTION DEFENSE',
    metrics: [
      { label: 'Risk Scale', value: '0–100 Engine' },
      { label: 'API Integrations', value: 'Safe Browsing v4' },
      { label: 'SSRF Defense', value: 'RFC 1918 Block' },
      { label: 'Threat Categories', value: '5 Classes' },
    ],
    description:
      'Real-time, evidence-based threat detection platform evaluating URLs, SMS, emails, job offers, and certificates against Google Safe Browsing v4, VirusTotal v3, and defensive NLP heuristics.',
    problemStatement:
      'Zero-day phishing lures and private scam messages evade simple blacklists. Users need explainable risk scoring with clear boundary limitations instead of false "Safe" reassurances.',
    keyInnovations: [
      'Core Tenet: "Never tell users a link is safe just because a service returns no threat match"',
      'Hardened SSRF protection blocking private IP ranges (RFC 1918), loopbacks, and cloud metadata endpoints',
      'Defensible 0-100 risk scoring algorithm distinguishing confirmed threats, high indicators, and unverified links',
      'Homoglyph and typosquatting inspection module uncovering spoofed unicode domains',
    ],
    techStack: ['FastAPI', 'Scikit-Learn', 'Python 3.12', 'Google Safe Browsing v4', 'VirusTotal v3', 'React'],
    liveStatus: 'Active Prototype',
    accentColor: 'from-emerald-500 to-teal-600',
    architectureHighlights: [
      'RFC 1918 / Loopback DNS & IP Validator',
      'NLP Scikit-Learn Lure Classifier',
      'ILO Upfront Fee Job Scam Detector',
      'Diploma Mill Registry Cross-Referencing',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/digital-fraud-portal',
    isLiveGithubRepo: true,
  },
  {
    id: 'trustlink-ai',
    title: 'TrustLink AI',
    tagline: 'Explainable AI Phishing Email & URL Detection Platform',
    category: 'security',
    categoryLabel: 'Cybersecurity & Trust',
    trustTier: 'PRODUCTION DEFENSE',
    metrics: [
      { label: 'RF Accuracy', value: '98.0%' },
      { label: 'Security Signals', value: '38 Real-Time' },
      { label: 'Regression R²', value: '0.9949' },
      { label: 'MAE Score', value: '1.99' },
    ],
    description:
      'Full-stack machine learning application that analyzes URLs and emails for phishing indicators, assigns a 0–100 risk score, and explains the verdict using 38 extracted security signals.',
    problemStatement:
      'Blackbox phishing detectors provide binary flags without justification, leading to alert fatigue and user skepticism when legitimate enterprise emails get blocked.',
    keyInnovations: [
      'Triple-action output paradigm: Detection + Explanation + Action (PROCEED / VERIFY / BLOCK)',
      'Dual-model architecture: Random Forest Classifier (98% accuracy) paired with High-Precision Regressor (R² = 0.9949)',
      'Signal importance engine breaking down lexical, domain age, MX record, and behavioral triggers',
    ],
    techStack: ['FastAPI', 'Scikit-Learn', 'Random Forest', 'Gradient Boosting', 'React', 'Vite'],
    liveStatus: 'Active Prototype',
    accentColor: 'from-indigo-500 to-violet-600',
    architectureHighlights: [
      '38-Feature Vector Extractor',
      'Random Forest Inference Pipeline',
      'Confidence Interval Calibration',
      'Actionable Remediation Engine',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/trustlink-ai',
    isLiveGithubRepo: true,
  },
  {
    id: 'roadguard-ai',
    title: 'RoadGuard AI',
    tagline: 'Intelligent Road Damage Assessment & Maintenance Prioritization System',
    category: 'vision',
    categoryLabel: 'Computer Vision & Civil',
    trustTier: 'CV CAPSTONE',
    metrics: [
      { label: 'Model', value: 'YOLOv8 CV' },
      { label: 'Standard', value: 'IRC:82-2023' },
      { label: 'Categories', value: '4 Distress Types' },
      { label: 'Report', value: 'Automated PDF' },
    ],
    description:
      'Level-1 preliminary decision-support screening tool analyzing road surface photographs to classify flexible pavement distresses (Longitudinal, Transverse, Alligator Cracks, and Potholes) aligned with Indian Roads Congress standards.',
    problemStatement:
      'Manual municipal road inspections are hazardous, subjective, and slow, allowing minor surface cracks to deteriorate into severe potholes and structural road failure.',
    keyInnovations: [
      'Dual-mode inference pipeline: Ultralytics YOLOv8 deep learning with graceful classical CV heuristic fallback',
      'Transparent Priority Distress Score (0–100) combining distress type, visible footprint, traffic loading, and pavement type',
      'Georeferenced SQLite spatial persistence for municipal GIS distress clustering',
      'Publication-ready automated PDF inspection reports with photo evidence and IRC:82-2023 maintenance prescriptions',
    ],
    techStack: ['Python 3.10+', 'YOLOv8', 'OpenCV', 'Streamlit', 'SQLite3', 'ReportLab PDF', 'RDD2022 Dataset'],
    liveStatus: 'Active Prototype',
    accentColor: 'from-rose-500 to-pink-600',
    architectureHighlights: [
      'EXIF GPS Coordinate Extraction & CLAHE Contrast',
      'YOLOv8 Bounding Box & Distress Segmentation',
      'IRC:82-2023 Maintenance Calculation Engine',
      'GIS Distress Cluster Map Generator',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/roadguard-ai',
    isLiveGithubRepo: true,
  },
  {
    id: 'mirrorgate-ai',
    title: 'MirrorGate AI',
    tagline: 'Contextual Runtime Policy & Tool Call Gate for Autonomous AI Agents',
    category: 'agentic',
    categoryLabel: 'Agentic Safety & Governance',
    trustTier: 'RUNTIME GATE',
    metrics: [
      { label: 'Attacks Intercepted', value: '12 / 12 (100%)' },
      { label: 'Task Completion', value: '14 / 16 Benign' },
      { label: 'Policy Engine', value: 'Deterministic Code' },
      { label: 'Audit Log', value: 'SQLite / SHA-256' },
    ],
    description:
      'Built by Team Vighnaharta. A runtime policy gate that intercepts sensitive AI tool calls before execution, enforcing task boundaries, instruction origin verification, and immutable destination constraints without relying on LLM self-policing.',
    problemStatement:
      'Autonomous LLM agents are vulnerable to indirect prompt injections, tool misuse, and data exfiltration when guardrails rely merely on system prompt instructions.',
    keyInnovations: [
      'Zero-trust agentic runtime: Every sensitive action must earn permission in context',
      'Deterministic policy enforcement using pure standard library Python, eliminating LLM prompt jailbreaks',
      'Immutable audit trail recording task hash, instruction provenance, and policy evaluation verdicts',
    ],
    techStack: ['Python Standard Library', 'SQLite3', 'Policy Guardrails', 'Benchmarking Framework'],
    liveStatus: 'Research Prototype',
    accentColor: 'from-purple-500 to-indigo-600',
    architectureHighlights: [
      'Agent Tool Interception Proxy',
      'Task Context & Provenance Verifier',
      'Data Destination Egress Enforcer',
      'Benchmarked Against 30 Adversarial Cases',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/mirrorgate-ai',
    isLiveGithubRepo: true,
  },
  {
    id: 'confident-ai',
    title: 'ConfidentAI',
    tagline: 'Acoustic Speech & NLP Communication Diagnostic Coach',
    category: 'vision',
    categoryLabel: 'Vision & Speech AI',
    trustTier: 'OBSERVED & MODELLED',
    metrics: [
      { label: 'Regression R²', value: '0.975' },
      { label: 'Classification Acc', value: '92.4%' },
      { label: 'Audio Latency', value: '<250ms' },
      { label: 'Drill Gym', value: 'Live Micro-Drills' },
    ],
    description:
      'Full-stack ML application estimating communication confidence from acoustic speech metrics (WPM, pitch consistency, pause intervals) and NLP linguistic clarity, providing real-time personalized improvement drills.',
    problemStatement:
      'Students and professionals struggle with communication anxiety and presentation fluency without objective, privacy-safe feedback before high-stakes evaluations.',
    keyInnovations: [
      'In-memory acoustic analysis extracting speech tempo and pause duration without retaining permanent voice recordings',
      'NLP filler-word and linguistic clarity analyzer identifying hesitation patterns',
      'Interactive confidence exercise gym with live countdown timers and progressive improvement metrics (+20 pts)',
    ],
    techStack: ['FastAPI', 'Scikit-Learn', 'Librosa', 'Web Audio API', 'React 19', 'Vite'],
    liveStatus: 'Active Prototype',
    accentColor: 'from-blue-500 to-cyan-500',
    architectureHighlights: [
      'Web Audio Stream Feature Ingestion',
      'Dual Regression/Classification ML Ensemble',
      'Explainable Positive & Negative Signal Breakdown',
      'Interactive Micro-Challenge Player',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/confident-ai',
    liveDemoUrl: 'https://confident-ai-three.vercel.app',
    isLiveGithubRepo: true,
  },
  {
    id: 'ai-operations-autopilot',
    title: 'AI Operations Autopilot',
    tagline: 'Autonomous Enterprise Workflow & Incident Resolution Agent',
    category: 'agentic',
    categoryLabel: 'Agentic Safety & Governance',
    trustTier: 'PRODUCTION DEFENSE',
    metrics: [
      { label: 'Execution', value: 'Agentic Loop' },
      { label: 'Deployment', value: 'Vercel / Cloud' },
      { label: 'Stack', value: 'TypeScript / React' },
      { label: 'Audit', value: 'Structured Logs' },
    ],
    description:
      'Enterprise operations autopilot that coordinates autonomous diagnostic workflows, automated runbook execution, and incident mitigation with human-in-the-loop controls.',
    problemStatement:
      'Complex distributed systems require tedious manual incident triage, slowing mean time to resolution (MTTR).',
    keyInnovations: [
      'Autonomous diagnostic planning agent with safety checkpoints',
      'Interactive operations control room with real-time status telemetry',
      'Role-governed tool execution minimizing operational drift',
    ],
    techStack: ['TypeScript', 'Next.js', 'FastAPI', 'Vercel', 'Tailwind CSS'],
    liveStatus: 'Active Prototype',
    accentColor: 'from-indigo-600 to-cyan-600',
    architectureHighlights: [
      'Autonomous Runbook Planner',
      'Telemetry Stream Ingestion',
      'Incident Triage Pipeline',
    ],
    githubUrl: 'https://github.com/harshvgund1508-create/ai-operations-autopilot',
    liveDemoUrl: 'https://ai-operations-autopilot.vercel.app',
    isLiveGithubRepo: true,
  },
];

export const SKILL_CATEGORIES = [
  {
    name: 'AI, Machine Learning & Computer Vision',
    icon: 'Brain',
    skills: [
      'PyTorch & YOLOv8',
      'Scikit-Learn (Ensembles & XAI)',
      'Explainable AI (Feature Attribution)',
      'Computer Vision (OpenCV, CLAHE)',
      'Audio & Acoustic Analysis (Librosa)',
      'Natural Language Processing (NLP)',
      'Model Evaluation & Calibration (R², MAE, ROC)',
      'Adversarial Agent Evaluation',
    ],
  },
  {
    name: 'Full-Stack & Systems Engineering',
    icon: 'Code2',
    skills: [
      'FastAPI & Pydantic V2',
      'Next.js 16 (App Router & Turbopack)',
      'React 19 & TypeScript',
      'REST API Design & Validation',
      'Tailwind CSS & Glassmorphic UI',
      'Streamlit Applications',
      'State Management & Optimistic UI',
      'Python 3.10–3.14 Standard Lib',
    ],
  },
  {
    name: 'Geospatial, Data & Backend Storage',
    icon: 'Globe',
    skills: [
      'Copernicus 30m Global DEM Topography',
      'OpenStreetMap (OSM) Infrastructure',
      'SQLite3 & Schema Architecture',
      'PostgreSQL & Vector Prep',
      'BigQuery & Data Ingestion',
      'Parametric Insurance Trigger Models',
      'Pandas & NumPy Computation',
      'GIS Coordinate Reference Systems (CRS)',
    ],
  },
  {
    name: 'Security, Guardrails & GovTech',
    icon: 'Shield',
    skills: [
      'SSRF Protection (RFC 1918 / Loopback Hardening)',
      'Google Safe Browsing v4 & VirusTotal v3',
      'Autonomous Agent Tool-Call Guardrails',
      'Smart India Hackathon (SIH26136 Prototype)',
      'GeM Rule 149(viii) Statutory Workflows',
      'DPIIT Verification Pipelines',
      'Immutable Audit Logging (SHA-256)',
      'Indian Roads Congress (IRC:82-2023)',
    ],
  },
];

export const SIMULATED_SYSTEM_LOGS = {
  cycloneshield: [
    { time: '10:42:01', level: 'IMD-RSMC', msg: 'Severe Cyclonic Storm MICHAUNG track: 15.2°N, 80.3°E heading NNW' },
    { time: '10:42:04', level: 'COPERNICUS-30m', msg: 'Topography mesh loaded: Bapatla coastal elevation 1.2m–3.8m MSL' },
    { time: '10:42:07', level: 'MODEL', msg: 'Storm surge inundation projected: 1.25m penetration into Karlapalem basin' },
    { time: '10:42:11', level: 'INFRA', msg: 'State Highway SH-48 marked for compound hydraulic severance at Ch. 14+200' },
    { time: '10:42:15', level: 'TRIGGER', msg: 'Parametric Index Met: Rainfall >200mm/24h + Surge >1m → Municipal Liquidity Directive issued' },
  ],
  trustlink: [
    { time: '11:15:22', level: 'INGEST', msg: 'Analyzing target URI: https://secure-login.paypaI-verify-auth.cc/portal' },
    { time: '11:15:23', level: 'HEURISTIC', msg: 'Extracted 38 lexical & DNS signals: Typosquatting detected (Unicode homoglyph "I")' },
    { time: '11:15:24', level: 'RF-MODEL', msg: 'Random Forest Inference: Phishing Confidence 98.7% (High Risk)' },
    { time: '11:15:25', level: 'EXPLAIN', msg: 'Top contributing signals: [Homoglyph: +34%, Domain Age <3d: +28%, MX Mismatch: +18%]' },
    { time: '11:15:26', level: 'ACTION', msg: 'Prescription: BLOCK immediate traffic and submit domain to defensive registry' },
  ],
  mahainnovate: [
    { time: '09:00:10', level: 'SIH26136', msg: 'State Innovation Portal: Challenge #UDD-2024-04 published by Urban Development Dept' },
    { time: '09:00:15', level: 'AI-MATCH', msg: 'Scored 14 eligible startups: CleanRoute Tech matched at 94.2% suitability' },
    { time: '09:00:20', level: 'PILOT-HUB', msg: 'Pune Municipal Corp Pilot Day 65: Fuel down -18.2%, Efficiency up +31.5%' },
    { time: '09:00:28', level: 'PROCURE', msg: 'Direct GeM Rule 149(viii) evaluation qualified: Contract readiness ₹42,00,000' },
    { time: '09:00:32', level: 'SCALE', msg: 'Multi-district simulation computed: 4 Districts, ₹2.1 Cr deployment, 2.4M beneficiaries' },
  ],
  mirrorgate: [
    { time: '14:20:00', level: 'AGENT-INT', msg: 'Autonomous agent requested tool invocation: "execute_wire_transfer"' },
    { time: '14:20:01', level: 'PROVENANCE', msg: 'Checking instruction origin: Triggered by unauthenticated webhook body' },
    { time: '14:20:02', level: 'POLICY', msg: 'Rule #04 triggered: Financial egress requires human dual-key authorization' },
    { time: '14:20:03', level: 'INTERCEPT', msg: 'Tool call BLOCKED deterministically. Zero LLM prompt bypass permitted.' },
    { time: '14:20:04', level: 'AUDIT', msg: 'Incident SHA-256 hash appended to immutable SQLite policy journal' },
  ],
};
