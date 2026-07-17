import {test,expect} from "@playwright/test";

  // First of all, go to the link of the web table, 
    // find the correct Helen Bennett, 
    // and then use a for loop to find the following 

test('verify the WebTable content',async({page})=>{
    await page.goto('https://awesomeqa.com/webtable.html');


    //const TableContent=//table[@id="customers"]/tbody/tr[2]/td[2]

    const firstPart="//table[@id='customers']/tbody/tr["
    const secondPart="]/td["

    const thirdPart="]"

    const rows= await page.locator("//table[@id='customers']/tbody/tr").count();
    const col= await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for(let i=2;i<=rows;i++){
        for(let j=1;j<=col;j++){
            const dynamicPath=`${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(dynamicPath);
            const data=await page.locator(dynamicPath).innerText();
            //console.log(data);
            
            if (data.includes('Helen Bennett')){
                const countryPath =`${dynamicPath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log("---------------");
                console.log(`Helen Bennet lives in ${countryText}`)

            }
        }
    }

});