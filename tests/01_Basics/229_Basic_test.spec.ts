import{test,expect}from'@playwright/test';
test('basic test',async({page})=>{
    await page.goto("https://app.wingify.com/#/login");
    await expect(page).toHaveTitle("Login - Wingify");
});
