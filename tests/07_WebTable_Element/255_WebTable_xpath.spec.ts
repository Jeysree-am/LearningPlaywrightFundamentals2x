import{test,expect} from '@playwright/test';
test('Verify the xpath in WebTable',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    //await page.locator("//td[text()='Aarav.sharma']/preceding-sibling::td/input[@type='checkbox']").click();
  //await page.waitForTimeout(6000);

    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();
   

})