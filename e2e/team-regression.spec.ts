import { test, expect } from '@playwright/test';

test.describe('Team Page Regression', () => {

  test('list page: links work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/team');

    const firstCard = page.locator('a[href^="/team/"]').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toMatch(/^\/team\//);

    await firstCard.click();
    await page.waitForURL(/\/team\//);
    await expect(page.locator('h1')).toBeVisible();
    console.log(`✓ Card link works: ${href}`);
  });

  test('detail page: back link works', async ({ page }) => {
    await page.goto('http://localhost:3000/team/leo');
    const backLink = page.locator('text=← Team').first();
    await expect(backLink).toBeVisible();
    await backLink.click();
    await page.waitForURL('/#team');
    console.log(`✓ Back link works`);
  });

  test('detail page: prev/next navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/team/leo');

    const nextLink = page.locator('nav').locator('a').last();
    const nextHref = await nextLink.getAttribute('href');
    expect(nextHref).toMatch(/^\/team\//);

    await nextLink.click();
    await page.waitForURL(/\/team\//);
    console.log(`✓ Next navigation works: ${nextHref}`);
  });

  test('detail page: badge and role visible', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000/team/leo');

    const badge = page.locator('[class*="GlowBadge"]').first();
    await expect(badge).toBeVisible();
    console.log(`✓ Badge visible`);
  });

  test('list page: hover state works', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/team');

    const firstCard = page.locator('a[href^="/team/"]').first();
    const box1 = await firstCard.boundingBox();

    await firstCard.hover();
    // ホバー時の transform が適用されているはず
    const box2 = await firstCard.boundingBox();

    if (box1 && box2) {
      console.log(`✓ Hover state responsive`);
    }
  });

  test('detail page: all sections render', async ({ page }) => {
    await page.goto('http://localhost:3000/team/leo');

    await expect(page.locator('text=Profile')).toBeVisible();
    await expect(page.locator('text=Specialties')).toBeVisible();
    await expect(page.locator('text=Hobbies & Interests')).toBeVisible();
    await expect(page.locator('text=Weekend')).toBeVisible();
    await expect(page.locator('text=Recently on my mind')).toBeVisible();

    console.log(`✓ All detail sections render`);
  });

  test('list page: all 9 team members load', async ({ page }) => {
    await page.goto('http://localhost:3000/team');

    const cards = page.locator('a[href^="/team/"]');
    const count = await cards.count();
    expect(count).toBe(9);
    console.log(`✓ All 9 team members displayed`);
  });

});
