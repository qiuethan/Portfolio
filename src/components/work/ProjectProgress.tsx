import styled from 'styled-components';
import { activityIsStale, githubSource, projectDate, stageNames, trackers } from '../../data/projectTracking';
import { useProjectTracking } from '../../hooks/useProjectTracking';

const Summary = styled.span`
  display: grid;
  gap: 7px;
  padding-top: 13px;
  margin: 6px 0 12px;
  border-top: 1px solid rgba(29, 79, 158, 0.14);
  .stage { display: flex; align-items: center; gap: 7px; color: var(--accent); font: 500 11px var(--mono); }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: 0 0 auto; }
  .focus { color: var(--ink-soft); font: 13px/1.5 var(--body); }
  .stamp { color: var(--ink-faint); font: 10px/1.5 var(--mono); }
`;

export function ProjectProgress({ id }: { id: string }) {
  const activity = useProjectTracking(id);
  const tracker = trackers[id];
  if (!tracker) return null;
  return (
    <Summary>
      <span className="stage"><span className="dot" aria-hidden="true" />{stageNames[tracker.stage]}</span>
      <span className="focus">{tracker.focus}</span>
      {tracker.milestones[0] && <span className="stamp">Latest milestone · {tracker.milestones[0].title}</span>}
      {activity?.lastActivity && <span className="stamp">Repo activity · {projectDate(activity.lastActivity)}{activityIsStale(activity) ? ' · last known' : ''}</span>}
    </Summary>
  );
}

const Log = styled.section`
  margin: 24px 0;
  padding-top: 20px;
  border-top: 1px solid rgba(29, 79, 158, 0.16);
  h4 { margin-bottom: 14px; font: 600 18px var(--display); }
  .stage { display: inline-block; margin-bottom: 8px; color: var(--accent); font: 500 11px var(--mono); }
  .focus { color: var(--ink-soft); font-size: 14px; margin-bottom: 18px; }
  ol { list-style: none; border-left: 1px solid rgba(29, 79, 158, 0.25); margin: 0 0 20px 4px; }
  li { position: relative; padding: 0 0 18px 19px; }
  li:last-child { padding-bottom: 0; }
  li::before { content: ''; position: absolute; left: -4px; top: 6px; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
  time, .meta { display: block; color: var(--ink-faint); font: 10.5px/1.6 var(--mono); }
  strong { display: block; font-size: 14px; margin: 4px 0; }
  p { color: var(--ink-soft); font-size: 13px; line-height: 1.6; }
  a { color: var(--accent); font-size: 12px; text-underline-offset: 3px; }
  .sources { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 5px; }
  .activity { padding: 13px 15px; border: 1px solid var(--glass-edge); background: rgba(255, 255, 255, 0.25); border-radius: var(--radius-sm); }
  .activity > a { display: block; margin: 4px 0; }
  .empty { margin-bottom: 16px; }
`;

export function ProjectTimeline({ id }: { id: string }) {
  const activity = useProjectTracking(id);
  const tracker = trackers[id];
  if (!tracker) return null;
  return (
    <Log aria-label="Project log">
      <h4>Project log</h4>
      <span className="stage">{stageNames[tracker.stage]}</span>
      <p className="focus">{tracker.focus}</p>
      {tracker.milestones.length ? (
        <ol>
          {tracker.milestones.map((milestone) => (
            <li key={milestone.id}>
              <time dateTime={milestone.date}>{projectDate(milestone.date)}</time>
              <strong>{milestone.title}</strong><p>{milestone.summary}</p>
              <span className="sources">{milestone.sources.filter((url) => githubSource(url, tracker.repo)).map((url, i) => <a href={url} key={url} target="_blank" rel="noopener noreferrer">Source {i + 1} ↗</a>)}</span>
            </li>
          ))}
        </ol>
      ) : <p className="empty">A running log of what changes next.</p>}
      {activity ? (
        <div className="activity">
          <span className="meta">From GitHub · repository activity</span>
          {activity.lastActivity && (activity.commitUrl ? <a href={activity.commitUrl} target="_blank" rel="noopener noreferrer">Latest commit · {projectDate(activity.lastActivity)} ↗</a> : <p>Latest commit · {projectDate(activity.lastActivity)}</p>)}
          {activity.release && <a href={activity.release.url} target="_blank" rel="noopener noreferrer">Release · {activity.release.name} ↗</a>}
          <span className="meta">{activityIsStale(activity) ? 'Last known activity · checked' : 'Checked'} {projectDate(activity.checkedAt)}</span>
        </div>
      ) : <a href={`https://github.com/${tracker.repo}`} target="_blank" rel="noopener noreferrer">Follow on GitHub ↗</a>}
    </Log>
  );
}
