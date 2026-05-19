import { test, expect } from '@playwright/test';

test.describe('Veulr LP Image QA - Pain & Values Cards (Final)', () => {
  
  test.describe('Desktop (1440px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    });

    test('Pain cards: All 3 images displayed with correct content', async ({ page }) => {
      // Navigate to product section
      const productSection = page.locator('section#product').first();
      await productSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      // Find pain card images
      const painImages = await page.locator('section#product img').all();
      let painImageCount = 0;
      const painSrcs: string[] = [];
      
      for (const img of painImages) {
        const src = await img.getAttribute('src');
        if (src?.includes('pain-')) {
          painImageCount++;
          painSrcs.push(src || '');
          console.log(`✓ Pain image ${painImageCount}: ${src}`);
        }
      }
      
      expect(painImageCount).toBe(3);
      expect(painSrcs.some(s => s.includes('pain-01'))).toBeTruthy();
      expect(painSrcs.some(s => s.includes('pain-02'))).toBeTruthy();
      expect(painSrcs.some(s => s.includes('pain-03'))).toBeTruthy();
    });

    test('Values section: All 4 value card images visible', async ({ page }) => {
      // Navigate to values section
      const valuesSection = page.locator('section#values');
      await valuesSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      // Verify section is visible
      await expect(valuesSection).toBeVisible();
      
      // Find all images in values section
      const valueImages = await page.locator('section#values img').all();
      
      console.log(`Found ${valueImages.length} images in values section`);
      
      // Check for specific value titles via alt text
      const altTexts: string[] = [];
      for (const img of valueImages) {
        const alt = await img.getAttribute('alt');
        if (alt) {
          altTexts.push(alt);
          console.log(`✓ Value card image: alt="${alt}"`);
        }
      }
      
      // Verify all 4 values are present
      expect(altTexts).toContain('シンプル');
      expect(altTexts).toContain('感動');
      expect(altTexts).toContain('スピード');
      expect(altTexts).toContain('伴走支援');
    });

    test('Desktop: No horizontal overflow', async ({ page }) => {
      const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      
      console.log(`Desktop viewport: body=${bodyWidth}px, window=${windowWidth}px`);
      expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
    });

    test('Desktop: Images are loaded with valid dimensions', async ({ page }) => {
      const allImages = await page.locator('img').all();
      let validImageCount = 0;
      
      for (const img of allImages) {
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        const naturalHeight = await img.evaluate((el: HTMLImageElement) => el.naturalHeight);
        
        if (naturalWidth > 0 && naturalHeight > 0) {
          validImageCount++;
        }
      }
      
      console.log(`Valid images with dimensions: ${validImageCount}/${allImages.length}`);
      expect(validImageCount).toBeGreaterThan(0);
    });
  });

  test.describe('Mobile (375px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    });

    test('Mobile: Pain cards display correctly', async ({ page }) => {
      const productSection = page.locator('section#product').first();
      await productSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      const painImages = await page.locator('section#product img').all();
      let painImageCount = 0;
      
      for (const img of painImages) {
        const src = await img.getAttribute('src');
        if (src?.includes('pain-')) {
          painImageCount++;
        }
      }
      
      console.log(`[Mobile] Pain images found: ${painImageCount}`);
      expect(painImageCount).toBe(3);
    });

    test('Mobile: Values cards display correctly', async ({ page }) => {
      const valuesSection = page.locator('section#values');
      await valuesSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      await expect(valuesSection).toBeVisible();
      
      const valueImages = await page.locator('section#values img').all();
      const altTexts: string[] = [];
      
      for (const img of valueImages) {
        const alt = await img.getAttribute('alt');
        if (alt) {
          altTexts.push(alt);
          console.log(`[Mobile] Value: ${alt}`);
        }
      }
      
      expect(altTexts.length).toBe(4);
    });

    test('Mobile: No horizontal overflow', async ({ page }) => {
      const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      
      console.log(`Mobile viewport: body=${bodyWidth}px, window=${windowWidth}px`);
      expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
    });

    test('Mobile: Responsive layout works correctly', async ({ page }) => {
      // Check Pain section layout
      const productSection = page.locator('section#product').first();
      await productSection.scrollIntoViewIfNeeded();
      
      const painCards = productSection.locator('div').filter({ has: page.locator('img[src*="pain-"]') });
      await expect(painCards.first()).toBeVisible();
      
      console.log('Mobile: Pain cards layout verified');
    });
  });

  test.describe('Regression: Image Files Exist', () => {
    test('All pain image files should exist', async ({ page }) => {
      // Pain files: pain-01.jpg, pain-02.jpg, pain-03.jpg
      const painFiles = [
        '/images/pain-01.jpg',
        '/images/pain-02.jpg', 
        '/images/pain-03.jpg'
      ];
      
      for (const file of painFiles) {
        const response = await page.request.fetch(`http://localhost:3000${file}`);
        console.log(`Pain file ${file}: ${response.status()}`);
        expect(response.status()).toBe(200);
      }
    });

    test('All values image files should exist', async ({ page }) => {
      // Values files
      const valueFiles = [
        '/images/values/simple.jpg',
        '/images/values/delight.jpg',
        '/images/values/speed.jpg',
        '/images/values/support.jpg'
      ];
      
      for (const file of valueFiles) {
        const response = await page.request.fetch(`http://localhost:3000${file}`);
        console.log(`Values file ${file}: ${response.status()}`);
        expect(response.status()).toBe(200);
      }
    });
  });
});
