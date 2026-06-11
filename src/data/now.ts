// Typed client for the self-updating "now" API that powers the Now section.
// Discovery + per-tool docs live at https://now.ethanqiu.ca/api
//
// Every endpoint returns the same envelope: { schema_version, tool, updated, data }.
// We fetch the handful of tools the Now section renders, in parallel, and tolerate
// partial failure so one slow/broken endpoint can't blank the whole section.

const NOW_API = 'https://now.ethanqiu.ca/api';

interface Envelope<T> {
  schema_version: number;
  tool: string;
  updated: string;
  data: T;
}

export interface NowProject {
  private: boolean;
  recently_active: boolean;
  pushed_at: string;
  // public repos only
  name?: string;
  description?: string;
  language?: string;
  url?: string;
  homepage?: string;
  stars?: number;
  topics?: string[];
  // private repos only — name/links withheld, replaced by an LLM summary
  id?: number;
  summary?: string;
}

export interface NowWritingPost {
  title: string;
  url: string;
  published_at: string;
  excerpt: string;
}

export interface NowContributions {
  total_past_year: number;
  last_7_days: number;
  last_30_days: number;
  current_streak: number;
  longest_streak: number;
  busiest_day: { date: string; count: number };
  calendar: Array<{ date: string; count: number }>;
}

export interface NowStack {
  languages: Array<{ name: string; repos: number }>;
  from_wakatime: string[];
  stale: boolean;
}

export interface NowActivity {
  window: string;
  github: { totalCommits: number };
  wakatime: {
    total: string;
    dailyAverage: string;
    seconds: number;
    projectCount: number;
    languages: string[];
  };
  summary: string;
}

/** Everything the Now section needs, plus when the source data was last refreshed. */
export interface NowData {
  updated: string;
  projects: NowProject[];
  writing: NowWritingPost[];
  contributions: NowContributions | null;
  stack: NowStack | null;
  activity: NowActivity | null;
  availability: string | null;
}

async function getTool<T>(path: string): Promise<Envelope<T>> {
  const res = await fetch(`${NOW_API}${path}`);
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json() as Promise<Envelope<T>>;
}

/**
 * Fetch the tools the Now section renders in parallel. Resolves as long as at
 * least one endpoint responds; missing pieces come back as empty/null so the UI
 * can degrade gracefully instead of throwing.
 */
export async function fetchNow(): Promise<NowData> {
  const [projects, writing, contributions, stack, activity, availability] =
    await Promise.allSettled([
      getTool<{ projects: NowProject[] }>('/projects'),
      getTool<{ posts: NowWritingPost[] }>('/writing'),
      getTool<NowContributions>('/contributions'),
      getTool<NowStack>('/stack'),
      getTool<NowActivity>('/activity'),
      getTool<{ availability: string }>('/availability'),
    ]);

  const ok = <T>(r: PromiseSettledResult<Envelope<T>>): T | null =>
    r.status === 'fulfilled' ? r.value.data : null;

  // every endpoint failing is a real error — let the caller fall back to samples
  if (
    [projects, writing, contributions, stack, activity, availability].every(
      (r) => r.status === 'rejected',
    )
  ) {
    throw new Error('now API unreachable');
  }

  const updatedAt = (r: PromiseSettledResult<Envelope<unknown>>): string | null =>
    r.status === 'fulfilled' ? r.value.updated : null;
  const updated =
    [projects, writing, contributions, stack, activity, availability]
      .map(updatedAt)
      .find((u): u is string => u !== null) ?? '';

  return {
    updated,
    projects: ok(projects)?.projects ?? [],
    writing: ok(writing)?.posts ?? [],
    contributions: ok(contributions),
    stack: ok(stack),
    activity: ok(activity),
    availability: ok(availability)?.availability ?? null,
  };
}
