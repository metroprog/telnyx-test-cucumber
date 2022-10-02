Feature: Verify signup form

	Background:
		Given I am on Telnyx signup page

	Scenario: Cannot submit "Signup" form with empty fields
		When I submit the 'Signup' form with empty fields
		Then I am on the page with URL '/sign-up'
		* I see the 'error' message text 'This field is required.' below 'signup' field
		* I see highlighted required 'signup' fields

	Scenario: Cannot sign up with not business email
		When I fill the 'Signup' form with 'valid' data
		Then I am on the page with URL '/sign-up'
		* I see the 'error' message text 'email' below 'signup' field
		
	Scenario: Cannot sign up with already registered email
		When I fill the 'Signup' form with 'existing' data
		Then I am on the page with URL '/sign-up'
		* I see the 'error' message text 'email' below 'signup' field