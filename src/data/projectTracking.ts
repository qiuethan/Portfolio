import approved from './project-tracking.json';

export type Stage = 'exploring' | 'building' | 'shipped' | 'maintaining' | 'paused';
export interface Milestone { id: string; date: string; title: string; summary: string; sources: string[] }
export interface Tracker { repo: string; stage: Stage; focus: string; milestones: Milestone[] }
export interface PullActivity { number: number; title: string; url: string; state: 'open' | 'merged' | 'closed'; draft: boolean; updatedAt: string; mergedAt: string | null }
export interface CommitActivity { sha: string; title: string; url: string; date: string }
export interface PersonalWork { author: string; pullRequests: PullActivity[]; commits: CommitActivity[] }
export interface RepositoryActivity {
  repo: string; checkedAt: string; lastActivity: string | null; commitUrl: string | null;
  release: { name: string; url: string; date: string } | null;
  work?: PersonalWork;
}
export const trackers = approved.projects as Record<string, Tracker>;
export const stageNames: Record<Stage, string> = { exploring: 'Exploring', building: 'Building', shipped: 'Shipped', maintaining: 'Maintaining', paused: 'Paused' };
export const ACTIVITY_URL = import.meta.env?.VITE_PROJECT_ACTIVITY_URL || 'https://now.ethanqiu.ca/portfolio-sync/activity.json';

export function githubSource(url: unknown, repo: string): url is string {
  if (typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname === 'github.com' && !parsed.username && !parsed.password && parsed.pathname.toLowerCase().startsWith(`/${repo.toLowerCase()}/`);
  } catch { return false; }
}
const validDate = (value: unknown): value is string => typeof value === 'string' && Number.isFinite(Date.parse(value)) && Date.parse(value) <= Date.now() + 300_000;
const validTitle = (value: unknown): value is string => typeof value === 'string' && value.length > 0 && value.length <= 300;

function parseWork(work: PersonalWork | undefined, repo: string): PersonalWork | undefined {
  if (!work || typeof work.author !== 'string' || !/^[\w-]{1,39}$/.test(work.author) || !Array.isArray(work.pullRequests) || !Array.isArray(work.commits)) return undefined;
  const prefix = `https://github.com/${repo.toLowerCase()}`;
  return {
    author: work.author,
    pullRequests: work.pullRequests.filter((p) => p && Number.isSafeInteger(p.number) && p.number > 0 && validTitle(p.title) && githubSource(p.url, repo) && p.url.toLowerCase() === `${prefix}/pull/${p.number}` && ['open', 'merged', 'closed'].includes(p.state) && typeof p.draft === 'boolean' && validDate(p.updatedAt) && (p.state === 'merged' ? validDate(p.mergedAt) : p.mergedAt === null)).slice(0, 6),
    commits: work.commits.filter((c) => c && typeof c.sha === 'string' && /^[a-f0-9]{40}$/i.test(c.sha) && validTitle(c.title) && validDate(c.date) && githubSource(c.url, repo) && c.url.toLowerCase() === `${prefix}/commit/${c.sha.toLowerCase()}`).slice(0, 3),
  };
}

export const pullLabel = (pull: PullActivity) => pull.state === 'merged' ? 'Merged' : pull.state === 'closed' ? 'Closed' : pull.draft ? 'Draft' : 'Open';
export const pullDate = (pull: PullActivity) => pull.mergedAt ?? pull.updatedAt;
export const authorPullsUrl = (repo: string, author: string) => `https://github.com/${repo}/pulls?q=${encodeURIComponent(`is:pr author:${author} sort:updated-desc`)}`;

export function parseActivity(value: unknown, allowed = trackers): Record<string, RepositoryActivity> {
  if (!value || typeof value !== 'object' || !('version' in value) || value.version !== 1 || !('projects' in value) || !value.projects || typeof value.projects !== 'object') throw new Error('Invalid project activity feed');
  const result: Record<string, RepositoryActivity> = {};
  for (const [id, unknownItem] of Object.entries(value.projects)) {
    const tracker = allowed[id];
    if (!tracker || !unknownItem || typeof unknownItem !== 'object') continue;
    const item = unknownItem as RepositoryActivity;
    if (typeof item.repo !== 'string' || item.repo.toLowerCase() !== tracker.repo.toLowerCase() || !validDate(item.checkedAt)) continue;
    result[id] = {
      repo: item.repo, checkedAt: item.checkedAt,
      lastActivity: validDate(item.lastActivity) ? item.lastActivity : null,
      commitUrl: githubSource(item.commitUrl, tracker.repo) ? item.commitUrl : null,
      release: item.release && typeof item.release.name === 'string' && item.release.name.length <= 120 && validDate(item.release.date) && githubSource(item.release.url, tracker.repo) ? item.release : null,
      work: parseWork(item.work, tracker.repo),
    };
  }
  return result;
}

export function activityIsStale(activity: RepositoryActivity, now = Date.now()) {
  return now - Date.parse(activity.checkedAt) > 3 * 60 * 60 * 1000;
}

export function projectDate(date: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date));
}
