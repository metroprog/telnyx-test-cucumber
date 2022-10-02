Feature: Verify storage page

	Background:
		Given I am on Telnyx storage page
		* I click the 'Join the waitlist' link
		Then I see the header text 'Join the waitlist to try Telnyx Storage'
		* I am on the page with URL '#form'

	Scenario: Successfully send "Join the waitlist" form
		When I fill the 'Join the waitlist' form with 'valid' data
		Then I am on the page with URL '/storage-waitlist'
		* I see the header text 'You're on the waitlist!'

	Scenario: Cannot submit "Join the waitlist" form with empty fields
		When I submit the 'Join the waitlist' form with empty fields
		Then I am on the page with URL '/products/storage#form'
		* I see the 'error' message text 'This field is required.' below 'First Name' field
		* I see highlighted required 'input' fields