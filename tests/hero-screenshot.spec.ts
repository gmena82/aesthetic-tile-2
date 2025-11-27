import { test } from '@playwright/test';

test('take screenshot of hero section', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  // Take screenshot of hero section specifically
  const heroSection = await page.locator('#home');
  await heroSection.screenshot({ path: 'hero-section-screenshot.png' });
  
  console.log('Hero section screenshot saved');
});


