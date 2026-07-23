import{test,expect} from '@playwright/test';
test('Verify the select dropdown in advance',async({page})=>{

//Single-search
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    await page.getByTestId("rs-single").click();
    await page.getByTestId("rs-single-input").fill("cyp");
    await page.getByRole('option',{name:'Cypress'}).click();
//Multiple select

await page.locator("#rs-multi").click();
await page.getByRole('option',{name:'Pytest'}).click();
await page.getByRole('option',{name:'Playwright'}).click();
await page.getByRole('option',{name:'Junit'}).click();


await page.keyboard.press("Escape");

await page.getByTestId("rs-creatable").click();

await page.getByRole('option',{name:'Security'}).click();
await page.getByRole('option',{name:'api-testing'}).click();

await page.keyboard.press("Escape");



await page.getByTestId("rs-async").click();
await page.getByTestId("rs-async-input").fill('De');
await expect(page.getByTestId("rs-async-menu")).toContainText("Delhi");
await page.getByRole("option",{name:"Delhi"}).click();





})