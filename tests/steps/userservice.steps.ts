import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { UserService, type User } from "../../src/user";

const { Given, When, Then } = createBdd();

let userService: UserService;
let listUsersResult: User[];
let findUserResult: User | undefined;

Given("the application is ready", async () => {
  userService = new UserService();
});

When("the user triggers listUsers", async () => {
  listUsersResult = userService.listUsers();
});

When("the user triggers findUser with id {string}", async ({}, id: string) => {
  findUserResult = userService.findUser(id);
});

Then("the system responds with all known users", async () => {
  expect(listUsersResult).toEqual([
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
  ]);
});

Then("the system responds with the expected user", async () => {
  expect(findUserResult).toEqual({
    id: "1",
    name: "Alice",
    email: "alice@example.com",
  });
});

Then("the system responds with no user", async () => {
  expect(findUserResult).toBeUndefined();
});
