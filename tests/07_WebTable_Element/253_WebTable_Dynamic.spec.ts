import{test,expect} from '@playwright/test';
test('Verify the Dymanic webTable Content',async({page})=>{
    await page.goto("https://awesomeqa.com/webtable1.html");

    const rows = page.locator('//table["Sample Table"] /tbody/tr')
    const rowcount=await rows.count();
    console.log(rowcount);
    for (let i=0;i<=rowcount;i++){
        const rowdata=await rows.nth(i).locator('td').allInnerTexts();
        console.log(`rows${i+1}`,rowdata)

    }

})