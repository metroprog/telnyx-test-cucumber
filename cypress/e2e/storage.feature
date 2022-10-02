Feature: Verify storage page

  Background:
    Given I am on Telnyx storage page

  Scenario: Successfully send "Join the waitlist" form	
    Given I click the 'Join the waitlist' link
	Then I see the header text 'Join the waitlist to try Telnyx Storage'
	* I am on the page with URL '#form'
	When I fill the 'Join the waitlist' form with 'valid' data
	Then I am on the page with URL '/storage-waitlist'
	* I see the header text 'You're on the waitlist!'
	