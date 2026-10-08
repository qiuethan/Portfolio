import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('https://now.ethanqiu.ca/api/**', (route) => route.fulfill({ status: 503, body: '{}' }));
  await page.route('**/portfolio-sync/activity.json', (route) => route.fulfill({ json: {
    version: 1, checkedAt: new Date().toISOString(), projects: {
      misty: { repo: 'UTMIST/Misty', checkedAt: new Date().toISOString(), lastActivity: '2026-10-01T12:00:00Z', commitUrl: 'https://github.com/UTMIST/Misty/commit/abc', release: null },
    },
  } }));
});

test('home tracker opens a shareable dialog, preserves focus, and supports back/forward', async ({ page }) => {
  await page.goto('/?view=human');
  const card = page.getByRole('button', { name: 'Read about Misty', exact: true });
  await expect(card.getByText('Building', { exact: true })).toBeVisible();
  await expect(card.getByText('Repo activity', { exact: false })).toBeVisible();
  await card.click();
  await expect(page).toHaveURL(/project=misty/);
  const dialog = page.getByRole('dialog', { name: 'Misty', exact: true });
  await expect(dialog.getByRole('heading', { name: 'Project log' })).toBeVisible();
  await expect(dialog.getByRole('link', { name: /Latest commit/ })).toHaveAttribute('href', /UTMIST\/Misty\/commit/);
  await page.goBack();
  await expect(dialog).not.toBeVisible();
  await page.goForward();
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(card).toBeFocused();
});

test('direct links find later pages and experiments, and invalid IDs keep the library usable', async ({ page }) => {
  await page.goto('/work?project=mist&view=human');
  await expect(page.getByRole('dialog', { name: 'Mist', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await expect(page.getByText('Page 3 of 3')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Read about Mist', exact: true })).toBeVisible();
  await page.goto('/work?project=archctl&view=human');
  await expect(page.getByRole('dialog', { name: 'archctl', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await expect(page.getByRole('tab', { name: /Experiments/ })).toHaveAttribute('aria-selected', 'true');
  await page.goto('/work?project=not-a-project&page=garbage&view=human');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.getByText('Page 1 of 3')).toBeVisible();
});

test('stale facts are labeled and an unavailable feed does not remove the approved tracker', async ({ page }) => {
  await page.route('**/portfolio-sync/activity.json', (route) => route.fulfill({ json: {
    version: 1, projects: { misty: { repo: 'UTMIST/Misty', checkedAt: '2026-01-01T00:00:00Z', lastActivity: '2025-12-31T12:00:00Z', commitUrl: 'javascript:alert(1)', release: null } },
  } }));
  await page.goto('/work?project=misty&view=human');
  await expect(page.getByRole('dialog').getByText(/Last known activity/)).toBeVisible();
  await expect(page.locator('a[href^="javascript:"]')).toHaveCount(0);
  await page.route('**/portfolio-sync/activity.json', (route) => route.fulfill({ status: 503, body: '{}' }));
  await page.reload();
  await expect(page.getByRole('dialog').getByText('Building', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Follow on GitHub' })).toBeVisible();
});

test('mobile project log stays inside the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/work?project=misty&view=human');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const bounds = await dialog.boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(390);
  await dialog.getByRole('heading', { name: 'Project log' }).scrollIntoViewIfNeeded();
  await expect(dialog.getByRole('heading', { name: 'Project log' })).toBeVisible();
  await page.screenshot({ path: 'test-results/project-log-mobile.png' });
});
