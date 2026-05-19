import { test, expect } from '@playwright/test';

test.describe('Light Theme Verification', () => {
  test('375px: Home page default light theme', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).not.toContain('dark');
    
    // Verify main content is visible
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('1280px: Home page default light theme', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).not.toContain('dark');
  });

  test('375px: Theme toggle Moon→Dark', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    const btn = page.locator('button[aria-label*="ダークモード"]').first();
    await expect(btn).toBeVisible();
    
    await btn.click();
    await page.waitForTimeout(200);
    
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).toContain('dark');
  });

  test('375px: Theme toggle Sun→Light', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    // Dark
    const moonBtn = page.locator('button[aria-label*="ダークモード"]').first();
    await moonBtn.click();
    await page.waitForTimeout(200);
    
    // Back to light
    const sunBtn = page.locator('button[aria-label*="ライトモード"]').first();
    await sunBtn.click();
    await page.waitForTimeout(200);
    
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).not.toContain('dark');
  });

  test('375px: Team page light theme', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/team');
    await page.waitForLoadState('networkidle');
    
    const htmlClass = await page.locator('html').getAttribute('class');
    expect(htmlClass).not.toContain('dark');
  });

  test('375px: No horizontal scroll after toggle', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    const btn = page.locator('button[aria-label*="ダークモード"]').first();
    await btn.click();
    await page.waitForTimeout(200);
    
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    expect(scrollWidth).toBeLessThanOrEqual(windowWidth + 1);
  });

  test('1280px: Contact page not broken', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/contact');
    await page.waitForLoadState('networkidle');
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });
});
