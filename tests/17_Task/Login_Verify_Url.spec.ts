import{test,expect} from '@playwright/test';
test('Verify the URL of the Login Page',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter?");
    const Login = page.locator("//input[@id='email']");
    await Login.fill('username@gmail.com');
    const  Password= page.locator("//input[@id='password']");
    await Password.fill('1234');
    await page.locator("//input[@type='checkbox']").check();
    await page.locator("//button[@data-testid='login-button']").click();
    await page.waitForTimeout(2000);
    const pageUrl:string = decodeURIComponent(await page.url()); // decodes the current url
    console.log(pageUrl);
    expect(pageUrl).toContain('username');
    console.log("Email Validated");
    expect(pageUrl).toContain('1234');
    console.log("Password Validated");
    expect(pageUrl).toContain('login-success');
    console.log("Login successful");


})