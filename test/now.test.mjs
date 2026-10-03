import { afterEach, mock, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

// Compile the actual browser client using the project's existing compiler.
const { outputText } = ts.transpileModule(readFileSync(new URL('../src/data/now.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { fetchNow } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const updated = '2026-10-03T12:00:00Z';
const fetched_at = '2026-10-01T12:00:00Z';
const envelope = (data) => Response.json({ schema_version: 2, updated, data });
afterEach(() => mock.restoreAll());

test('cached projects, writing, and heatmap survive with their original source timestamps', async () => {
  const projects = [{ name: 'human-work', last_activity_at: fetched_at, recently_active: true }];
  const posts = [{ title: 'An essay', published_at: fetched_at }];
  const calendar = [{ date: '2026-10-01', count: 7 }];
  const sources = {
    projects: { projects }, writing: { posts }, contributions: { calendar, last_7_days: 7 },
    stack: { languages: [{ name: 'TypeScript', repos: 2 }] },
  };
  mock.method(globalThis, 'fetch', async (url) => {
    const data = sources[new URL(url).pathname.split('/').at(-1)];
    return data ? envelope({ ...data, stale: true, fetched_at }) : new Response('', { status: 503 });
  });
  const data = await fetchNow();
  assert.deepEqual(data.projects, projects);
  assert.deepEqual(data.writing, posts);
  assert.deepEqual(data.contributions.calendar, calendar);
  assert.equal(data.stack.languages[0].name, 'TypeScript');
  for (const source of Object.keys(sources)) {
    assert.deepEqual(data.freshness[source], { stale: true, fetched_at });
    assert.notEqual(data.freshness[source].fetched_at, data.updated);
  }
  assert.equal(data.activity, null);
});

test('fresh, cached and unavailable sources remain distinct without losing coding totals', async () => {
  mock.method(globalThis, 'fetch', async (url) => {
    if (url.endsWith('/projects')) return envelope({ projects: [], stale: false, fetched_at: updated });
    if (url.endsWith('/contributions')) return envelope({ calendar: [], stale: true });
    if (url.endsWith('/activity')) return envelope({ coding: { total_seconds: 100, stale: true, fetched_at } });
    return new Response('', { status: 503 });
  });
  const data = await fetchNow();
  assert.deepEqual(data.freshness.projects, { stale: false, fetched_at: updated });
  assert.deepEqual(data.freshness.contributions, { stale: true, fetched_at: null });
  assert.equal(data.freshness.writing, null);
  assert.equal(data.activity.coding.total_seconds, 100);
  assert.equal(data.activity.coding.fetched_at, fetched_at);
  assert.deepEqual(data.writing, []);
});

test('complete outage still reports unavailability', async () => {
  mock.method(globalThis, 'fetch', async () => { throw new Error('offline'); });
  await assert.rejects(fetchNow(), /now API unreachable/);
});
