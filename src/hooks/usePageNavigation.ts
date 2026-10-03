import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageNavigation(title: string) {
  const { pathname, hash, key } = useLocation();
  const anchorNavigation = hash ? key : '';

  useLayoutEffect(() => {
    document.title = title;
    // The browser can resolve an anchor before React mounts its target.
    const target = document.getElementById(hash.slice(1));
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const align = () => target.scrollIntoView({ behavior: 'instant' });
    align();

    // Keep anchors aligned as Now loads; stop when the visitor interacts.
    const observer = new ResizeObserver(align);
    const now = document.getElementById('now');
    if (now) observer.observe(now);
    const controller = new AbortController();
    const stop = () => {
      observer.disconnect();
      controller.abort();
    };
    for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown']) {
      window.addEventListener(event, stop, { passive: true, signal: controller.signal });
    }
    return stop;
  }, [pathname, hash, title, anchorNavigation]);
}
