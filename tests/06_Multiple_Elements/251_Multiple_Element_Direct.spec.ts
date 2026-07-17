import {test,expect} from "@playwright/test"




test('Basic verify of Multiple Elements',async({page})=> {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //await page.getByTestId("forgotten-password-link").click();
     await page.getByRole("link", { name: "Forgotten Password" }).click();
}
);
