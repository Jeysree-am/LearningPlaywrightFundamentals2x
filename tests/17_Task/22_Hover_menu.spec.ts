import{test,expect, Locator} from '@playwright/test';
test('verify hover and click the child element',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
   await page.getByTestId('nav-add-ons').hover();
   const subMenus:Locator[] = await page.locator('[data-testid="nav-add-ons"] .submenu a').all()
   console.log('count of subMenus:'+subMenus.length);
   for(const subMenu of subMenus){
    const subMenuText = await subMenu.innerText();
    console.log("SubMenu Text:"+subMenuText);
   }
   await page.getByTestId('test-id-Wifi').click();
   const output= await page.locator('#output').allInnerTexts();
   console.log(output);
    await page.pause();

});