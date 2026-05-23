import { test, expect,Page } from "@playwright/test";

test("Assertion", async ({ page }) => {
  await page.goto('file:///C:/Users/Lenovo/Desktop/demoone.html');
  await expect(page.getByText("Username")).toBeVisible();
  await expect(page.getByText("Usernameonetre")).toBeHidden();
  await page.locator("#sddas").click();
    await expect(page.locator("#sddas")).toBeChecked();
   await page.locator("#sddas").uncheck();
   await expect(page.locator("#sddas")).not.toBeChecked();
   await expect(page.locator(".ewtei.hytghy")).toContainText("Open the terms");
   await expect(page.locator(".ewtei.hytghy")).toHaveText("Open the terms and conditions");
   await expect(page.locator("#kjhgtg").nth(0)).toHaveValue("12");
   await expect(page.locator(".ewtei.hytghy")).toHaveAttribute("href","https://www.flipkart.com/");

   await expect(page).toHaveURL("file:///C:/Users/Lenovo/Desktop/demoone.html");
   await expect(page).toHaveTitle("");
const e = null
   const title = await page.title();
   expect(e).toBeNull();
   expect(title).toBe("");
expect(2+2).toBe(4);




}   );