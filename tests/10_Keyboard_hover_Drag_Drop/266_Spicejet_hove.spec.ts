import{test,expect} from '@playwright/test';
test('verify Hover',async({page})=>{
    await page.goto("https://www.spicejet.com/");
    await page.getByText("Add-ons",{exact:true}).hover();
    await page.getByTestId('test-id-Extra Seat').click();
    
});