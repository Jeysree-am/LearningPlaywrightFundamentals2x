import{test,expect} from '@playwright/test';

test('Verify with webelement filter with pagination',async({page})=>{
      await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
        //Finding one person email and country
    let row;
while(true)
{
    row = page.locator('#employees-tbody tr').filter({hasText:'Luca Greco'});
        if(await row.count()){
            break;
        } 
        const next = page.getByTestId('next-page');
        if(await next.isDisabled()) throw  new Error("Row not found");
        await next.click();
    }
    const email = await row.locator('td[data-col="email"]').innerText();
     const country = await row.locator('td[data-col="country"]').innerText();

     console.log(email,country);
     await page.waitForTimeout(5000);
});