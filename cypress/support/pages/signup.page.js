const emailInput = '[name="email"]';
const fullNameInput = '[name="full_name"]';
const submitButton = '[type="submit"]';
const errorMessages = '[id*="_error"]';
const requiredFields = "input[required]";

class SignupPage {
	fillEmailInput(email) {
        cy.get(emailInput).type(email);
    }

    fillPasswordInput(fullName) {
        cy.get(fullNameInput).type(fullName);
    }

    submitForm() {
        cy.get(submitButton).click();
    }

    getErrorMessages() {
        return cy.get(errorMessages);
    }
	
    getRequiredFields() {
        return cy.get(requiredFields);
    }
}

module.exports = new SignupPage();