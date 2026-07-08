import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test as baseTest } from "../../playwright-fixture";
import { deleteUser, type DeleteUserResult } from "../../src/user";

type DeleteUserState = {
  userId: string;
  result?: DeleteUserResult;
};

export const test = baseTest.extend<{ deleteUserState: DeleteUserState }>({
  deleteUserState: async ({}, use) => {
    await use({ userId: "" });
  },
});

const { Given, When, Then } = createBdd(test);

Given("the application is ready", async ({ page, deleteUserState }) => {
  await page.goto("/");
  deleteUserState.userId = "";
  deleteUserState.result = undefined;
});

Given("a valid user id", async ({ deleteUserState }) => {
  deleteUserState.userId = "test-user-id";
});

Given("an empty user id", async ({ deleteUserState }) => {
  deleteUserState.userId = "";
});

When("deleteUser is called", async ({ deleteUserState }) => {
  deleteUserState.result = deleteUser(deleteUserState.userId);
});

When("the user triggers deleteuser", async ({ deleteUserState }) => {
  deleteUserState.userId = "test-user-id";
  deleteUserState.result = deleteUser(deleteUserState.userId);
});

Then("true is returned", async ({ deleteUserState }) => {
  expect(deleteUserState.result).toBeDefined();
  expect(deleteUserState.result!.success).toBe(true);
  expect(deleteUserState.result!.message).toBe(`User ${deleteUserState.userId} deleted`);
});

Then("the system responds with the expected result", async ({ deleteUserState }) => {
  expect(deleteUserState.result).toBeDefined();
  expect(deleteUserState.result!.success).toBe(true);
  expect(deleteUserState.result!.message).toBe("User test-user-id deleted");
});

Then("an error is thrown with message {string}", async ({ deleteUserState }, message: string) => {
  expect(deleteUserState.result).toBeDefined();
  expect(deleteUserState.result!.success).toBe(false);
  expect(deleteUserState.result!.message).toBe(message);
});
