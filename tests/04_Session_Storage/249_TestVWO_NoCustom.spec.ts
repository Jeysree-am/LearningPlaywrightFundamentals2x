import {test,expect} from "@playwright/test";


test.use({storageState:"./user-session.json"});
test("VWO dashboardpage",async({page})=>{
await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004");
await expect(page).toHaveURL(/dashboard/);
console.log("Dashboard page is loaded -No  need to login");
await page.waitForTimeout(2000);
});

test("Go directly to settings page",async({page})=>{
    await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
    await expect(page).toHaveURL(/settings/);
    console.log("Settings page is loaded -No  need to login");
    await page.waitForTimeout(3000);
    });
