Feature: User logs into app with Evernote credentials

  As an existing user 
  I want to log in to using Evernote credentials
  So that I can access the rest of app

  # The background will be run for every scenario
  Background:
    Given I am an existing user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @focus
  Scenario: Login form loads
    When I navigate to "/"
    Then I should see the text "hello, this is the login view"

