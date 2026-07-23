import{test,expect} from '@playwright/test';
test('Verify Custom dropdom like listbox',async({page})=>{


    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.getByTestId("lang-trigger").click();
    await page.getByRole("option",{name:"JavaScript"}).click();




    await page.getByTestId("experience-trigger").click();
    await page.getByText("Senior (7+ years)",{exact:true}).click();
    await page.getByTestId("dropdown-save").click();
    const output = await page.locator('#dropdown-output').innerText();
    console.log(output);
    await expect(page.locator('#dropdown-output')).toContainText("Senior (7+ years)");

});