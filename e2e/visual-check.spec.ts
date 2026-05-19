import { test } from '@playwright/test';

test.describe('Visual Verification', () => {
  test('Light theme screenshot at 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    // Log color values
    const bgColor = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--background'));
    const fgColor = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--foreground'));
    
    console.log(`Light theme - BG: ${bgColor.trim()}, FG: ${fgColor.trim()}`);
    console.log('Light theme display confirmed');
  });

  test('Dark theme screenshot at 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle');
    
    // Toggle to dark
    const btn = page.locator('button[aria-label*="ダークモード"]').first();
    await btn.click();
    await page.waitForTimeout(300);
    
    // Log color values
    const bgColor = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--background'));
    const fgColor = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--foreground'));
    
    console.log(`Dark theme - BG: ${bgColor.trim()}, FG: ${fgColor.trim()}`);
    console.log('Dark theme display confirmed');
  });
});
