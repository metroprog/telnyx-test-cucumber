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
        case "Talk to an expert":
            basePage.clickTalkToExpertLink();
            break;
        default:
            cy.wrap(0).should("eq", 1, "Click failed");
    }
});

When(/^I fill the '(.*)' form with valid data$/, (form) => {
    switch (form) {
        case "Talk to an expert":
            contactPage.chooseReasonSelect("Support");
            basePage.fillFirstNameInput("Test");
            basePage.fillLastNameInput("User");
            basePage.fillEmailInput("testuser@example.com");
            basePage.fillWebsiteInput("https://example.com");
            basePage.submitForm();
            break;
        default:
            cy.wrap(0).should("eq", 1, "Form not found");
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
    switch (header) {
        case "Calling from overseas?":
            contactPage.getCallFromOverseasHeader().should("contain.text", header);
        case "Talk to an expert":
        case "Thanks for Reaching Out!":
            contactPage.getMainHeader().should("contain.text", header);
    }
});

Then(/^I am on the page with URL '(.*)'$/, (url) => {
    switch (url) {
        case "/thank-you":
            cy.url().should("include", `${url}?userEmail=`);
    }
});
