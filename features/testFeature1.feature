Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  Scenario: Wrapping WebDriver
    Given I go on non angular "https://www.google.com"
    Then the title of non-angular should equal "Google"