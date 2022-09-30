const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const basePage = require('../pages/base.page');

Given(/^I am on Telnyx (.*) page$/, (page) => {
    if (page === 'home') {
        cy.visit('/');
    }
    basePage.closeCookies();
})

When(/^I click the '(.*)' button$/, (button) => {
    switch (button) {
        case 'Call us':
            basePage.clickCallUsButton();
            break;
        default:
            cy.wrap(0).should('eq', 1, 'Click failed');
    }
})

Then(/^The '(.*)' element have '(.*)' attribute value '(.*)'$/, (element, attribute, value) => {
    switch (element) {
        case 'phone number':
            basePage.getAttributeFromPhoneNumber(attribute).should('contain', value);
            break;
    }
})