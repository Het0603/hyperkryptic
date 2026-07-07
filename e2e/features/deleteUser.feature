Feature: deleteUser
  Initial coverage for deleteUser
  function deleteUser in src/user.ts

  Scenario: Validate deleteUser
    Given the application is ready
    When the user triggers deleteuser
    Then the system responds with the expected result
