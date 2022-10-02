const emailInput = '#email';
const fullNameInput = '#full_name';
const passwordInput = '#password';
const termsAndConditionsCheckbox = '#terms_and_conditions';
const errorMessages = '[id*="_error"]';
const requiredFields = "input[required]";

class SignupPage {
	fillEmailInput(data, user) {
		switch (data) {
			case "valid": cy.get(emailInput).type(user.email); break;
			case "existing": cy.get(emailInput).type(user.existingEmail); break;
		}
    }

    fillFullNameInput(fullName) {
        cy.get(fullNameInput).type(fullName);
    }

    fillPasswordInput(password) {
        cy.get(passwordInput).type(password);
    }

    checkTermsAndConditionsCheckbox() {
        cy.get(termsAndConditionsCheckbox).check({ force: true });
    }

    getErrorMessages() {
        return cy.get(errorMessages, { timeout: 10000 });
    }
	
    getRequiredFields() {
        return cy.get(requiredFields);
    }
}

module.exports = new SignupPage();