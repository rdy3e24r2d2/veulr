import { test, expect } from '@playwright/test';

test.describe('Veulr LP QA Suite', () => {
  const baseURL = 'http://localhost:3001';
  
  // Desktop tests
  test.describe('Desktop (1024px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 768 });
    });

    test('1. / ページが表示される（HTTP 200）', async ({ page }) => {
      const response = await page.goto('/');
      expect(response?.status()).toBe(200);
    });

    test('2. Hero セクション — スローガン「AI が身近に居る世界へ。」が表示される', async ({ page }) => {
      await page.goto('/');
      const heading = page.locator('h1:has-text("AI が身近に居る世界へ。")');
      await expect(heading).toBeVisible();
    });

    test('3. Proof セクション — カウンター3点が表示される', async ({ page }) => {
      await page.goto('/');
      await page.locator('text=AI が身近に居る世界へ。').scrollIntoViewIfNeeded();
      
      // 下にスクロールしてProofセクションを見つける
      const proofSection = page.locator('section:has(h2:has-text("Facts"))');
      await expect(proofSection).toBeVisible({ timeout: 5000 });
      
      // 3つのカウンターが表示されているか確認
      const counters = page.locator('[class*="text-3xl"][class*="font-bold"]');
      const count = await counters.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });

    test('4. Product セクション — "Document Finder" と "¥3,000" が表示される', async ({ page }) => {
      await page.goto('/');
      const productText = page.locator('text=Document Finder');
      await expect(productText).toBeVisible({ timeout: 5000 });
      
      const priceText = page.locator('text=¥3,000');
      await expect(priceText).toBeVisible();
    });

    test('5. Team セクション — "ジョブス"・"CEO"・"Claude Opus" が表示される', async ({ page }) => {
      await page.goto('/');
      
      const jobsName = page.locator('text=ジョブス');
      await expect(jobsName).toBeVisible({ timeout: 5000 });
      
      const ceoRole = page.locator('text=CEO');
      await expect(ceoRole).toBeVisible();
      
      const opusModel = page.locator('text=Claude Opus');
      await expect(opusModel).toBeVisible();
      
      // 10名全員確認
      const teamNames = ['ジョブス', 'ウォズ', 'アイブ', 'リッチー', 'ホーア', 
                         'ドラッカー', 'ファインマン', 'ノイマン', 'クック', 'ルース'];
      for (const name of teamNames) {
        const member = page.locator(`text=${name}`);
        await expect(member).toBeVisible();
      }
    });

    test('6. About セクション — 設立日「2026年5月5日」が表示される', async ({ page }) => {
      await page.goto('/');
      const establishDate = page.locator('text=2026年5月5日');
      await expect(establishDate).toBeVisible({ timeout: 5000 });
    });

    test('7. /tokushoho — 特定商取引法ページが表示され「愛知県岩倉市」が含まれる', async ({ page }) => {
      const response = await page.goto('/tokushoho');
      expect(response?.status()).toBe(200);
      
      const addressText = page.locator('text=愛知県岩倉市');
      await expect(addressText).toBeVisible();
    });

    test('8. Footer — 特定商取引法リンクが存在する', async ({ page }) => {
      await page.goto('/');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      
      const tokushohoLink = page.locator('a:has-text("特定商取引法")');
      await expect(tokushohoLink).toBeVisible({ timeout: 5000 });
    });
  });

  // Mobile tests (375px)
  test.describe('Mobile (375px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
    });

    test('9. モバイル375px — 横スクロール発生しない、各セクション正常表示', async ({ page }) => {
      await page.goto('/');
      
      // ページ幅をチェック
      const bodyWidth = await page.locator('body').evaluate((el) => el.offsetWidth);
      expect(bodyWidth).toBeLessThanOrEqual(375);
      
      // 主要セクションが表示されるか確認
      await expect(page.locator('h1:has-text("AI が身近に居る世界へ。")')).toBeVisible();
      
      // スクロール下げてセクション確認
      await page.locator('text=Document Finder').scrollIntoViewIfNeeded();
      await expect(page.locator('text=Document Finder')).toBeVisible();
      
      await page.locator('text=ジョブス').scrollIntoViewIfNeeded();
      await expect(page.locator('text=ジョブス')).toBeVisible();
    });
  });
});
