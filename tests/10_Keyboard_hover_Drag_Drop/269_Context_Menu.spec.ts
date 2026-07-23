import{test,expect} from '@playwright/test';
test('Verify content menu',async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({button:'right'});
await page.pause();
    const allOptions:string[] = await page
    .locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions);
    await page.getByText("Copy",{exact:true}).first().click();

    
})