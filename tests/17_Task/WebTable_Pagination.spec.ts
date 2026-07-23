import{test,expect} from '@playwright/test';
test('Verify the WebTable element data',async({page})=>{

await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
let row;
while(true)
{
    row = page.locator('#employees-tbody tr').filter({hasText:'Mia Hoffmann'});
        if(await row.count()){
            break;
        } 
        const next = page.getByTestId('next-page');
        if(await next.isDisabled()) throw  new Error("Row not found");
        await next.click();
    }
    const email = await row.locator('td[data-col="email"]').innerText();
    console.log(`Mia Hoffmann email is ${email}`);



});
