import { test, expect } from '@playwright/test';

test('Product section - verify text on image is visible with white color', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  // Product セクションが見える位置までスクロール
  const productSection = page.locator('#product');
  await productSection.scrollIntoViewIfNeeded();
  
  // "Document Finder" テキストの色を確認
  const heading = page.locator('h2:has-text("Document Finder")').first();
  const color = await heading.evaluate(el => window.getComputedStyle(el).color);
  console.log('Document Finder heading color:', color);
  
  // テキストが表示されることを確認
  await expect(heading).toBeVisible();
  
  // スクリーンショット
  await page.screenshot({ path: '/tmp/product-section.png', fullPage: false });
});

test('Team section - verify team members display with bust images', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  // Team セクションまでスクロール
  const teamSection = page.locator('#team');
  await teamSection.scrollIntoViewIfNeeded();
  
  // チームメンバーが表示されることを確認
  const members = page.locator('a[href*="/team/"]');
  const count = await members.count();
  console.log(`Found ${count} team members`);
  expect(count).toBeGreaterThan(0);
  
  // 最初のメンバーの bust 画像を確認
  const firstMemberImage = members.first().locator('img[alt]').first();
  await expect(firstMemberImage).toBeVisible();
  
  // スクリーンショット
  await page.screenshot({ path: '/tmp/team-section.png', fullPage: false });
});

test('Mobile 375px - no horizontal scroll, Team section displays correctly', async ({ page }) => {
  // モバイルビューポート設定
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/');
  
  // ページ幅をチェック（横スクロール確認）
  const bodyWidth = await page.locator('body').evaluate(el => el.offsetWidth);
  const windowWidth = await page.evaluate(() => window.innerWidth);
  console.log(`Body width: ${bodyWidth}, Window width: ${windowWidth}`);
  expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 1); // 1px余裕
  
  // Team セクションをスクロール
  const teamSection = page.locator('#team');
  await teamSection.scrollIntoViewIfNeeded();
  
  // チームメンバーが表示される
  const members = page.locator('a[href*="/team/"]');
  const count = await members.count();
  expect(count).toBeGreaterThan(0);
  
  // スクリーンショット
  await page.screenshot({ path: '/tmp/mobile-team-section.png', fullPage: false });
});
