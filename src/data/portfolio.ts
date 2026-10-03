import { experiments } from './experiments';
import { projects } from './projects';
import { experience } from './experience';

export const portfolioData = {
  experiments,
  about: {
    name: "Ethan Qiu",
    role: "Software Engineer",
    location: "Toronto",
    university: "University of Toronto",
    bio: `I'm Ethan, a software engineer building AI tools and the systems around them. Currently a Software Engineer Intern on Shopify's Products & Pricing team and VP Infrastructure at UTMIST. Computer Science Specialist at the University of Toronto, class of 2028.

Previously at General Dynamics, Engineering Director at UTMIST, and Project Lead at UofT Blueprint. I like taking an idea far enough that someone can actually use it.`
  },
  projects,
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "Ruby", "C/C++", "SQL", "Swift", "HTML5", "CSS3", "PowerShell"],
    frameworks: ["React", "React Native", "Ruby on Rails", "FastAPI", "Django", "Node.js", "Express.js", "Next.js", "GraphQL", "Tailwind CSS"],
    libraries: ["PyTorch", "TensorFlow", "XGBoost", "Pandas", "NumPy", "Three.js", "MediaPipe", "OpenCV", "LangChain", "YOLO"],
    tools: ["AWS (S3, EC2, Lambda, SageMaker, Bedrock)", "Docker", "PostgreSQL", "Git", "GitHub", "GitLab", "Firebase", "Google Cloud", "Xcode", "Vite", "Vercel", "Maven", "Supabase", "Railway", "Redis", "Payload CMS", "MCP", "GitHub Actions", "WebSockets", "Jupyter Notebook"]
  },
  experience,
  contact: {
    email: "ethanqiu@gmail.com",
    github: "https://github.com/qiuethan",
    linkedin: "https://linkedin.com/in/qiu-ethan",
  },
  blog: [
    {
      id: 'thea',
      title: 'The one about Thea pt. the end?',
      content: 'Notes from building Thea, my personal AI assistant, and working with the Claude Agent SDK.',
      date: 'June 14, 2026',
      url: 'https://coherentboi.substack.com/p/the-one-about-thea-pt-the-end'
    }
  ]
};
