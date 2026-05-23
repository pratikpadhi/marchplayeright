import { test, expect,Page } from "@playwright/test";

test("Mouse Operations", async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/mouse-event/');
  await page.locator("#doubleBtn").dblclick();
  await page.waitForTimeout(2000);
  await page.locator("#rightBtn").click({ button: "right" });
  await page.waitForTimeout(2000);
  const source = await page.locator("#dragItem");
  const target = await page.locator("#dropZone");
  await source.dragTo(target);
  await page.waitForTimeout(2000);
  await page.locator("#tooltipTarget").hover();
  await page.waitForTimeout(2000);

  await page.evaluate(() => {
    window.scrollBy(0, 500);
    //window.scrollTo(0, document.body.scrollHeight);
  });
 await page.waitForTimeout(2000);
  const tooltipText = await page.locator("#handle_max")
  const slider= await tooltipText.boundingBox();
  if (slider) {
    const startx = slider.x+slider.width/2;
    const starty = slider.y+slider.height/2;
    await page.mouse.move(startx, starty);
    await page.mouse.down();
    await page.mouse.move(startx+100, starty+100);
    await page.mouse.up();
  }
await page.waitForTimeout(2000);
});






test("Verify the title of the page", async ({ page }) => {
  /*
  await page.goto('file:///C:/Users/Lenovo/Desktop/demoone.html');
  //await page.locator("//input").nth(0).fill("Drew");
  //await page.locator("#sddas").click();
  await page.locator("#sddas").check({force:true});
  await expect(page.locator("#sddas")).toBeChecked();
  await page.locator("#sddas").uncheck();
    await expect(page.locator("#sddas")).not.toBeChecked();
    await page.locator("#kjhgtg").click({force:true});
 const text = await page.locator(".ewtei.hytghy").textContent();
 console.log(text);
 */
});





