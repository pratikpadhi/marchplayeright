import data from "../Files/data.json";
import { test, expect } from "@playwright/test";
import path from "path";

test("read JSON data", () => {
console.log(data.roles[1]); // Output: John Doe
console.log(data.username);
console.log(data.Address[1].city);
console.log(data.preferences.theme);
});


test("Take Screenshot", async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  const filePath = path.join(__dirname, "../Files/basescreenshot.png");
  await page.screenshot({ path: filePath , fullPage: true});
  });

  test("compare Screenshot", async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  const filePath = path.join(__dirname, "../Files/basescreenshot.png");
 expect(await page.screenshot({fullPage: true})).toMatchSnapshot(filePath, {threshold: 0.5});
  });