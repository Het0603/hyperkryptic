Feature: deleteUser
  Initial coverage for deleteUser
  function deleteUser in src/user.ts
  Jira context:
  Requirement: Delete User (delete_user)

  Requirement-backed: true

  Overview:
  Removes a user by identifier and reports whether the operation succeeded.

  Acceptance Criteria:
  - US-1-AC-1: 1. **Given** a valid user id **When** deleteUser is called **Then** true is returned
  - US-1-AC-2: 2. **Given** an empty id **When** deleteUser is called **Then** an error is thrown `[code-derived]`

  Traceability:
  Delete → deleteUser (US-1)

  @US-1-AC-1
  Scenario: Delete user with valid id
    Given the application is ready
    And a valid user id
    When deleteUser is called
    Then true is returned

  @US-1-AC-1
  Scenario: Validate deleteUser
    Given the application is ready
    When the user triggers deleteuser
    Then the system responds with the expected result

  @US-1-AC-2
  Scenario: Delete user rejects empty id
    Given the application is ready
    And an empty user id
    When deleteUser is called
    Then an error is thrown with message "User id is required"
