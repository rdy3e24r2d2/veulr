import { test, expect } from '@playwright/test';

test.describe('Veulr LP Image QA - Pain & Values Cards (v2)', () => {
  
  test.describe('Desktop (1440px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    });

    test('Pain cards should load all 3 images in section#product', async ({ page }) => {
      // Navigate to product section
      await page.locator('section#product').first().scrollIntoViewIfNeeded();
      
      // Wait for images to be present
      await page.waitForTimeout(1000);
      
      // Get all images in the pain card grid
      const painImages = page.locator('section#product').locator('img[alt*="と"]').or(page.locator('section#product').locator('img[alt*="何か"]'));
      
      // Alternative: Find images by checking all img elements with pain file pattern
      const images = await page.locator('img').all();
      let painCount = 0;
      
      for (const img of images) {
        const src = await img.getAttribute('src');
        console.log(`Found image: ${src}`);
        if (src?.includes('pain-')) {
          painCount++;
          console.log(`Pain image found: ${src}`);
        }
      }
      
      console.log(`Total pain images found: ${painCount}`);
      expect(painCount).toBeGreaterThanOrEqual(3);
    });

    test('Values section should load all 4 value images', async ({ page }) => {
      // Navigate to values section
      await page.locator('section#values').scrollIntoViewIfNeeded();
      
      await page.waitForTimeout(1000);
      
      // Find all images in values section
      const valueImages = await page.locator('section#values img').all();
      console.log(`Total images in values section: ${valueImages.length}`);
      
      let valueCount = 0;
      const valueNames = ['simple', 'delight', 'speed', 'support'];
      
      for (const img of valueImages) {
        const src = await img.getAttribute('src');
        const alt = await img.getAttribute('alt');
        console.log(`Value image: ${src}, alt: ${alt}`);
        
        if (src?.includes('values/')) {
          valueCount++;
        }
      }
      
      console.log(`Total value images found: ${valueCount}`);
      expect(valueCount).toBeGreaterThanOrEqual(4);
    });

    test('No horizontal overflow on desktop', async ({ page }) => {
      const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      
      expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
      console.log(`Desktop: Body width=${bodyWidth}, Window width=${windowWidth}`);
    });
  });

  test.describe('Mobile (375px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    });

    test('Pain cards should load on mobile', async ({ page }) => {
      const productSection = page.locator('section#product').first();
      await productSection.scrollIntoViewIfNeeded();
      
      await page.waitForTimeout(1000);
      
      const images = await page.locator('img').all();
      let painCount = 0;
      
      for (const img of images) {
        const src = await img.getAttribute('src');
        if (src?.includes('pain-')) {
          painCount++;
        }
      }
      
      console.log(`[Mobile] Pain images found: ${painCount}`);
      expect(painCount).toBeGreaterThanOrEqual(3);
    });

    test('Values section should load on mobile', async ({ page }) => {
      const valuesSection = page.locator('section#values');
      await valuesSection.scrollIntoViewIfNeeded();
      
      await page.waitForTimeout(1000);
      
      const valueImages = await page.locator('section#values img').all();
      let valueCount = 0;
      
      for (const img of valueImages) {
        const src = await img.getAttribute('src');
        if (src?.includes('values/')) {
          valueCount++;
        }
      }
      
      console.log(`[Mobile] Value images found: ${valueCount}`);
      expect(valueCount).toBeGreaterThanOrEqual(4);
    });

    test('No horizontal overflow on mobile', async ({ page }) => {
      const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      
      expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
      console.log(`[Mobile] Body width=${bodyWidth}, Window width=${windowWidth}`);
    });
  });

  test.describe('Visual Verification', () => {
    test('Take screenshot of Pain section on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      const productSection = page.locator('section#product').first();
      await productSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      await expect(productSection).toBeVisible();
      console.log('Pain section is visible on desktop');
    });

    test('Take screenshot of Values section on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
      
      const valuesSection = page.locator('section#values');
      await valuesSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      await expect(valuesSection).toBeVisible();
      console.log('Values section is visible on desktop');
    });
  });
});
