import type { Project } from './projects';

export interface Experiment extends Omit<Project, 'award'> {
  question?: string;
  award?: string;
}

// Public descriptions of personal experiments. Include source links only for public repositories.
export const experiments: Experiment[] = [
  {
    id: 'thea',
    name: 'Thea',
    description: 'A personal Discord assistant with shared memory across text, voice, and the tasks I keep putting off.',
    question: 'What if my assistant could remember the conversation and actually follow through?',
    details: 'Thea connects conversation to everyday tools: Calendar, Gmail, GitHub, Spotify, and a searchable memory. Text and voice use the same assistant, so context carries across both. I built it as a personal assistant, with explicit permissions for tools that take action.',
    highlights: [
      'Built streaming voice interaction with Deepgram transcription, ElevenLabs speech, and interruption handling.',
      'Added semantic memory that considers relevance, recency, and importance, with background consolidation.',
      'Implemented persistent plans, scheduled automations, and webhook-triggered tasks with approval steps and shared tool permissions.',
    ],
    tech: ['TypeScript', 'Discord.js', 'Claude Agent SDK', 'Supabase', 'Deepgram', 'ElevenLabs'],
    image: '/img/experiments/thea.svg',
    imageAlt: 'Thea repository overview',
    imageFit: 'contain',
  },
  {
    id: 'minecraft-harness',
    name: 'Minecraft-Harness',
    description: 'An AI game master that turns a prompt into quests, custom items, and a world with a little more personality.',
    question: 'What if the world could build the next adventure around how you play?',
    details: 'A Java agent harness inside Minecraft, with an agent loop separated from the game itself. Validated tool calls connect natural-language requests to world interactions. Narrative planning, story state, and fallback behavior give generated quests a structure the game can actually execute.',
    highlights: [
      'Built an asynchronous agent loop with validated tool arguments, bounded iterations, and game-specific adapters.',
      'Added quest planning, player profiles, story and outcome tracking, and runtime episode generation.',
      'Built a Mineflayer MCP test harness to inspect entities, effects, and boss bars from a second player’s view.',
    ],
    tech: ['Java', 'NeoForge', 'LLM Tool Calling', 'Mineflayer', 'MCP', 'Gradle'],
    image: '/img/experiments/minecraft-harness.svg',
    imageAlt: 'Minecraft-Harness repository overview',
    imageFit: 'contain',
  },
  {
    id: 'idea-factory',
    name: 'Idea Factory',
    description: 'A place for all the papers, articles, and half-formed ideas that might turn into something together.',
    question: 'What happens when ideas from completely different fields share a room?',
    details: 'A research and ideation tool that organizes source material into a searchable knowledge graph. It represents concepts at four levels of abstraction, retrieves mechanisms from different domains, and uses an agent pipeline to develop problems, critique ideas, and outline an MVP.',
    highlights: [
      'Built knowledge ingestion, embeddings, and connections between concepts with Supabase and pgvector.',
      'Implemented diversity-aware retrieval to bring different domains into the same idea-generation process.',
      'Added streaming chat, a graph explorer, and saved idea runs in a Next.js interface.',
    ],
    tech: ['TypeScript', 'Next.js', 'Supabase', 'pgvector', 'AWS Bedrock', 'OpenAI Embeddings'],
    image: '/img/experiments/idea-factory.svg',
    imageAlt: 'Idea Factory repository overview',
    imageFit: 'contain',
  },
  {
    "id": "archctl",
    "name": "archctl",
    "description": "Architecture rules that catch forbidden dependencies before they become everyone’s problem.",
    "details": "A published CLI and VS Code extension for checking architecture boundaries across TypeScript, JavaScript, Python, and Java. AST-based scans surface dependency, capability, and context violations while you work.",
    "tech": [
      "TypeScript",
      "AST Analysis",
      "Node.js",
      "VS Code API"
    ],
    "github": "https://github.com/qiuethan/archctl",
    "award": "Published · npm",
    "highlights": [
      "Built nine rule implementations for dependency boundaries, capabilities, circular imports, and code placement.",
      "Added cached scans, inline editor diagnostics, and interactive dependency reports."
    ],
    "live": "https://www.npmjs.com/package/archctl",
    "linkLabel": "View package",
    "image": "/img/projects/archctl.png",
    "imageAlt": "archctl project logo",
    "imageFit": "cover"
  },
];
