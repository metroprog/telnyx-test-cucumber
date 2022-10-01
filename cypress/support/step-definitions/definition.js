const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const basePage = require("../pages/base.page");
const contactPage = require("../pages/contact.page");
const user = require("../../fixtures/user");
const loginPage = require("../pages/login.page");

Given(/^I am on Telnyx (.*) page$/, (page) => {
    switch (page) {
        case "home":
            cy.visit("/");
            break;
        case "login":
            cy.visit("https://portal.telnyx.com");
            break;
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
        case "Single Sign-On":
            loginPage.clickSsoLink();
            break;
        default:
            cy.wrap(0).should("eq", 1, "Click failed");
    }
});

When(/^I fill the '(.*)' form with '(.*)' data$/, (form, data) => {
    switch (form) {
        case "Talk to an expert":
            contactPage.chooseReasonSelect("Support");
            basePage.fillFirstNameInput(user.firstName);
            basePage.fillLastNameInput(user.lastName);
            basePage.fillEmailInput(user.email);
            basePage.fillWebsiteInput(user.website);
            basePage.submitForm();
            break;
        case "Login":
            loginPage.fillEmailInput('login', user.email);
            loginPage.fillPasswordInput('login', user.password);
            loginPage.submitForm('login');
            break;
        case "Single Sign-On":
            loginPage.clickSsoLink();
            loginPage.fillEmailInput('sso', user.email);
            loginPage.submitForm('sso');
            break;
        default:
            cy.wrap(0).should("eq", 1, "Form not found");
    }
});

When(/^I submit the '(.*)' form with empty fields$/, (form) => {
    switch (form) {
        case "Talk to an expert":
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
            break;
        case "Talk to an expert":
        case "Thanks for Reaching Out!":
            contactPage.getMainHeader().should("contain.text", header);
            break;
    }
});

Then(/^I see the error message text '(.*)' below '(.*)' field$/, (errorMessage, field) => {
    switch (field) {
        case "all":
            loginPage.getErrorMessage().should("be.visible").should("have.text", errorMessage);
            break;
        default:
            basePage.getErrorMessage(field).should("contain.text", errorMessage);
            break;
    }
});

Then(/^I am on the page with URL '(.*)'$/, (url) => {
    cy.url().should("include", url);
});

Then(/^I see highlighted required fields$/, () => {
    contactPage.getRequiredFields().should('have.class', 'mktoInvalid');
});
