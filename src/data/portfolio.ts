export const portfolioData = {
  about: {
    name: "Ethan Qiu",
    role: "Software Engineer",
    location: "Toronto/Ottawa",
    university: "University of Toronto",
    bio: `Software Engineer building AI-powered solutions and leading technical teams. Currently Engineering Director at UTMIST (1,000+ members) and Project Lead at UofT Blueprint. Previously at General Dynamics Mission Systems - Canada.

Turning ideas into production-ready systems. Always shipping.`
  },
  projects: [
    {
      name: "🆔 Identity Matrix",
      description: "Persistent multiplayer world where avatars become independent AI agents",
      tech: ["React", "TypeScript", "Phaser 3", "Node.js", "FastAPI", "Python", "Supabase", "WebSockets", "Grok", "Gemini"],
      github: "https://github.com/qiuethan/UofTHacks-Project",
      live: "https://devpost.com/software/temp-sqyptg",
      details: "🏆 Winner @ UofT Hacks 2026: A persistent multiplayer world where avatars become independent AI agents after you log off. Identity Matrix is a real-time multiplayer simulation where a user's avatar transforms into a stateful AI agent that continues to exist and interact in the virtual world even after the user logs off. The AI learns the user's personality, interests, and communication style, navigating the world, managing basic needs, and proactively seeking interactions. Features a continual learning loop, a hand-made real-time multiplayer world, and a spectator mode."
    },
    {
      name: "🎮 Heimer Academy",
      description: "AI-powered coaching that recommends champions based on your playstyle",
      tech: ["Python", "React", "TypeScript", "FastAPI", "Amazon Bedrock", "SageMaker", "Supabase", "Riot API"],
      github: "https://github.com/qiuethan/Rift-Rewind-Project",
      live: "https://devpost.com/software/idk-evraiq",
      details: "🏆 1st Place @ Rift Rewind Hackathon: AI-powered coaching that recommends champions based on your playstyle and mastery. Heimer provides personalized coaching by recommending new champions based on your playstyle using mastery data and teaching abilities by comparing them to champions you already know. Uses Amazon Bedrock and Riot API to deliver tailored insights."
    },
    {
      name: "🌌 Orbit - Real-Time Social Intelligence Platform",
      description: "Real-time social intelligence platform that integrates computer vision, Whisper transcription, and LLMs to deliver instant recognition, live transcription, and context-aware follow-ups",
      tech: ["Python", "Computer Vision", "Whisper", "LLMs", "Real-time Processing", "Groq", "Windsurf"],
      github: "https://github.com/qiuethan/orbit",
      live: "https://devpost.com/software/orbit-59jths",
      details: "🏆 Winner of Best Use of Groq & Best Use of Windsurf @ Hack the North 2025. A cutting-edge social intelligence platform that combines computer vision for instant recognition, Whisper AI for live transcription, and large language models to provide context-aware follow-ups in real-time social interactions."
    },
    {
      name: "🐾 Polaris - Multiplayer CV Fitness Game",
      description: "CV-powered open world collaborative fitness game that turns your body into the controller",
      tech: ["React", "Three.js", "FastAPI", "WebSockets", "Python", "MediaPipe", "OpenCV", "JavaScript"],
      github: "https://github.com/qiuethan/Polaris",
      live: "https://devpost.com/software/polaris-vlp1wm",
      details: "🏆 1st Place – Best Game Hack @ Hack the 6ix 2025. A web-based multiplayer fitness platformer that transforms your body into a game controller through real-time computer vision. Players physically run, jump, and crouch to control polar bear characters racing through dynamic 3D worlds. Features dual-player tracking from a single camera, real-time pose detection with MediaPipe, custom gesture recognition with confidence scoring, and a fully custom 3D game engine built in Three.js. Supports multiplayer synchronization via WebSockets with sub-300ms latency and includes procedurally generated tracks for endless gameplay."
    },
    {
      name: "💰 RT1M - Road to $1 Million Financial Planning App",
      description: "A comprehensive full-stack financial planning application with AI chatbot",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase", "OpenAI API", "LangChain", "Vite", "Vercel"],
      github: "https://github.com/qiuethan/RT1M",
      live: "https://rt1m.ethanqiu.ca",
      details: "A comprehensive financial planning app designed to help users track their journey to building $1 million in wealth. Features an intelligent AI chatbot powered by OpenAI that analyzes financial data, provides personalized advice, and updates user information through natural conversation. Includes income/expense tracking, asset/debt management, goal setting with milestones, real-time dashboard with analytics, secure authentication, and responsive design optimized for both mobile and desktop."
    },
    {
      name: "🛒 Shop Buddy",
      description: "An AI-powered shopping assistant that provides complete solutions with integrated product recommendations.",
      tech: ["React", "Node.js", "TypeScript", "Vite", "Express.js", "OpenAI API", "SerpAPI"],
      github: "https://github.com/qiuethan/Shop-Buddy",
      live: "https://shop-buddy.ethanqiu.ca",
      details: "Shop Buddy is an AI-powered shopping assistant that helps users solve problems by providing step-by-step solutions and smart product recommendations. It leverages OpenAI for solution generation and SerpAPI for real-time product search across multiple stores. Features include organized browsing, customizable search filters, and a modern, responsive UI. Backend is secured with Helmet, CORS, and rate limiting."
    },
    {
      name: "📱 Bounce Back",
      description: "An AI-powered mental health companion app",
      tech: ["React Native", "Firebase", "Python", "PyTorch", "BERT", "Mistral", "Docker"],
      github: "https://github.com/qiuethan/Bounce-Back-Public",
      live: null,
      details: "A mental health companion app that supports emotional healing after breakups, grief, and difficult periods. Features AI-driven chat, mood tracking, journaling, avoidance zones, and habit-building tools."
    },
    {
      name: "🧠 Hyacinthe",
      description: "A computer-vision navigator for the visually impaired",
      tech: ["Python", "OpenCV", "YOLO", "Computer Vision"],
      github: "https://github.com/haenlonns/hyacinthe",
      live: "https://devpost.com/software/hyacinthe",
      details: "🏆 Winner of GeeseHacks 2025 (1st Place Overall) - An innovative navigation system using computer vision to assist visually impaired individuals with real-time environmental awareness and guidance."
    },
    {
      name: "🌐 UTMIST Website",
      description: "Official site for the UofT Machine Intelligence Student Team",
      tech: ["TypeScript", "React", "Django"],
      github: "https://github.com/UTMIST/UTMIST",
      live: "https://www.utmist.ca/",
      details: "Modern website for the University of Toronto Machine Intelligence Student Team, serving 1,000+ students and researchers with event management, project showcases, and team information."
    },
    {
      name: "🤖 Hart House Debate Automation",
      description: "Automates administrative tasks for Hart House Debating Club",
      tech: ["Python", "JavaScript"],
      github: "https://github.com/qiuethan/Hart-House-Debate-Automation",
      live: null,
      details: "Automation system for Canada's largest university debate club, handling payment confirmation, debater allocation, accessibility allocation, and tournament management for 360+ participants."
    },
    {
      name: "🚶 Crosswalk of Shame",
      description: "Real-time object detection tool to reduce distracted walking",
      tech: ["Python", "Jupyter Notebook", "PyTorch", "YOLO", "Computer Vision"],
      github: "https://github.com/emlyqi/crosswalkofshame",
      live: "https://devpost.com/software/crosswalk-of-shame",
      details: "Hack the North 2024 project - A safety-focused application that uses real-time object detection to identify and alert distracted pedestrians, promoting safer walking habits."
    },
    {
      name: "🛡️ GameStoppr",
      description: "Blocks addictive apps and rewards healthy behavior",
      tech: ["JavaScript", "React", "Django"],
      github: "https://github.com/muwasifk/gamestoppr",
      live: "https://devpost.com/software/gamestoppr",
      details: "A browser-integrated platform designed to combat digital addiction by blocking addictive applications and gamifying healthy behavior patterns with reward systems."
    }
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "PostgreSQL", "HTML5", "CSS3", "PowerShell"],
    frameworks: ["React", "React Native", "Django", "Node.js", "FastAPI", "Express.js", "Tailwind CSS"],
    libraries: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Three.js", "MediaPipe", "OpenCV", "LangChain", "YOLO"],
    tools: ["Docker", "Git", "GitHub", "GitLab", "Firebase", "Google Cloud", "Vite", "Vercel", "Maven", "GitHub Actions", "WebSockets", "Jupyter Notebook"]
  },
  experience: [
    {
      title: "🛡️ Software Engineer (Co-op)",
      company: "General Dynamics Mission Systems–Canada",
      period: "May 2025 - Aug 2025",
      responsibilities: [
        "Designed and developed a key plugin tool, including location configuration and support using Java Maven, PowerShell scripting, and custom installers",
        "Built a custom application testing library in Python, increasing testing efficiency by 50%",
        "Participated in agile sprints, PI planning, and code reviews to improve delivery speed and code quality"
      ],
      tech: ["Java", "Python", "Maven", "PowerShell", "GitLab", "CI/CD"]
    },
    {
      title: "🤖 Engineering Director - Industry Collaborations",
      company: "University of Toronto Machine Intelligence Student Team (UTMIST)",
      period: "Jun 2025 - Present",
      responsibilities: [
        "Leading industry partnership initiatives and collaborative projects between UTMIST and external organizations",
        "Managing engineering teams and establishing best practices for machine learning project development",
        "Coordinating cross-functional teams to deliver high-impact AI solutions for industry partners"
      ],
      tech: ["Machine Learning", "Project Management", "Team Leadership", "Python"]
    },
    {
      title: "🧠 Machine Learning Engineer",
      company: "University of Toronto Machine Intelligence Student Team (UTMIST)",
      period: "Jul 2025 - Present",
      responsibilities: [
        "Developing and deploying machine learning models for research and production environments",
        "Implementing MLOps pipelines and model monitoring systems",
        "Collaborating with research teams on cutting-edge AI projects and publications"
      ],
      tech: ["PyTorch", "TensorFlow", "Python", "MLOps", "Model Deployment"]
    },
    {
      title: "⚙️ Software Developer - Infrastructure",
      company: "University of Toronto Machine Intelligence Student Team (UTMIST)",
      period: "May 2025 - Present",
      responsibilities: [
        "Implemented full authentication system and backend endpoints using Django REST APIs and PostgreSQL",
        "Streamlined deployment workflows with GitHub Actions CI/CD, reducing deployment errors by 90%",
        "Built and maintained infrastructure supporting 1,000+ students and researchers"
      ],
      tech: ["Django", "React", "PostgreSQL", "GitHub Actions", "Python", "TypeScript"]
    },
    {
      title: "🚀 Project Lead",
      company: "UofT Blueprint",
      period: "Aug 2025 - Present",
      responsibilities: [
        "Leading end-to-end development of technical projects for non-profit organizations",
        "Managing product roadmap and coordinating with stakeholders to deliver impactful solutions",
        "Mentoring development teams and ensuring high code quality standards"
      ],
      tech: ["React", "Node.js", "Project Management", "Full Stack Development"]
    },
    {
      title: "💻 Problem Writer",
      company: "United Coding Tournament",
      period: "May 2022 - May 2024",
      responsibilities: [
        "Created 15+ competitive programming problems for 150+ contestants",
        "Designed algorithmic challenges covering data structures, dynamic programming, and graph theory",
        "Collaborated with tournament organizers to ensure problem quality and difficulty balance"
      ],
      tech: ["Java", "Python", "Algorithm Design", "Problem Solving"]
    },
    {
      title: "👨‍🏫 Python and Java Instructor",
      company: "Ottawa Jay Learning Centre",
      period: "Sep 2020 - Sep 2023",
      responsibilities: [
        "Designed and delivered comprehensive Python and Java courses for 30+ students",
        "Proactively sought constructive feedback and adapted class content accordingly to best meet student needs, attaining an 85% satisfaction rate",
        "Developed curriculum covering programming fundamentals, object-oriented programming, and practical applications"
      ],
      tech: ["Python", "Java", "Curriculum Development", "Teaching"]
    }
  ],
  contact: {
    email: "ethanqiu@gmail.com",
    github: "https://github.com/qiuethan",
    linkedin: "https://linkedin.com/in/qiu-ethan",
  },
  blog: [
    {
      id: '1',
      title: 'Welcome to My Blog',
      content: 'This is my first blog post! I\'ll be sharing thoughts on software engineering, AI, and my journey building cool projects.',
      date: new Date().toLocaleDateString()
    }
  ]
}; 