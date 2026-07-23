import{test,expect,FrameLocator, Locator} from '@playwright/test';
test('Verify Advance Drap and drop',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");
    // const colA = await page.getByTestId("card-ci-stability");
    // const colB= await page.getByTestId('col-in-progress');
    // await colA.dragTo(colB);
    // await page.pause();

    //Manual Mouse path for exact location to place

    let source:Locator =  page.locator('#card-ci-stability');
    const sBox=(await source.boundingBox())!;
    let target:Locator = page.locator('[data-status="in-progress"]');
    const tBox= (await target.boundingBox())!;


    await page.mouse.move(sBox.x + sBox.width /2,sBox.y + sBox.height/2);
    await page.mouse.down();
    await page.mouse.move(tBox.x+tBox.width/2,tBox.y+tBox.height/2,{steps:10});
    await page.mouse.up();

    await page.pause();


   

});