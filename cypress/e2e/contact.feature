Feature: Contact links and phone check

  Scenario: Should check the number is displayed in the "call us" pop-up

    Given I am on Telnyx home page
    When I click the 'Call us' button
    Then The 'phone number' element have 'href' attribute value 'tel:+'

#   Scenario Outline: Should check social networks links

#     Given I am on telnyx main page
#     Then the '<link>' element have 'href' attribute value '<url>'

#   Examples:
#     |link|url|
#     |facebook|https://www.facebook.com/Telnyx/|
#     |twitter|https://twitter.com/telnyx|
#     |linkedin|https://www.linkedin.com/company/telnyx/|