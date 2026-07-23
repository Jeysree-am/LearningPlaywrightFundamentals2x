import{test,expect} from '@playwright/test';
test('Verify the country of the person on webtable',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
   
  const row = page.locator('#companies-table  tr').filter({hasText:'Yoshi Tannamuri'});
 
        const rowDataPath =  row.locator('[data-col="country"]')
        const rowData =await rowDataPath.innerText();

        console.log(`Yoshi Tannamuri country is ${rowData}`);
   
});