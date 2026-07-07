import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test as baseTest } from "../../playwright-fixture";
import { createUser, type User } from "../../src/user";

type CreateUserState = {
  name: string;
  email: string;
  result?: User;
  error?: Error;
};

export const test = baseTest.extend<{ createUserState: CreateUserState }>({
  createUserState: async ({}, use) => {
    await use({ name: "", email: "" });
  },
});

const { Given, When, Then } = createBdd(test);

Given("the application is ready", async ({ createUserState }) => {
  createUserState.name = "";
  createUserState.email = "";
  createUserState.result = undefined;
  createUserState.error = undefined;
});

Given("valid name and email", async ({ createUserState }) => {
  createUserState.name = "Jane Doe";
  createUserState.email = "jane@example.com";
});

Given("{word} is missing for createUser", async ({ createUserState }, field: string) => {
  createUserState.name = field === "name" ? "" : "Jane Doe";
  createUserState.email = field === "email" ? "" : "jane@example.com";
});

When("createUser is called", async ({ createUserState }) => {
  try {
    createUserState.result = createUser(createUserState.name, createUserState.email);
    createUserState.error = undefined;
  } catch (error) {
    createUserState.result = undefined;
    createUserState.error = error as Error;
  }
});

When("the user triggers createUser", async ({ createUserState }) => {
  createUserState.name = "Jane Doe";
  createUserState.email = "jane@example.com";

  try {
    createUserState.result = createUser(createUserState.name, createUserState.email);
    createUserState.error = undefined;
  } catch (error) {
    createUserState.result = undefined;
    createUserState.error = error as Error;
  }
});

Then("a user object with id is returned", async ({ createUserState }) => {
  expect(createUserState.result).toBeDefined();
  expect(createUserState.result!.id).toBeTruthy();
  expect(createUserState.result!.name).toBe(createUserState.name);
  expect(createUserState.result!.email).toBe(createUserState.email);
});

Then("the system responds with the expected result", async ({ createUserState }) => {
  expect(createUserState.result).toBeDefined();
  expect(createUserState.result!.id).toBeTruthy();
  expect(createUserState.result!.name).toBe("Jane Doe");
  expect(createUserState.result!.email).toBe("jane@example.com");
});

Then("an error is thrown with message {string}", async ({ createUserState }, message: string) => {
  expect(createUserState.error).toBeDefined();
  expect(createUserState.error!.message).toBe(message);
});
