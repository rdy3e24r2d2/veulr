import { test, expect } from '@playwright/test';

test('Team detail page renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/team/leo');
  
  // ページが読み込まれたことを確認
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  console.log('✓ Detail page loaded');
  
  // Back link を確認
  const backLink = page.locator('text=← Team');
  await expect(backLink).toBeVisible({ timeout: 5000 });
  console.log('✓ Back link visible');
  
  // スクリーンショット
  await page.screenshot({ path: '/tmp/team-detail-leo.png' });
});
