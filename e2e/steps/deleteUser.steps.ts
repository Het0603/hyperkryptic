import { createBdd } from "playwright-bdd";
import { test, expect } from "../../playwright-fixture";
import { deleteUser, type DeleteUserResult } from "../../src/user";

const { Given, When, Then } = createBdd(test);

let deleteUserResult: DeleteUserResult;

Given("the application is ready", async ({ page }) => {
  await page.goto("/");
});

When("the user triggers deleteuser", async () => {
  deleteUserResult = deleteUser("test-user-id");
});

Then("the system responds with the expected result", async () => {
  expect(deleteUserResult.success).toBe(true);
  expect(deleteUserResult.message).toBe("User test-user-id deleted");
});
