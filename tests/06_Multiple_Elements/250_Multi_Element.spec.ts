import {test,expect} from "@playwright/test"


// Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click

test('Basic verify of Multiple Elements',async({page})=> {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinks : string[] = await page.locator("a.list-group-item").allInnerTexts();
console.log(rightPanelLinks);


for (const linkText of rightPanelLinks){
    if(linkText ==="Forgotten Password")
    {
        let Text= page.getByText(linkText).first().click();
       

    }
}



});