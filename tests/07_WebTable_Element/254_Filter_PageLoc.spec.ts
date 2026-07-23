import{test,expect} from "@playwright/test";
test('verify the link using filtermethod',async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const forgotPasswordlink = page.locator('a.list-group-item')
.filter({hasText:'Forgotten Password'});
await forgotPasswordlink.click();
await page.pause();

const privacyLink= page.locator('footer a').filter({hasText:'Privacy Policy'});
await expect(privacyLink).toHaveAttribute('href','#privacy-policy');
//await privacyLink.click();
await page.pause();
});
