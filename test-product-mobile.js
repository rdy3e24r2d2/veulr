const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // モバイル 375px
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000#product', { waitUntil: 'networkidle' });

  // スクリーンショット
  await page.screenshot({
    path: '/tmp/product-mobile-375px.png',
    fullPage: true,
  });

  // オーバーフロー確認
  const bodyWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Body width: ${bodyWidth}px, Viewport: 375px`);
  
  if (bodyWidth > 376) {
    console.log('⚠️  OVERFLOW detected!');
  } else {
    console.log('✓ No horizontal overflow');
  }

  // 画像確認
  const images = await page.locator('img[alt*="Document Finder"]').count();
  console.log(`Product images found: ${images}`);

  // BrowserFrame alt属性確認
  const browserFrameImages = await page.locator('[alt*="Document Finder"]').all();
  for (const img of browserFrameImages) {
    const alt = await img.getAttribute('alt');
    const width = await img.getAttribute('width');
    console.log(`  - ${alt} (width: ${width})`);
  }

  await browser.close();
  console.log('\n✓ Mobile test completed');
})();
