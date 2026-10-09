import styled from 'styled-components';
import { activityIsStale, authorPullsUrl, githubSource, projectDate, pullDate, pullLabel, stageNames, trackers } from '../../data/projectTracking';
import { useProjectTracking } from '../../hooks/useProjectTracking';

const Summary = styled.span`
  display: grid;
  gap: 8px;
  padding-top: 12px;
  margin: 4px 0 10px;
  border-top: 1px solid rgba(29, 79, 158, 0.14);
  .stage { display: flex; align-items: center; gap: 7px; color: var(--accent); font: 500 11px var(--mono); }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: 0 0 auto; }
  .work-title { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--ink-soft); font: 13px/1.5 var(--body); overflow-wrap: anywhere; }
  a.work-title { text-decoration: none; }
  a.work-title:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
  .stamp { color: var(--ink-faint); font: 10px/1.5 var(--mono); }
  .all-prs { color: var(--accent); font: 11px/1.5 var(--mono); text-underline-offset: 3px; justify-self: start; }
`;

export function ProjectProgress({ id, interactive = false }: { id: string; interactive?: boolean }) {
  const activity = useProjectTracking(id);
  const tracker = trackers[id];
  if (!tracker) return null;
  const pull = activity?.work?.pullRequests[0];
  const commit = activity?.work?.commits[0];
  const latest = pull && (!commit || Date.parse(pullDate(pull)) >= Date.parse(commit.date)) ? { title: pull.title, url: pull.url, date: pullDate(pull), label: `${pullLabel(pull)} PR #${pull.number}` } : commit ? { ...commit, label: 'Committed' } : null;
  const stale = activity && activityIsStale(activity) ? ' · last known' : '';
  return (
    <Summary className="progress">
      <span className="stage"><span className="dot" aria-hidden="true" />{stageNames[tracker.stage]}</span>
      {latest ? <>
        {interactive ? <a className="work-title" href={latest.url} target="_blank" rel="noopener noreferrer">{latest.title} ↗</a> : <span className="work-title">{latest.title}</span>}
        <span className="stamp">{latest.label} · {projectDate(latest.date)}{stale}</span>
      </> : <>
        {tracker.milestones[0] && <span className="stamp">Latest milestone · {tracker.milestones[0].title}</span>}
        {activity?.lastActivity && <span className="stamp">Repo activity · {projectDate(activity.lastActivity)}{stale}</span>}
      </>}
      {interactive && activity?.work && (activity.work.pullRequests.length ? <a className="all-prs" href={authorPullsUrl(tracker.repo, activity.work.author)} target="_blank" rel="noopener noreferrer">View my PRs ↗</a> : <a className="all-prs" href={`https://github.com/${tracker.repo}`} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>)}
    </Summary>
  );
}

const Log = styled.section`
  margin: 24px 0;
  padding-top: 20px;
  border-top: 1px solid rgba(29, 79, 158, 0.16);
  h4 { margin-bottom: 12px; font: 600 18px var(--display); }
  h5 { margin: 18px 0 12px; font: 600 14px var(--display); }
  .stage { display: inline-block; margin-bottom: 6px; color: var(--accent); font: 500 11px var(--mono); }
  .focus { color: var(--ink-soft); font-size: 14px; margin-bottom: 16px; }
  ol { list-style: none; padding: 0; margin: 0 0 14px; }
  li { padding: 12px 0; border-bottom: 1px solid rgba(29, 79, 158, 0.12); }
  li:first-child { padding-top: 0; }
  .meta { display: block; color: var(--ink-faint); font: 10.5px/1.6 var(--mono); }
  .row-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 6px; }
  .state { padding: 2px 7px; border-radius: 5px; color: #226445; background: #e4f1e8; font: 500 10px/1.5 var(--mono); }
  .state[data-state='merged'] { color: #6b449a; background: #efe7f7; }
  .state[data-state='closed'], .state[data-state='draft'] { color: #595d67; background: #e8e9ed; }
  strong { display: block; font-size: 14px; margin: 4px 0; }
  p { color: var(--ink-soft); font-size: 13px; line-height: 1.6; }
  a { color: var(--accent); font-size: 12px; text-underline-offset: 3px; }
  .work-title { display: block; font-size: 13px; line-height: 1.5; text-decoration: none; overflow-wrap: anywhere; }
  .work-title:hover { text-decoration: underline; }
  .sources { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 5px; }
  .activity { padding: 14px; border: 1px solid var(--glass-edge); background: rgba(255, 255, 255, 0.25); border-radius: var(--radius-sm); }
  .activity h5:first-child { margin-top: 0; }
  .activity > a { display: block; margin: 8px 0; }
  .checked { margin-top: 14px; }
`;

