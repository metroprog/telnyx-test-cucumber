const ssoLink = '[data-testid="login.signin.tab.sso"]';
const emailInput = '[name="email"]';
const passwordInput = '[name="password"]';
const submitButton = '[type="submit"]';
const errorMessage = '[data-testid="login.signin.message"]';
const formLocator = (formType) => `[aria-label="${formType}Form"]`;


class LoginPage {
	getErrorMessage() {
		return cy.get(errorMessage);
	}

	fillEmailInput(formType, email) {
        cy.get(`${formLocator(formType)} ${emailInput}`, { timeout: 5000 }).type(email);
    }

    fillPasswordInput(formType, password) {
        cy.get(`${formLocator(formType)} ${passwordInput}`).type(password);
    }

    submitForm(formType) {
        cy.get(`${formLocator(formType)} ${submitButton}`).click();
    }

	clickSsoLink() {
		cy.get(ssoLink).click();
	}
}


module.exports = new LoginPage();