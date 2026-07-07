import { createBdd } from "playwright-bdd";
import { test, expect } from "../../playwright-fixture";
import { UserService } from "../../src/user";

const { Given, When, Then } = createBdd(test);

let userService: UserService;
let result: ReturnType<UserService["validate"]>;

Given("the application is ready", async ({ page }) => {
  await page.goto("/");
  userService = new UserService();
});

When("the user triggers userservice", async () => {
  result = userService.validate();
});

Then("the system responds with the expected result", async () => {
  expect(result).toEqual({ success: true });
});
