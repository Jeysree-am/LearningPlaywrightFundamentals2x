import{test,expect} from '@playwright/test';
test('Verify keyboard actions',async({page})=>{
    await page.goto('https://keycode.info');

    await page.keyboard.press("Enter");
    await page.screenshot({path:'Enter.png'});

    await page.keyboard.press("Shift");
    await page.screenshot({path:'Shift.png'});

    await page.keyboard.press("A");
    await page.screenshot({path:'A.png'});

    await page.keyboard.press("Shift+8");
    await page.screenshot({path:'Shift8.png'});




});

