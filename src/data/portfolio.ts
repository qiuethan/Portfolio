export const portfolioData = {
  about: {
    name: "Ethan Qiu",
    role: "Software Engineer",
    location: "Toronto/Ottawa",
    university: "University of Toronto",
    bio: `Hi, I'm Ethan Qiu — a software engineer with a strong interest in AI.

Right now, I'm working at General Dynamics Mission Systems - Canada and contributing to UTMIST (University of Toronto Machine Intelligence Student Team), where I get to build cool things and learn alongside some amazing people. I'm also actively developing two personal projects: *Bounce Back*, a mental health app powered by AI, and *Road to 1 Million*, a goal-tracking app designed to turn ambition into progress.

What I love most about software is its power — the way a few lines of code can shape ideas, tools, and entire experiences. I'm always looking to turn real-world problems into clean, scalable solutions.

Outside the terminal, I play badminton, compete in debate, and explore ideas that connect tech with people.

Always building. Always curious.`
  },
  projects: [
    {
      name: "💰 RT1M - Road to $1 Million Financial Planning App",
      description: "A comprehensive full-stack financial planning application with AI chatbot",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase", "OpenAI API", "LangChain", "Vite", "Vercel"],
      github: "https://github.com/qiuethan/RT1M",
      live: "https://rt1m.app",
      details: "A comprehensive financial planning app designed to help users track their journey to building $1 million in wealth. Features an intelligent AI chatbot powered by OpenAI that analyzes financial data, provides personalized advice, and updates user information through natural conversation. Includes income/expense tracking, asset/debt management, goal setting with milestones, real-time dashboard with analytics, secure authentication, and responsive design optimized for both mobile and desktop."
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
      name: "🤖 Hart House Debate Automation",
      description: "Automates administrative tasks for Hart House Debating Club",
      tech: ["Python", "JavaScript"],
      github: "https://github.com/qiuethan/Hart-House-Debate-Automation",
      live: null,
      details: "Automation system for Canada's largest university debate club, handling payment confirmation, debater allocation, accessibility allocation, and tournament management for 360+ participants."
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
      name: "🧠 Hyacinthe",
      description: "A computer-vision navigator for the visually impaired",
      tech: ["Python", "OpenCV", "YOLO", "Computer Vision"],
      github: "https://github.com/haenlonns/hyacinthe",
      live: "https://devpost.com/software/hyacinthe",
      details: "Winner of GeeseHacks 2025 (1st Place Overall) - An innovative navigation system using computer vision to assist visually impaired individuals with real-time environmental awareness and guidance."
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
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "PostgreSQL", "HTML5", "CSS3"],
    frameworks: ["React", "Django", "Node.js"],
    libraries: ["PyTorch", "TensorFlow", "Pandas", "NumPy"],
    tools: ["Docker", "Git", "GitHub", "GitLab", "Firebase", "Google Cloud"]
  },
  experience: [
    {
      title: "🛡️ Software Engineer (Co-op)",
      company: "General Dynamics Mission Systems–Canada",
      period: "2025 - Present",
      responsibilities: [
        "Built and maintained Java applications used in battle planning systems, with Maven for build automation",
        "Developed Python test automation for simulated + lab-based validation of field hardware",
        "Collaborated in an agile team using Git and GitLab for version control, reviews, and CI/CD"
      ],
      tech: ["Java", "Python", "Maven", "GitLab", "CI/CD"]
    },
    {
      title: "🧠 Full Stack Developer",
      company: "UofT Machine Intelligence Student Team (UTMIST)",
      period: "2025 - Present",
      responsibilities: [
        "Built full-stack features using Django (Python) and React for dynamic, responsive apps",
        "Developed RESTful APIs, maintained PostgreSQL-backed databases, and managed CI/CD deployments",
        "Supported infrastructure used by 1,000+ students and researchers"
      ],
      tech: ["Django", "React", "PostgreSQL", "CI/CD", "Python", "JavaScript"]
    },
    {
      title: "🎙️ Tournaments Director",
      company: "Hart House Debating Club",
      period: "2024 - Present",
      responsibilities: [
        "Led a team of 20+ organizers and improved team turnaround by 25% using Python and JS automation",
        "Delivered events for 360+ participants with a 91% satisfaction rate and $7K revenue above target"
      ],
      tech: ["Python", "JavaScript"]
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
        "Proactively sought constructive feedback and adapted class content accordingly to best meet student needs",
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