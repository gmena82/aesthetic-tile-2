import { test } from '@playwright/test';

test('take screenshot of video section', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Scroll to video section
  await page.evaluate(() => {
    const videoSection = document.querySelector('section:has(h2:text("See Our Craftsmanship in Action"))');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
  
  await page.waitForTimeout(1000);
  
  // Take screenshot
  await page.screenshot({ path: 'video-section-screenshot.png' });
  
  console.log('Video section screenshot saved');
});


