const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const user = require("../../fixtures/user");
const basePage = require("../pages/base.page");
const contactPage = require("../pages/contact.page");
const loginPage = require("../pages/login.page");
const storagePage = require("../pages/storage.page");

Given(/^I am on Telnyx (.*) page$/, (page) => {
    switch (page) {
        case "home":
            cy.visit("/");
            break;
        case "login":
            cy.visit("https://portal.telnyx.com");
            break;
        case "storage":
            cy.visit("/products/storage");
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
            loginPage.clickLink('sso');
            break;
        case "Resend":
            loginPage.clickLink('resend-email');
            break;
        case "Forgot your password?": 
            loginPage.clickLink('password-reset');
            break;
        case "Join the waitlist": 
            storagePage.clickJoinTheWaitListLink();
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
            loginPage.fillEmailInput('sso', user.email);
            loginPage.submitForm('sso');
            break;
        case "Resend Verification Email":
            loginPage.fillEmailInput('resendEmail', user.email);
            loginPage.submitForm('resendEmail');
            break;
        case "Password Reset":
            loginPage.fillEmailInput('passwordReset', user.email);
            loginPage.submitForm('passwordReset');
            break;
        case "Join the waitlist":
            storagePage.checkFormIsLoad();
            basePage.fillFirstNameInput(user.firstName);
            basePage.fillLastNameInput(user.lastName);
            basePage.fillEmailInput(user.email);
            basePage.submitForm();
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
        case "Login":
            loginPage.submitForm('login');
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
        case "Join the waitlist to try Telnyx Storage":
            storagePage.getJoinTheWaitListHeader().should("contain.text", header);
            break;    
        case "You're on the waitlist!":
            storagePage.getWaitlistHeader().should("contain.text", header);
            break;
        }
});

Then(/^I see the '(.*)' message text '(.*)' below '(.*)' field$/, (type, text, field) => {
    switch (field) {
        case "all":
            loginPage.getMessage(type).should("be.visible").should("contain.text", text);
            break;
        default:
            basePage.getErrorMessage(field).should("contain.text", text);
            break;
    }
});

Then(/^I am on the page with URL '(.*)'$/, (url) => {
    cy.url().should("include", url);
});

Then(/^I see highlighted required '(.*)' fields$/, (type) => {
    switch (type) {
        case "login":
            loginPage.getRequiredFields(type).should('have.css', 'border-color', 'rgb(255, 102, 102)');
            break;
        case "contact":
            contactPage.getRequiredFields().should('have.class', 'mktoInvalid');
            break;
    }
});
