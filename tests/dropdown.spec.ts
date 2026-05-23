import { test, expect,Page } from "@playwright/test";

test("dropdown Operations", async ({ page }) => {
  await page.goto('file:///C:/Users/Lenovo/Desktop/demoone.html');
 //await page.locator("#country").selectOption({"value": "4"});
 await page.locator("#country").selectOption("4");
 await page.waitForTimeout(2000);
  await page.locator("#country").selectOption({"label": "Australia"});
  await page.waitForTimeout(2000);
  await page.locator("#country").selectOption({"index": 4});
  await page.waitForTimeout(2000);

   await page.locator("#Citizen").selectOption("7");
   await page.waitForTimeout(2000);
await page.locator("#Citizen").selectOption({"label": "Citizen of USA"});
await page.waitForTimeout(2000);
await page.locator("#Citizen").selectOption({"index": 2});
  await page.waitForTimeout(2000);
//await page.locator("#Citizen").selectOption([{"value": "7"},{"index": 2},{"label": "Citizen of USA"}]); 
await page.locator("#Citizen").selectOption([ "7", "8","9"]); 
 await page.waitForTimeout(2000);    
  });