import{test,expect, FrameLocator} from '@playwright/test';
test('Verify nested Iframes element',async({page})=>{
    await page.goto("https://selectorshub.com/iframe-scenario/");
    let frame1:FrameLocator = await page.frameLocator('#pact1').first();
    let frame2:FrameLocator= await frame1.frameLocator('#pact2');
    let frame3:FrameLocator= await frame2.frameLocator('#pact3');

    await frame1.locator('#inp_val').fill('Rajani');
    await frame2.locator('#jex').fill('Lion');
    await frame3.locator('#glaf').fill('Playwright');

    const headerText= await frame1.locator('h3').innerText();
    console.log(headerText);


})