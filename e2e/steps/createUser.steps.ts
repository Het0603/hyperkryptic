import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { createUser, type CreateUserInput, type User } from "../../src/user";

let createUserInput: CreateUserInput;
let createUserResult: User;

Given("the application is ready", function () {
  createUserInput = {
    name: "Test User",
    email: "test@example.com",
  };
});

When("the user triggers createuser", function () {
  createUserResult = createUser(createUserInput);
});

Then("the system responds with the expected result", function () {
  expect(createUserResult).toMatchObject({
    name: createUserInput.name,
    email: createUserInput.email,
  });
  expect(createUserResult.id).toBeTruthy();
});
