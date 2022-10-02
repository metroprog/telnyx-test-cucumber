Feature: Verify forms on login page

  Background:
    Given I am on Telnyx login page

  Scenario: Cannot login with unregistered credentials
    When I fill the 'Login' form with 'unregistered' data
    Then I see the 'error' message text 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.' below 'all' field
    * I am on the page with URL '/login/sign-in'

  Scenario: Cannot send "Single Sign-On" form with unregistered credentials
    Given I click the 'Single Sign-On' link
    When I fill the 'Single Sign-On' form with 'unregistered' data
    Then I see the 'error' message text 'The requested resource or URL could not be found.' below 'all' field
    * I am on the page with URL '/login/sign-in'

  Scenario: Successfully send "Resend Verification Email" form
    Given I click the 'Resend' link
    When I fill the 'Resend Verification Email' form with 'valid' data
    Then I see the 'success-resend' message text 'If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes.' below 'all' field

  Scenario: Successfully send "Password Reset" form
    Given I click the 'Forgot your password?' link
    When I fill the 'Password Reset' form with 'valid' data
    Then I see the 'success-reset' message text 'We have accepted your password reset request. If you have a Telnyx account and are unable to reset your password successfully, please contact support for assistance.' below 'all' field

  Scenario: Cannot login with empty fields
    When I submit the 'Login' form with empty fields
    Then I am on the page with URL '/login/sign-in'
    * I see the 'error-required' message text 'Required' below 'all' field
    * I see highlighted required 'login' fields