import { test, expect } from "@playwright/test";

test.use({storageState:"./user-session.json"});
test.describe("VWO — session reuse", () => {

test("VWO dashboardpage", async ({ page }, testInfo) => {
  await test.step("Navigate to VWO dashboard", async () => {
    await page.goto(
      "https://app.wingify.com/#/dashboard/get-started?accountId=1227004"
    );
     await page.waitForTimeout(2000);

     console.log("Open VWO dashboard using saved session — storageState applied, no login form hit");
            await testInfo.attach("step-0-dashboard-loaded", {
                body: await page.screenshot(),
                contentType: "image/png",
   
    });
  });

  await test.step("Verify dashboard URL", async () => {
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard page is loaded - No need to login");
    await page.waitForTimeout(2000);
    await testInfo.attach("step-1-dashboard-screenshot", {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  });

 
    });

test("Go directly to settings page", async ({ page }, testInfo) => {
  await test.step("Navigate to VWO settings page", async () => {
    await page.goto(
      "https://app.wingify.com/#/settings/accounts/general?accountId=1227007"
    );
    
    await testInfo.attach("step-0-settings-screenshot", {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  });

  await test.step("Verify settings URL", async () => {
    await expect(page).toHaveURL(/settings/);
    console.log("Settings page is loaded - No need to login");
    await testInfo.attach("step-1-settings-screenshot", {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  });
});
});
