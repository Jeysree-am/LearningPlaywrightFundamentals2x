import{test,expect, Page,Locator} from '@playwright/test'

async function findRowByName(page: Page,name: string): Promise<Locator>{

while(true)
{
    const row = page.locator('#employees-tbody tr').filter({hasText:name});
        if(await row.count()) return row;
        
        const next = page.getByTestId('next-page');
        if(await next.isDisabled()) throw  new Error(`Row not found:${name}`);
        await next.click();
    }
}
test('verify the pagination of webtable element using function',async({page})=>{
    //find one person's email and country
await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name:string ="Yuki Sato";
    const row = await findRowByName(page,"Yuki Sato");
    const email= await row.locator('td[data-col="email"]').innerText();
    const country= await row.locator('td[data-col="country"]').innerText();
    
        console.log(email,country);
        await page.waitForTimeout(5000);




})