Feature: Verify phone links

  Background:
    Given I am on Telnyx home page

  Scenario: Verify phone number in "Call us" pop-up
    When I click the 'Call us' link
    Then I see the 'Talk to an Expert' pop up
    * The 'phone link' element has 'href' attribute value 'tel:+'

  Scenario Outline: Verify social links

    Then The '<link>' element has 'href' attribute value '<url>'

    Examples:
      | link     | url                                      |
      | LinkedIn | https://www.linkedin.com/company/telnyx/ |
      | Twitter  | https://twitter.com/telnyx               |
      | Facebook | https://www.facebook.com/Telnyx/         |

  Scenario: Verify phone numbers in "Calling from overseas" section
    When I click the 'Call us' link
    * I click the 'Calling from overseas?' link
    Then I see the header text 'Calling from overseas?'
    * All 'phone link' elements have 'href' attribute value 'tel:+'
