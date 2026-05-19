import { test, expect } from '@playwright/test';

test.describe('Veulr LP Image QA - Pain & Values Cards', () => {
  
  test.describe('Desktop (1440px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
    });

    test('Pain cards should load all 3 images', async ({ page }) => {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      // Scroll to Pain section
      await page.locator('section').filter({ hasText: /Pain|Challeng/i }).first().scrollIntoViewIfNeeded();
      
      // Check all 3 pain images exist and are visible
      for (let i = 1; i <= 3; i++) {
        const img = page.locator(`img[src*="pain-0${i}.jpg"]`);
        await expect(img).toBeVisible({ timeout: 5000 });
        const isVisible = await img.isVisible();
        console.log(`pain-0${i}.jpg visible: ${isVisible}`);
      }
    });

    test('Values cards should load all 4 images', async ({ page }) => {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      // Scroll to Values section
      await page.locator('section').filter({ hasText: /Values/i }).first().scrollIntoViewIfNeeded();
      
      // Check all 4 values images
      const valueImages = ['simple', 'delight', 'speed', 'support'];
      for (const value of valueImages) {
        const img = page.locator(`img[src*="values/${value}.jpg"]`);
        await expect(img).toBeVisible({ timeout: 5000 });
        const isVisible = await img.isVisible();
        console.log(`values/${value}.jpg visible: ${isVisible}`);
      }
    });

    test('No horizontal overflow on desktop', async ({ page }) => {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      
      expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
      console.log(`Body width: ${bodyWidth}, Window width: ${windowWidth}`);
    });
  });

  test.describe('Mobile (375px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
    });

    test('Pain cards should load all 3 images on mobile', async ({ page }) => {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      // Scroll to Pain section
      const painSection = page.locator('section').filter({ hasText: /Pain|Challeng/i }).first();
      await painSection.scrollIntoViewIfNeeded();
      
      // Check all 3 pain images
      for (let i = 1; i <= 3; i++) {
        const img = page.locator(`img[src*="pain-0${i}.jpg"]`);
        await expect(img).toBeVisible({ timeout: 5000 });
        const isVisible = await img.isVisible();
        console.log(`[Mobile] pain-0${i}.jpg visible: ${isVisible}`);
      }
    });

    test('Values cards should load all 4 images on mobile', async ({ page }) => {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      // Scroll to Values section
      const valuesSection = page.locator('section').filter({ hasText: /Values/i }).first();
      await valuesSection.scrollIntoViewIfNeeded();
      
      // Check all 4 values images
      const valueImages = ['simple', 'delight', 'speed', 'support'];
      for (const value of valueImages) {
        const img = page.locator(`img[src*="values/${value}.jpg"]`);
        await expect(img).toBeVisible({ timeout: 5000 });
        const isVisible = await img.isVisible();
        console.log(`[Mobile] values/${value}.jpg visible: ${isVisible}`);
      }
    });

    test('No horizontal overflow on mobile', async ({ page }) => {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      
      expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
      console.log(`[Mobile] Body width: ${bodyWidth}, Window width: ${windowWidth}`);
    });
  });

  test.describe('Image Quality & Loading', () => {
    test('All pain images should have valid dimensions', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      for (let i = 1; i <= 3; i++) {
        const img = page.locator(`img[src*="pain-0${i}.jpg"]`);
        const width = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        const height = await img.evaluate((el: HTMLImageElement) => el.naturalHeight);
        
        console.log(`pain-0${i}.jpg dimensions: ${width}x${height}`);
        expect(width).toBeGreaterThan(0);
        expect(height).toBeGreaterThan(0);
      }
    });

    test('All values images should have valid dimensions', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      const valueImages = ['simple', 'delight', 'speed', 'support'];
      for (const value of valueImages) {
        const img = page.locator(`img[src*="values/${value}.jpg"]`);
        const width = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        const height = await img.evaluate((el: HTMLImageElement) => el.naturalHeight);
        
        console.log(`values/${value}.jpg dimensions: ${width}x${height}`);
        expect(width).toBeGreaterThan(0);
        expect(height).toBeGreaterThan(0);
      }
    });
  });
});
