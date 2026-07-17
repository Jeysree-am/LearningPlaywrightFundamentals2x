import{test,expect} from'@playwright/test';

test('Verify the WebTable Element',async({page})=>{
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.getByRole("textbox", { name: "Username" }).fill('admin');
    await page.getByRole("textbox", { name: "Password" }).fill('Awesomeqa@4321');
    await page.getByRole("button", { name: "Login" }).click();
    // const firstPart = "//html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]";
    // const secondPart="/div/div[2]/div["
    // const thirdPart="/div/div["
    // const fourthPart="]"
await page.locator('i[class="oxd-icon bi-caret-up-fill"]').click();
await page.waitForTimeout(5000);

    //page.locator("//html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div")
    //page.locator("//html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[2]/div")
    //const row = await page.locator("//html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div").count();

//await page.locator('div[class="orangehrm-container"]').click();
 const rowCount= await page.locator('div[class="oxd-table-card"]').count();
 console.log(rowCount);
 const  getRow= await page.locator("div[role='row']");


 for (let i=1;1<=rowCount;i++){
    const rowData = await getRow.nth(i).innerText();

    if(rowData.includes("Terminated"))
    {
        console.log(`rowContent ${i}`,rowData);
         await page.locator('i[class="oxd-icon bi-trash"]').nth(i).click();
          await page.waitForTimeout(5000);
          break;
    }

 }


    //const rowCount= await page.locator("div[role='row']").count();
    

//const col=await page.locator("//html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div").count();
//console.log(col);


}
)
