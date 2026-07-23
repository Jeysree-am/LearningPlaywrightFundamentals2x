import{test,expect, FrameLocator, Locator} from '@playwright/test';
test('Verify the  elements of Multiple Iframes in frameset',async({page})=>{
      await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
      let mainFrame :FrameLocator = await page.frameLocator('[name ="main"]');
      const headerText= await mainFrame.locator('h2').innerText();
      console.log(headerText);


      const allFrames:Locator[]= await page.locator('//frame').all();
      console.log('total number of frames:'+allFrames.length);
   
       for(const frame of allFrames){
        console.log(await frame.getAttribute('name'),':',await frame.getAttribute('src'));
           }

           let sideFrame:FrameLocator= await page.frameLocator('[name="side"]');
           await sideFrame.getByTestId('side-link-registration').click();
           await page.pause();

await mainFrame.locator("#RESULT_TextField-1").fill("Hyundai Grand I10");
await mainFrame.locator('#RESULT_TextField-2').fill("Rahul");
await mainFrame.locator('#RESULT_TextField-3').fill('TN 23 AB-1254');
await mainFrame.locator('#RESULT_RadioButton-1').selectOption("Hatchback");
await mainFrame.locator('#RESULT_TextField-4').fill('2026');
await mainFrame.locator('#RESULT_TextArea-1').fill('Amazing vehicle');
await mainFrame.getByTestId('vehicle-submit').click();
let output = await mainFrame.locator('#vehicle-output').innerText();
console.log(output)


   await page.pause();
  


})