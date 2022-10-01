const cookiesCloseButton = '[aria-label="close and deny"]';
const callUsLink = {
    locator: "header button",
    text: "Call Us",
};
const callUsPopUp = '[role="dialog"]';
const callFromOverseasLink = '[href*="#intl-tel-list"]';
const socialLinks = '[data-e2e="Footer--navItem-social"] a';
const talktoExpertLink = 'header [href*="contact-us"]';
const firstNameInput = "#FirstName";
const lastNameInput = "#LastName";
const emailInput = "#Email";
const websiteInput = "#Website";
const submitButton = '[type="submit"]';
const errorMessages = {
    'First Name': "#ValidMsgFirstName",
    'Last Name': "#ValidMsgLastName",
    'Business email': "#ValidMsgEmail",
    'Company website': "#ValidMsgWebsite",
    'Choose reason for contact': "#ValidMsgReason_for_Contact__c",
    'Primary Interest': "#ValidMsgUse_Case_Form__c",
};

class BasePage {
    closeCookies() {
        cy.wait(1000);
        cy.get("body").then(($body) => {
            if ($body.find(cookiesCloseButton).length > 0) {
                cy.get(cookiesCloseButton).click();
            }
        });
    }

    clickCallUsLink() {
        cy.get(callUsLink.locator).contains(callUsLink.text).click();
    }

    clickCallFromOverseasLink() {
        cy.get(callFromOverseasLink).click();
    }
    
    clickTalkToExpertLink() {
        cy.get(talktoExpertLink).eq(0).click();
    }

    getCallUsPopUp() {
        return cy.get(callUsPopUp, { timeout: 5000 });
    }

    getAttributeFromPhoneNumber(attribute) {
        return cy.get(callUsPopUp).contains("+").invoke("attr", attribute);
    }

    getAttributeFromSocialLink(social, attribute) {
        return cy.get(socialLinks).contains(social).parent().parent().invoke("attr", attribute);
    }

    getErrorMessage(field) {
        return cy.get(errorMessages[field]);
    }

    fillFirstNameInput(firstName) {
        cy.get(firstNameInput).clear().type(firstName);
    }

    fillLastNameInput(lastName) {
        cy.get(lastNameInput).clear().type(lastName);
    }

    fillEmailInput(email) {
        cy.get(emailInput).clear().type(email);
    }

    fillPasswordInput(password) {
        cy.get(passwordInput).clear().type(password);
    }

    fillWebsiteInput(website) {
        cy.get(websiteInput).clear().type(website);
    }

    submitForm() {
        cy.get(submitButton).click();
    }
}

module.exports = new BasePage();
