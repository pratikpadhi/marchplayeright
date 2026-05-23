import { test, expect,Page } from "@playwright/test";

test("Frame Handeling", async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/iframe/');
  const frame = page.frameLocator("[name=employeetable]");
  await expect(frame.getByText("Project Details")).toBeVisible();
  await expect(page.locator("//img[@alt='Vinoth Tech Solutions']").nth(0)).toBeVisible();


   }   )

   test("chained Frame Handeling", async ({ page }) => {
  await page.goto('https://demoqa.com/nestedframes');
  const frame = page.frameLocator("#frame1Wrapper iframe");
  const frame1 = frame.frameLocator("iframe");
 
  await expect(frame1.getByText("Child Iframe")).toBeVisible();
  

   }   )