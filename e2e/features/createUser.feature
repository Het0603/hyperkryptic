Feature: createUser
  Initial coverage for createUser
  function createUser in src/user.ts
  Jira context:
  Requirement: Create User (create_user)

  Requirement-backed: true

  Overview:
  Creates a new user record with a generated identifier when valid name and email are supplied.

  Acceptance Criteria:
  - US-1-AC-1: 1. **Given** valid name and email **When** createUser is called **Then** a user object with id is returned
  - US-1-AC-2: 2. **Given** missing name or email **When** createUser is called **Then** an error is thrown `[code-derived]`

  Traceability:
  Create → createUser (US-1)

  @US-1-AC-1
  Scenario: Create user with valid name and email
    Given the application is ready
    And valid name and email
    When createUser is called
    Then a user object with id is returned

  @US-1-AC-1
  Scenario: Validate createUser
    Given the application is ready
    When the user triggers createUser
    Then the system responds with the expected result

  @US-1-AC-2
  Scenario Outline: Create user rejects missing required fields
    Given the application is ready
    And <field> is missing for createUser
    When createUser is called
    Then an error is thrown with message "Name and email are required"

    Examples:
      | field |
      | name  |
      | email |
