Feature: UserService
  Initial coverage for UserService
  class UserService in src/user.ts
  Jira context:
  Requirement: User Service (user_service)
  Requirement-backed: true
  Overview:
  In-memory user lookup service exposing list and find operations over known users.
  Traceability:
  List → listUsers (US-1)
  Find → findUser (US-2)
  Requirements:
  Requirement: User Service (user_service)
  Requirement-backed: true
  Overview:
  In-memory user lookup service exposing list and find operations over known users.
  Traceability:
  List → listUsers (US-1)
  Find → findUser (US-2)

  Scenario: List known users (US-1)
    Given the application is ready
    When the user triggers listUsers
    Then the system responds with all known users

  Scenario: Find an existing user (US-2)
    Given the application is ready
    When the user triggers findUser with id "1"
    Then the system responds with the expected user

  Scenario: Find a missing user (US-2)
    Given the application is ready
    When the user triggers findUser with id "999"
    Then the system responds with no user
