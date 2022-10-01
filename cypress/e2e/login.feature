Feature: Verify login page

  Background:
    Given I am on Telnyx login page

  Scenario: Cannot login with unregistered credentials
    When I fill the 'Login' form with 'unregistered' data
    Then I see the error message text 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.' below 'all' field
	* I am on the page with URL '/login/sign-in'

  Scenario: Cannot send "Single Sign-On" form with unregistered credentials	
    Given I click the 'Single Sign-On' link
    When I fill the 'Single Sign-On' form with 'unregistered' data
    Then I see the error message text 'The requested resource or URL could not be found.' below 'all' field
	* I am on the page with URL '/login/sign-in'