import { test, expect,Page } from "@playwright/test";
import path from "path";

test("File Upload", async ({ page }) => {
  
  await page.goto('https://demoqa.com/upload-download');
  const filePath = path.join(__dirname, "../Files/AnilKumarV.docx");

  await page.locator("#uploadFile").setInputFiles(filePath);

  
}   );

test("File Upload two withouth html tag input and type attribute file", async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');
  const filePath = path.join(__dirname, "../Files/AnilKumarV.docx");
  const filePath2 = path.join(__dirname, "../Files/AnilKumar.docx");
  const filechooserPromise = page.waitForEvent("filechooser");
 await page.locator("#uploadFile").click();
 await page.waitForTimeout(3000);
 const filechooserEvent = await filechooserPromise;
  await filechooserEvent.setFiles(filePath);
}   );
//I am Ankit
