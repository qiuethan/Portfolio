export interface Experience {
  id: string;
  title: string;
  company: string;
  shortCompany?: string;
  team?: string;
  period: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
  featured: boolean;
  logo?: string;
}

export const experience: Experience[] = [
  {
    "title": "Software Engineer Intern",
    "company": "Shopify",
    "team": "Products & Pricing",
    "period": "Apr 2026 - Present",
    "responsibilities": [
      "Owned the Managed Markets publishing experience in React and GraphQL, rolling it out to 20,000+ stores and surfacing sellability status and restrictions across 190+ countries.",
      "Prototyped and benchmarked the Product Details redesign planned for 140,000+ stores, turning open design questions into working previews and owning core product information through build.",
      "Removed stale feature flags and legacy code across admin web, mobile, checkout, and core while preserving frozen API compatibility."
    ],
    "tech": [
      "React",
      "TypeScript",
      "GraphQL",
      "Ruby on Rails"
    ],
    "id": "shopify",
    "featured": true,
    "summary": "Owned Managed Markets publishing for 20,000+ stores, then prototyped and benchmarked the Product Details redesign.",
    "logo": "/img/logos/shopify.png"
  },
  {
    "id": "utmist-vp",
    "title": "VP Infrastructure",
    "company": "University of Toronto Machine Intelligence Student Team (UTMIST)",
    "shortCompany": "UTMIST",
    "period": "Jul 2026 - Present",
    "featured": true,
    "logo": "/img/logos/utmist.svg",
    "summary": "Building the systems that keep UTMIST running: internal tools, meeting intelligence, and a codebase the next team can inherit.",
    "responsibilities": [
      "Built Misty, UTMIST’s internal operations platform, bringing team records, document ownership, member verification, and AI assistance into Discord.",
      "Developed live meeting transcription and AI-generated minutes with Amazon Transcribe and Bedrock, preserving speaker attribution and recovering transcripts when voice connections drop.",
      "Reorganized the website and operations platform around ownership boundaries, CI checks, and contributor onboarding to support yearly team handoffs."
    ],
    "tech": [
      "Python",
      "FastAPI",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Railway",
      "Technical Leadership"
    ]
  },
  {
    "title": "Software Engineer (Co-op)",
    "company": "General Dynamics Mission Systems–Canada",
    "period": "May 2025 - Aug 2025",
    "responsibilities": [
      "Spearheaded a modular Python automation framework, reducing regression runtime by 50%",
      "Delivered internal Java and Python tooling adopted by 3 engineering teams, eliminating 8 manual test steps",
      "Drove improvements to test coverage and reliability across 15 production PRs"
    ],
    "tech": [
      "Java",
      "Python",
      "Maven",
      "PowerShell",
      "GitLab",
      "CI/CD"
    ],
    "id": "general-dynamics",
    "featured": true,
    "summary": "Built Python regression automation that cut runtime in half, plus tooling adopted by three engineering teams.",
    "logo": "/img/logos/gdms.png",
    "shortCompany": "General Dynamics Mission Systems"
  },
  {
    "title": "Engineering Director - Industry Collaborations",
    "company": "University of Toronto Machine Intelligence Student Team (UTMIST)",
    "period": "May 2025 - Apr 2026",
    "responsibilities": [
      "Led development across 4 industry projects, coordinating 20+ developers with weekly sprint cycles",
      "Developed an agentic credit card recommendation system using LangChain and vector databases for Flybits",
      "Co-developed PyTorch and XGBoost models powering pricing decisions for Amicare's home care platform"
    ],
    "tech": [
      "Machine Learning",
      "LangChain",
      "PyTorch",
      "XGBoost",
      "Project Management",
      "Team Leadership",
      "Python"
    ],
    "id": "utmist-director",
    "featured": true,
    "summary": "Led four industry projects and 20+ developers, including work with Flybits and Amicare.",
    "shortCompany": "UTMIST",
    "logo": "/img/logos/utmist.svg"
  },
  {
    "title": "Machine Learning Engineer",
    "company": "University of Toronto Machine Intelligence Student Team (UTMIST)",
    "period": "Previously",
    "responsibilities": [
      "Contributed to machine-learning projects with UTMIST’s industry collaboration teams."
    ],
    "tech": [
      "Python",
      "PyTorch",
      "Machine Learning"
    ],
    "id": "utmist-ml",
    "featured": false,
    "summary": "Machine-learning work with UTMIST’s industry collaboration teams.",
    "shortCompany": "UTMIST",
    "logo": "/img/logos/utmist.svg"
  },
  {
    "title": "Software Developer - Infrastructure",
    "company": "University of Toronto Machine Intelligence Student Team (UTMIST)",
    "period": "May 2025 - Apr 2026",
    "responsibilities": [
      "Built Supabase authentication and protected member flows, including email verification, session management, and tested signup/login flows.",
      "Added shared authorization guards across recruitment pages and APIs.",
      "Established CI quality gates and per-PR Vercel previews, then organized features around enforced import boundaries."
    ],
    "tech": [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Payload CMS",
      "GitHub Actions",
      "Vercel"
    ],
    "id": "utmist-infrastructure",
    "featured": true,
    "summary": "Authentication, recruitment access control, and the delivery workflows behind UTMIST’s Next.js website.",
    "shortCompany": "UTMIST",
    "logo": "/img/logos/utmist.svg"
  },
  {
    "title": "Project Lead",
    "company": "UofT Blueprint",
    "period": "May 2025 - Apr 2026",
    "responsibilities": [
      "Led development of MADE’s collection-management platform, defining the architecture and delivery plan for public browsing, inventory tracking, volunteer access, and movement approvals.",
      "Built the Django data model and backend foundation for collection items, storage locations, volunteer accounts, and approval workflows.",
      "Established frontend and backend checks with GitHub Actions, Vitest, and pytest, and reviewed delivery across inventory, authentication, and admin workflows."
    ],
    "tech": [
      "React",
      "TypeScript",
      "Django REST Framework",
      "pytest",
      "Vitest",
      "GitHub Actions"
    ],
    "id": "blueprint",
    "featured": true,
    "summary": "Led the architecture and delivery of a collection-management platform for the Museum of Art and Digital Entertainment.",
    "logo": "/img/logos/blueprint.png"
  },
  {
    "title": "Problem Writer",
    "company": "United Coding Tournament",
    "period": "May 2022 - May 2024",
    "responsibilities": [
      "Created 15+ competitive programming problems for 150+ contestants",
      "Designed algorithmic challenges covering data structures, dynamic programming, and graph theory",
      "Collaborated with tournament organizers to ensure problem quality and difficulty balance"
    ],
    "tech": [
      "Java",
      "Python",
      "Algorithm Design",
      "Problem Solving"
    ],
    "id": "uct",
    "featured": false,
    "summary": "Created 15+ competitive programming problems for 150+ contestants"
  },
  {
    "title": "Python and Java Instructor",
    "company": "Ottawa Jay Learning Centre",
    "period": "Sep 2020 - Sep 2023",
    "responsibilities": [
      "Designed and taught Python and Java courses for 30+ students.",
      "Adapted lessons to student feedback and built exercises covering fundamentals, object-oriented programming, and practical applications."
    ],
    "tech": [
      "Python",
      "Java",
      "Curriculum Development",
      "Teaching"
    ],
    "id": "jay-learning",
    "featured": false,
    "summary": "Designed and delivered comprehensive Python and Java courses for 30+ students"
  },
  {
    "id": "auxilium",
    "title": "Coding Circle Instructor",
    "company": "Auxilium",
    "period": "Oct 2022 - May 2024",
    "featured": false,
    "summary": "Weekly Python classes for middle and high school students.",
    "responsibilities": [
      "Taught free weekly Python classes for middle and high school students."
    ],
    "tech": [
      "Python",
      "Teaching"
    ]
  }
];
