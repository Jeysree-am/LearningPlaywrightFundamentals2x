import{test,expect} from '@playwright/test';
test('Handle  JS Alert ',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //register the dialog befor handling the trigger

    page.once('dialog',async dialog =>{
        console.log('Alert Type:',dialog.type());
        console.log('Alert Message:',dialog.message());
        expect(dialog.message()).toBe("I am a JS Alert");
        await dialog.accept();
    });

    await page.getByRole('button',{name:'Click for JS Alert'}).click();
  

//Dialog with ok and cancel
page.once('dialog',async dialog=>{
    console.log('Alert Type:',dialog.type());
    console.log("Alert Message:",dialog.message());
    expect(dialog.message()).toBe("I am a JS Confirm");
    await dialog.accept();

});
await page.locator('//button [text()="Click for JS Confirm"]').click();

//Dialog accepts input text

page.once('dialog',async dialog=>{
    await dialog.accept('inputText');
    await page.pause();
});

await page.locator('button',{hasText:'Click for JS Prompt'}).click();
    });
