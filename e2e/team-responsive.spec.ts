import { test, expect } from '@playwright/test';

// 最初のメンバーの slug は src/lib/team.ts の TEAM_MEMBERS[0].slug = "leo"
const FIRST_SLUG = 'leo';

const BREAKPOINTS = [
  { label: '375px', width: 375, height: 812 },
  { label: '768px', width: 768, height: 1024 },
  { label: '1280px', width: 1280, height: 800 },
] as const;

test.describe('Team pages: no horizontal scroll', () => {

  for (const bp of BREAKPOINTS) {
    test(`${bp.label}: /team に横スクロールなし`, async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto(`http://localhost:3000/team`);

      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      expect(scrollWidth).toBeLessThanOrEqual(windowWidth + 1);
    });

    test(`${bp.label}: /team/${FIRST_SLUG} に横スクロールなし`, async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto(`http://localhost:3000/team/${FIRST_SLUG}`);

      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      const windowWidth = await page.evaluate(() => window.innerWidth);
      expect(scrollWidth).toBeLessThanOrEqual(windowWidth + 1);
    });
  }

});
