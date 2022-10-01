const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const basePage = require("../pages/base.page");
const contactPage = require("../pages/contact.page");

Given(/^I am on Telnyx (.*) page$/, (page) => {
    if (page === "home") {
        cy.visit("/");
    }
    basePage.closeCookies();
});

When(/^I click the '(.*)' link$/, (link) => {
    switch (link) {
        case "Call us":
            basePage.clickCallUsLink();
            break;
        case "Calling from overseas?":
            basePage.clickCallFromOverseasLink();
            break;
        default:
            cy.wrap(0).should("eq", 1, "Click failed");
    }
});

Then(/^I see the '(.*)' pop up$/, () => {
    basePage.getCallUsPopUp().should("be.visible");
});

Then(/^The '(.*)' element has '(.*)' attribute value '(.*)'$/, (element, attribute, value) => {
    switch (element) {
        case "phone link":
            basePage.getAttributeFromPhoneNumber(attribute).should("contain", value);
            break;
        case "LinkedIn":
        case "Twitter":
        case "Facebook":
            basePage.getAttributeFromSocialLink(element, attribute).should("contain", value);
            break;
    }
});

Then(/^All '(.*)' elements have '(.*)' attribute value '(.*)'$/, (elements, attribute, value) => {
    switch (elements) {
        case "phone link":
            contactPage.getCallFromOverseasLinks().should("have.attr", attribute).and("contain", value);
            break;
    }
});

Then(/^I see the header text '(.*)'$/, (header) => {
    contactPage.getCallFromOverseasHeader().should("contain.text", header);
});
