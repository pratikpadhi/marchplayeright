import { test, expect,Page } from "@playwright/test";

test("Window handling", async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/multiple-windows/');
  await page.locator("#button1").nth(1).click();
  const newpage = await page.waitForEvent("popup");
  await newpage.locator("#nameInput").nth(0).fill("Vinoth");
  await page.locator("#button1").nth(0).click();
   const newpage1 = await page.waitForEvent("popup");
     await newpage1.locator("#roleInput").nth(0).fill("REWSR");
}   );