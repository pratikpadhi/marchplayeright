import { test,request, expect,Page } from "@playwright/test";

test("GET API testing", async ({page}) => {
    const apicontext = await request.newContext();
  const response = await apicontext.get("https://api.restful-api.dev/objects?id=3");
 
  expect(response.status()).toBe(200);  

//var product = await page.locator(".card-body").first().locator("h5").textContent();
var productvaluefromAPi = await response.json();
console.log(productvaluefromAPi[0].name);
});

test("POST API testing", async ({page}) => {

    const payload = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
};
    const apicontext = await request.newContext();
  const response = await apicontext.post("https://api.restful-api.dev/objects",{ 
    data:  payload ,
    headers: {
      "Content-Type": "application/json",
    }  
  })

 console.log(await response.json());

});

