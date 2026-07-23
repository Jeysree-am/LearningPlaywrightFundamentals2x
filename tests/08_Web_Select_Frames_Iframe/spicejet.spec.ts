import{test,expect} from '@playwright/test';
test('verify the select dropdown',async({page})=>{
    await page.goto("https://www.spicejet.com/");
    //await page.waitForLoadState("domcontentloaded");
    await page.getByTestId("to-testID-origin").click();
    await page.locator('[data-testid="to-testID-origin"] input').fill("De");
    await page.getByText("Delhi",{exact:true}).click();
    await page.waitForTimeout(2000);
    await expect(page.getByTestId("to-testID-origin").locator("input")).toHaveValue("Delhi (DEL)");

    await page.getByTestId("to-testID-destination").click();
    await page.locator("[data-testid='to-testID-destination'] input").fill('Ban');
    await page.getByText("Bengaluru",{exact:true}).click();
    await page.pause();
    await expect(page.getByTestId("to-testID-destination").locator("input")).toHaveValue("Bengaluru (BLR)");

    });