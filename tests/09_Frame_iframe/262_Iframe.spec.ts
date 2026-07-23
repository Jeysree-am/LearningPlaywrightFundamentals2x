import{test,expect, FrameLocator} from '@playwright/test';
test('verify the Iframe section elements',async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/frames/");
let vehicleFrame:FrameLocator= await page.frameLocator("#frame-one");
await vehicleFrame.locator("#RESULT_TextField-1").fill("Hyundai Grand I10");
await vehicleFrame.locator('#RESULT_TextField-2').fill("Rahul");
await vehicleFrame.locator('#RESULT_TextField-3').fill('TN 23 AB-1254');
await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption("Hatchback");
await vehicleFrame.locator('#RESULT_TextField-4').fill('2026');
await vehicleFrame.locator('#RESULT_TextArea-1').fill('Amazing vehicle');
await vehicleFrame.getByTestId('vehicle-submit').click();
let output = await vehicleFrame.locator('#vehicle-output').innerText();
console.log(output);
await page.pause();


});