import { test, expect,Page } from "@playwright/test";

test("alert handling", async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await page.waitForTimeout(2000); 
   await dialog.accept();
  });
  await page.locator(".btn.btn-danger").click(); 
 await page.waitForTimeout(2000);    
 await page.getByText("Alert with OK & Cancel ").click();
   page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await page.waitForTimeout(2000); 
   await dialog.dismiss();
  });
  await page.locator(".btn.btn-primary").click(); 
 await page.waitForTimeout(2000);  
 await page.getByText("Alert with Textbox ").click();
   page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await page.waitForTimeout(2000); 
   await dialog.accept("Welcome to Playwright");
  });
  await page.locator(".btn.btn-info").click(); //i am updating this line
 // i am saranya
 await page.waitForTimeout(2000);  
  });
 
  // Hello Ankit
// hello saranya