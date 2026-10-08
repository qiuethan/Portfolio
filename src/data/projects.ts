export interface ProjectVisual {
  mark: string;
  steps: [string, string, string];
  tone: 'blue' | 'green' | 'amber';
}

export type WorkItem = Project & { question?: string };

export interface Project {
  id: string;
  name: string;
  description: string;
  details: string;
  tech: string[];
  github?: string;
  live?: string;
  linkLabel?: string;
  award: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  visual?: ProjectVisual;
}

export const projects: Project[] = [
  {
    "id": "misty",
    "name": "Misty",
    "description": "An operations platform that helps UTMIST’s knowledge survive the next leadership handoff.",
    "details": "Team records, document ownership, member verification, and AI assistance in Discord. I built the service architecture and meeting pipeline, including recovery when voice connections drop.",
    "tech": [
      "Python",
      "FastAPI",
      "Discord.js",
      "PostgreSQL",
      "Amazon Transcribe",
      "AWS Bedrock",
      "Railway"
    ],
    "github": "https://github.com/UTMIST/Misty",
    "award": "UTMIST · Internal tools",
    "highlights": [
      "Architected six FastAPI services with shared authentication and service-owned storage for directory, catalog, and verification data.",
      "Built speaker-attributed meeting transcription and AI-generated minutes, with recovery for disconnected voice sessions.",
      "Implemented member verification and catalog permissions that filter document reads as the requesting user."
    ],
    "image": "/img/projects/misty.png",
    "imageAlt": "UTMIST robot logo used by Misty",
    "imageFit": "contain"
  },
  {
    "id": "cybermetrics",
    "name": "Cybermetrics",
    "description": "Baseball lineup analysis, with recommendations built around the weaknesses of the team you actually have.",
    "details": "A team project built with React, FastAPI, and Firebase. My work covered application architecture, roster flows, caching, and tests. The recommendation path reuses player data instead of repeatedly querying Firestore.",
    "tech": [
      "React",
      "TypeScript",
      "FastAPI",
      "Firebase",
      "pytest",
      "Vitest"
    ],
    "github": "https://github.com/TeamCybermetrics/Cybermetrics",
    "award": "Engineering · Analytics",
    "highlights": [
      "Reworked player caching to reduce repeated Firestore reads during recommendation generation.",
      "Added shared cache initialization and clearer boundaries between API data and domain models.",
      "Expanded backend coverage and added frontend tests for authentication and player actions."
    ],
    "image": "/img/projects/cybermetrics.png",
    "imageAlt": "Cybermetrics roster constructor with player statistics and recommendations",
    "imageFit": "cover",
    "imagePosition": "left top"
  },
  {
    "id": "canopy",
    "name": "Canopy",
    "description": "Turn a pile of papers into a course you can actually work through.",
    "details": "Canopy turns source material into lessons, practice, and coding labs. I worked on the source-to-course foundation, mastery scoring, practice pools, and course sharing with a team at OpenAI Build Week.",
    "tech": [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "pgvector",
      "Docker"
    ],
    "github": "https://github.com/JavRedstone/canopy",
    "award": "Education Finalist · OpenAI Build Week 2026",
    "highlights": [
      "Implemented separate mastery tracking for understanding concepts and applying them.",
      "Built practice question pools and prerequisite review prompts that respond to learner difficulty.",
      "Added course sharing and a PDF coursebook export with citations."
    ],
    "live": "https://devpost.com/software/canopy-m01bog",
    "linkLabel": "Read writeup",
    "image": "/img/projects/canopy.png",
    "imageAlt": "Canopy coursebook and lessons for Attention Is All You Need",
    "imageFit": "cover",
    "imagePosition": "center 20%"
  },
  {
    "id": "chatgpu",
    "name": "ChatGPU",
    "description": "Give available machines a job: run Python projects across CPU, CUDA, and Apple MPS workers.",
    "details": "A worker-based runtime for uploaded Python and PyTorch projects. I built orchestration and agent supervision around planning, validation, execution history, and recovery. The current runtime assigns each program to one worker.",
    "tech": [
      "Python",
      "PyTorch",
      "Agent Orchestration",
      "CUDA",
      "Apple MPS",
      "Sentry"
    ],
    "github": "https://github.com/ji24077/HTN",
    "award": "Best Use of Sentry · Hack the North 2026",
    "highlights": [
      "Built the orchestration layer that turns uploaded projects into planned and validated jobs.",
      "Implemented durable agent supervision, worker recovery, and execution history.",
      "Added Sentry diagnostics, bounded tool actions, and per-run usage caps."
    ],
    "live": "https://devpost.com/software/ji-review",
    "linkLabel": "Read writeup",
    "image": "/img/projects/chatgpu.png",
    "imageAlt": "ChatGPU jobs dashboard showing worker connection tests",
    "imageFit": "cover",
    "imagePosition": "left top"
  },
  {
    "name": "Identity Matrix",
    "description": "A multiplayer world where your avatar keeps living as an AI agent after you log off.",
    "tech": [
      "React",
      "TypeScript",
      "Phaser 3",
      "Node.js",
      "FastAPI",
      "Python",
      "Supabase",
      "WebSockets",
      "Grok",
      "Gemini"
    ],
    "github": "https://github.com/qiuethan/Identity-Matrix",
    "live": "https://devpost.com/software/temp-sqyptg",
    "details": "Built with a four-person team at UofTHacks 13. Players hand their avatars over to persistent AI agents, and a spectator view makes the ongoing simulation visible. Won 1st Place Overall and Best UofT Hack.",
    "id": "identity-matrix",
    "award": "1st Overall + Best UofT Hack · UofTHacks 13",
    "image": "/img/projects/identity-matrix.png",
    "linkLabel": "Read writeup",
    "highlights": [
      "Built the real-time world and persistence layer for human-to-AI avatar handoff.",
      "Implemented multi-agent pathfinding and reservation-based movement through shared spaces.",
      "Added spectator tools for observing the simulation."
    ]
  },
  {
    "id": "frame",
    "name": "Frame",
    "description": "A photography coach that helps with the shot while you’re still holding the camera.",
    "details": "A four-person GenAI Genesis 2026 project combining camera feedback, image scoring, and photo challenges. I built the camera and scoring pipeline, with React Native capture and Python/PyTorch analysis.",
    "tech": [
      "React Native",
      "TypeScript",
      "Python",
      "PyTorch",
      "Supabase"
    ],
    "github": "https://github.com/qiuethan/GenAI-Genesis-Project",
    "award": "GenAI Genesis 2026",
    "highlights": [
      "Added live blur, exposure, and motion coaching.",
      "Built aesthetics and composition scoring with serialized GPU inference.",
      "Integrated gallery scoring and Supabase-backed photo challenges."
    ],
    "live": "https://devpost.com/software/framed-41c5lm",
    "linkLabel": "Read writeup",
    "image": "/img/projects/frame.png",
    "imageAlt": "Frame mobile app showing a Horizon Lines photography challenge",
    "imageFit": "cover",
    "imagePosition": "center 10%"
  },
  {
    "name": "Heimer Academy",
    "description": "League of Legends coaching that starts with how you already play.",
    "tech": [
      "Python",
      "React",
      "TypeScript",
      "FastAPI",
      "AWS",
      "Amazon Bedrock",
      "SageMaker",
      "PostgreSQL",
      "Supabase",
      "Riot API"
    ],
    "github": "https://github.com/qiuethan/Heimer-Academy",
    "live": "https://devpost.com/software/idk-evraiq",
    "details": "A Riot Games × AWS Rift Rewind project that turns match history into champion recommendations and personalized coaching. Built the application backend and AI coaching workflow with a four-person team; won 1st Place Overall.",
    "id": "heimer-academy",
    "award": "1st Overall · AWS Rift Rewind",
    "image": "/img/projects/heimer-academy.png",
    "linkLabel": "Read writeup",
    "highlights": [
      "Connected Riot match data to personalized champion recommendations and performance feedback.",
      "Added rate-limited ingestion, cached match history, and background synchronization.",
      "Let players start with their latest games while the rest of their history loaded."
    ]
  },
  {
    "name": "Orbit",
    "description": "Face recognition, profile context, and conversation history to help you pick up where you left off.",
    "tech": [
      "React",
      "Python",
      "FastAPI",
      "OpenCV",
      "Groq",
      "Whisper",
      "Cerebras"
    ],
    "github": "https://github.com/qiuethan/orbit",
    "live": "https://devpost.com/software/orbit-59jths",
    "details": "A social-context prototype combining computer vision, profile research, and recorded-conversation analysis. Built with a four-person team and won the Groq and Windsurf prizes at Hack the North 2025.",
    "id": "orbit",
    "award": "Groq + Windsurf prizes · Hack the North 2025",
    "image": "/img/projects/orbit.png",
    "linkLabel": "Read writeup",
    "highlights": [
      "Built the profile research and conversation pipeline with persistent conversation history.",
      "Integrated threaded audio recording, Groq Whisper transcription, and Cerebras-powered summaries into FastAPI."
    ]
  },
  {
    "name": "Polaris",
    "description": "A two-player fitness game where your body is the controller.",
    "tech": [
      "React",
      "Three.js",
      "FastAPI",
      "WebSockets",
      "Python",
      "MediaPipe",
      "OpenCV",
      "JavaScript"
    ],
    "github": "https://github.com/qiuethan/Polaris",
    "live": "https://devpost.com/software/polaris-vlp1wm",
    "details": "Polaris maps running, jumping, and crouching onto a multiplayer game. I built the computer-vision controls and integration; James Han built the game graphics and art. Won Best Game Hack at Hack the 6ix 2025.",
    "id": "polaris",
    "award": "Best Game Hack · Hack the 6ix 2025",
    "image": "/img/projects/polaris.png",
    "linkLabel": "Read writeup",
    "highlights": [
      "Built a single-camera, two-player pose controller using joint angles and motion patterns.",
      "Connected pose classification to the game over WebSockets and tracked movement for each player."
    ]
  },
  {
    "name": "RT1M",
    "description": "A financial dashboard you can update by talking through your plans.",
    "tech": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Firebase",
      "OpenAI API",
      "LangChain",
      "Vite",
      "Vercel"
    ],
    "github": "https://github.com/qiuethan/RT1M",
    "live": "https://rt1m.ethanqiu.ca",
    "details": "RT1M brings assets, debts, income, expenses, and goals into one dashboard. Its conversational assistant extracts structured updates and saves them with Firebase.",
    "id": "rt1m",
    "award": "Personal project · Financial planning",
    "image": "/img/projects/rt1m.png",
    "linkLabel": "Visit site",
    "highlights": [
      "Built a React dashboard for net worth, financial records, and goal milestones.",
      "Routed conversations between general, context-aware, and planning assistants.",
      "Turned structured assistant responses into updates to financial records and goals."
    ]
  },
  {
    "name": "Shop Buddy",
    "description": "Turn a problem into a step-by-step solution, with the products to get it done.",
    "tech": [
      "React",
      "Node.js",
      "TypeScript",
      "Vite",
      "Express.js",
      "OpenAI API",
      "SerpAPI"
    ],
    "github": "https://github.com/qiuethan/Shop-Buddy",
    "live": "https://shop-buddy.ethanqiu.ca",
    "details": "A text-based shopping assistant that connects OpenAI solution generation to SerpAPI product search. Results can be narrowed by budget, location, and store.",
    "id": "shop-buddy",
    "award": "Personal project · Shopping assistant",
    "image": "/img/projects/shop-buddy.png",
    "linkLabel": "Visit site",
    "highlights": [
      "Built a React interface for solutions and categorized product recommendations.",
      "Connected generation and product search through an Express API with rate limiting."
    ]
  },
  {
    "name": "Bounce Back",
    "description": "Journaling, mood tracking, and small activity goals for the hard stretches.",
    "tech": [
      "React Native",
      "Firebase",
      "Python",
      "PyTorch",
      "BERT",
      "Mistral",
      "Docker"
    ],
    "github": "https://github.com/qiuethan/Bounce-Back-Public",
    "details": "A React Native wellness companion with Firebase persistence and Mistral chat. Journal entries connect to a PyTorch/BERT analysis service for mood and emotion signals.",
    "id": "bounce-back",
    "award": "Personal project · Wellness",
    "image": "/img/projects/bounce-back.png",
    "highlights": [
      "Built journaling, activity goals, mood visualization, and map-based avoidance zones.",
      "Connected written entries to a model API and stored their analysis with Firebase."
    ]
  },
  {
    "name": "Hyacinthe",
    "description": "An indoor navigation prototype that reads the signs around you.",
    "tech": [
      "Python",
      "YOLO11",
      "OpenCV",
      "OCR",
      "Speech Recognition"
    ],
    "github": "https://github.com/haenlonns/hyacinthe",
    "live": "https://devpost.com/software/hyacinthe",
    "details": "A computer-vision navigation prototype for visually impaired users, combining sign detection, OCR, and spoken guidance. Won 1st Place Overall and Best Non-AI Wrapper Hack at GeeseHacks 2025.",
    "id": "hyacinthe",
    "award": "1st Overall + Best Non-AI Wrapper · GeeseHacks 2025",
    "image": "/img/projects/hyacinthe.png",
    "linkLabel": "Read writeup",
    "highlights": [
      "Trained a YOLO11 signage detector and built the vision pipeline.",
      "Connected sign detection and OCR with speech input and spoken directions through concurrent workers."
    ]
  },
  {
    "name": "UTMIST Website",
    "description": "The club’s front door for events, recruitment, publishing, and member access.",
    "tech": [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Payload CMS",
      "Vercel",
      "GitHub Actions"
    ],
    "github": "https://github.com/UTMIST/UTMIST",
    "live": "https://www.utmist.ca/",
    "details": "UTMIST’s Next.js website, built with Supabase and Payload CMS. Recent work includes feature-flagged EigenAI pages and mobile UI fixes, plus repository structure and review plumbing for zones, areas, and CODEOWNERS. Older work established auth, recruitment access control, and CI gates that make changes easier to review and release.",
    "id": "utmist",
    "award": "UTMIST · Web infrastructure",
    "image": "/img/projects/utmist.png",
    "linkLabel": "Visit site",
    "highlights": [
      "Added EigenAI metadata and mobile UI fixes.",
      "Restored the production rollback path behind feature flags.",
      "Split issue areas from PR zones and repaired CODEOWNERS review routing.",
      "Moved shared platform and UI code behind stable barrels.",
      "Added onboarding docs and CI checks for contributors.",
      "Fixed Maps and Supabase env fallbacks so builds pass."
    ]
  },
  {
    "name": "Hart House Debate Automation",
    "description": "Less spreadsheet wrangling. More time to actually run the tournament.",
    "tech": [
      "Python",
      "Google Sheets API",
      "Google Drive API",
      "Google Cloud Vision",
      "Tabbycat API"
    ],
    "github": "https://github.com/qiuethan/Hart-House-Debate-Automation",
    "details": "Python tooling for Hart House debate tournament administration. It processes registration and payment records from Google Sheets and Drive, then registers institutions, teams, and speakers in Tabbycat.",
    "id": "hart-house",
    "award": "Hart House · Tournament operations",
    "image": "/img/projects/hart-house.png",
    "highlights": [
      "Added OCR and PDF extraction for payment proofs, with manual review when a check needs a person.",
      "Organized debater and accessibility records and synced registration data to Tabbycat.",
      "Supported tournament-specific configuration and duplicate-team checks."
    ]
  },
  {
    "name": "Crosswalk of Shame",
    "description": "A computer-vision prototype that spots phone use at the crosswalk.",
    "tech": [
      "Python",
      "YOLOv8",
      "OpenCV",
      "React",
      "Convex"
    ],
    "github": "https://github.com/emlyqi/crosswalkofshame",
    "live": "https://devpost.com/software/crosswalk-of-shame",
    "details": "A Hack the North 2024 project connecting webcam detection to a dashboard of crossing activity and incidents.",
    "id": "crosswalk",
    "award": "Hack the North 2024",
    "image": "/img/projects/crosswalk.png",
    "linkLabel": "Read writeup",
    "highlights": [
      "Trained YOLOv8 models and built webcam tracking for detecting phone use during crossings.",
      "Integrated the vision prototype with a React and Convex dashboard."
    ]
  },
  {
    "name": "GameStoppr",
    "description": "A desktop and web prototype that rewards time away from the games eating your day.",
    "tech": [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "Ethereum"
    ],
    "github": "https://github.com/NamanBiyani06/gamestoppr",
    "live": "https://devpost.com/software/gamestoppr",
    "details": "Built at Hack the North 2023. GameStoppr connects desktop app blocking to a React dashboard and prototype token rewards.",
    "id": "gamestoppr",
    "award": "Hack the North 2023",
    "image": "/img/projects/gamestoppr.png",
    "linkLabel": "Read writeup",
    "highlights": [
      "Built Django authentication and device registration for the desktop and web clients.",
      "Integrated local Ethereum token rewards for time away from blocked games."
    ]
  },
  {
    "id": "mist",
    "name": "Mist",
    "description": "A first step toward making shared GPU compute easier to use.",
    "details": "An in-progress UTMIST compute project. My prototype is a Go and Redis job runner for a bounded local NVIDIA benchmark, with a web interface for results.",
    "tech": [
      "Go",
      "Redis",
      "PyTorch",
      "Docker",
      "NVIDIA"
    ],
    "github": "https://github.com/UTMIST/Mist",
    "award": "In progress · GPU compute",
    "highlights": [
      "Added hardware detection, job handling, timing, and numerical result verification.",
      "Bounded benchmark inputs and runtime, with a container-based runner."
    ],
    "image": "/img/projects/mist.png",
    "imageAlt": "GitHub repository preview for UTMIST/Mist, UTMIST’s Compute Platform",
    "imageFit": "contain"
  }
];
