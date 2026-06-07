import data from "../Files/data.json";
import { test, expect } from "@playwright/test";
import path from "path";

test.describe("Test Hooks in Playwright", () => {

test.beforeAll(() => {
  console.log("This will run before all tests");
});

test.afterAll(() => {
  console.log("This will run after all tests");
});     

test.beforeEach(() => {
  console.log("This will run before each test");
}   );

test.afterEach(() => {
  console.log("This will run after each test");
}   );

test("test 1", () => {
console.log("I am test one ");
});

test("test 2", () => {
  console.log("I am test two ");
  });

  test("test 3", () => {    
    console.log("I am test three ");
    }   );
})