export function ProjectTimeline({ id }: { id: string }) {
  const activity = useProjectTracking(id);
  const tracker = trackers[id];
  if (!tracker) return null;
  const work = activity?.work;
  return (
    <Log aria-label="Project log">
      <h4>Project log</h4>
      <span className="stage">{stageNames[tracker.stage]}</span>
      <p className="focus">{tracker.focus}</p>
      {tracker.milestones.length > 0 && <>
        <h5>Milestones</h5>
        <ol>
          {tracker.milestones.map((milestone) => (
            <li key={milestone.id}>
              <time className="meta" dateTime={milestone.date}>{projectDate(milestone.date)}</time>
              <strong>{milestone.title}</strong><p>{milestone.summary}</p>
              <span className="sources">{milestone.sources.filter((url) => githubSource(url, tracker.repo)).map((url, i) => <a href={url} key={url} target="_blank" rel="noopener noreferrer">Source {i + 1} ↗</a>)}</span>
            </li>
          ))}
        </ol>
      </>}
      {activity ? (
        <div className="activity">
          {work ? <>
            <h5>My recent pull requests</h5>
            {work.pullRequests.length ? <ol>
              {work.pullRequests.map((pull) => <li key={pull.number}>
                <span className="row-meta"><span className="state" data-state={pullLabel(pull).toLowerCase()}>{pullLabel(pull)}</span><span className="meta">#{pull.number} · {pull.state === 'merged' ? 'merged' : 'updated'} <time dateTime={pullDate(pull)}>{projectDate(pullDate(pull))}</time></span></span>
                <a className="work-title" href={pull.url} target="_blank" rel="noopener noreferrer">{pull.title} ↗</a>
              </li>)}
            </ol> : <p>No pull requests found for @{work.author} in this repository.</p>}
            <a href={authorPullsUrl(tracker.repo, work.author)} target="_blank" rel="noopener noreferrer">View all my PRs on GitHub ↗</a>
            {work.commits.length > 0 && <>
              <h5>My recent commits</h5>
              <ol>{work.commits.map((commit) => <li key={commit.sha}>
                <time className="meta" dateTime={commit.date}>{projectDate(commit.date)}</time>
                <a className="work-title" href={commit.url} target="_blank" rel="noopener noreferrer">{commit.title} ↗</a>
              </li>)}</ol>
            </>}
          </> : <>
            <span className="meta">From GitHub · repository activity</span>
            {activity.lastActivity && (activity.commitUrl ? <a href={activity.commitUrl} target="_blank" rel="noopener noreferrer">Latest commit · {projectDate(activity.lastActivity)} ↗</a> : <p>Latest commit · {projectDate(activity.lastActivity)}</p>)}
          </>}
          {activity.release && <a href={activity.release.url} target="_blank" rel="noopener noreferrer">Release · {activity.release.name} ↗</a>}
          <span className="meta checked">{activityIsStale(activity) ? 'Last known activity · checked' : 'Checked'} {projectDate(activity.checkedAt)} · refreshes hourly</span>
        </div>
      ) : <a href={`https://github.com/${tracker.repo}`} target="_blank" rel="noopener noreferrer">Follow on GitHub ↗</a>}
    </Log>
  );
}
