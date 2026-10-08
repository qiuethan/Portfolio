import { useSyncExternalStore } from 'react';
import { ACTIVITY_URL, parseActivity } from '../data/projectTracking';
import type { RepositoryActivity } from '../data/projectTracking';

// A single request and refresh timer shared by every card and the open dialog.
let cache: Record<string, RepositoryActivity> | null = null;
let pending = false;
let timer: ReturnType<typeof setInterval> | undefined;
const listeners = new Set<() => void>();
async function refresh() {
  if (pending) return;
  pending = true;
  try {
    const response = await fetch(ACTIVITY_URL, { signal: AbortSignal.timeout(10_000), credentials: 'omit' });
    if (!response.ok) throw new Error('Project activity unavailable');
    cache = parseActivity(await response.json());
  } catch {
    // Retain the last known facts with their original timestamp during an outage.
    if (cache) cache = { ...cache };
  } finally {
    pending = false;
    listeners.forEach((listener) => listener());
  }
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    void refresh();
    timer = setInterval(() => void refresh(), 5 * 60 * 1000);
  }
  return () => { listeners.delete(listener); if (!listeners.size) clearInterval(timer); };
}
const getSnapshot = () => cache;
const getServerSnapshot = () => null;
export function useProjectTracking(id: string) {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)?.[id];
}
