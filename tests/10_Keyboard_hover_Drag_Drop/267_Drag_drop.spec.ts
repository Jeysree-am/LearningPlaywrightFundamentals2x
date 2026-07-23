import{test,expect} from '@playwright/test';
test('Verify Drag and drop',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    let colA= await page.locator('#column-a');
     let colB = await page.locator('#column-b');
     await colA.dragTo(colB);
     await page.pause();

})