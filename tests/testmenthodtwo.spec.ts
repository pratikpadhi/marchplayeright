import { test, expect } from "@playwright/test";


test("Good reporting", () => {
    test.step("This is my first step", () => {
   console.log("This is my first test");
    });

    test.step("This is my second step", () => {
        console.log("This is my second log");       
    });

    test.step("This is my third step", () => {  
   
   console.log("This is my third log");
 
    });
});
