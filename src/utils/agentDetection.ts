// Decides whether a visitor should get the structured "agent view" instead of
// the glass UI. Two layers feed the decision:
//   1. an explicit ?view= override (so the agent view is testable and a human can
//      force either mode), persisted to sessionStorage for in-session navigation
//   2. user-agent sniffing for AI agents, crawlers, link unfurlers, and headless
//      automation — the tools that find the animated glass page hard to navigate
//
// Crawlers that don't run JS never execute this; they're served the <noscript>
// block in index.html and the static llms.txt instead. This only catches the
// JS-executing agents (browser-driving tools, headless Chrome, etc.).

const OVERRIDE_KEY = 'portfolio:view';

// Known AI agents/assistants, search crawlers, social unfurlers, and headless
// automation. Matched case-insensitively against the UA string.
const AGENT_UA = new RegExp(
  [
    // AI crawlers & assistants
    'GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web',
    'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended',
    'Applebot', 'CCBot', 'Bytespider', 'Amazonbot', 'cohere-ai', 'Diffbot',
    'YouBot', 'Meta-ExternalAgent', 'DuckAssistBot', 'ImagesiftBot', 'Omgili',
    // generic crawler/spider markers
    'bot', 'crawler', 'crawl', 'spider', 'slurp',
    // social / link preview unfurlers
    'facebookexternalhit', 'WhatsApp', 'TelegramBot', 'Discordbot',
    'Slackbot', 'Twitterbot', 'LinkedInBot', 'BingPreview', 'Embedly',
    // headless browsers & scripting clients
    'HeadlessChrome', 'Headless', 'PhantomJS', 'Puppeteer', 'Playwright',
    'python-requests', 'python-urllib', 'aiohttp', 'httpx', 'node-fetch',
    'axios', 'Go-http-client', 'okhttp', 'curl', 'Wget', 'libwww', 'Scrapy',
  ].join('|'),
  'i',
);

function readOverride(): 'agent' | 'human' | null {
  if (typeof window === 'undefined') return null;

  const fromQuery = new URLSearchParams(window.location.search).get('view');
  if (fromQuery === 'agent' || fromQuery === 'human') {
    try {
      window.sessionStorage.setItem(OVERRIDE_KEY, fromQuery);
    } catch {
      /* storage may be unavailable (private mode, etc.) — ignore */
    }
    return fromQuery;
  }

  try {
    const stored = window.sessionStorage.getItem(OVERRIDE_KEY);
    if (stored === 'agent' || stored === 'human') return stored;
  } catch {
    /* ignore */
  }
  return null;
}

/** True when the current visitor should be served the structured agent view. */
export function isAgentVisitor(): boolean {
  const override = readOverride();
  if (override) return override === 'agent';

  if (typeof navigator === 'undefined' || !navigator.userAgent) return false;

  // navigator.webdriver is set by every automation framework (Selenium,
  // Puppeteer, Playwright) — a strong, UA-independent automation signal.
  if (navigator.webdriver) return true;

  return AGENT_UA.test(navigator.userAgent);
}
