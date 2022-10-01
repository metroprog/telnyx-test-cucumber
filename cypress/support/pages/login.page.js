const linkLocators = {
	'sso': '[data-testid="login.signin.tab.sso"]',
	'resend-email': '[href*="/resend-email"]',
	'password-reset': '[href*="/password-reset"]'
}
const emailInput = '[name="email"]';
const passwordInput = '[name="password"]';
const submitButton = '[type="submit"]';
const formLocator = (type) => `[aria-label="${type}Form"]`;
const messageLocator = (type) => `[data-testid="login.${type}.message"]`;

class LoginPage {
	getMessage(type) {
		switch (type) {
			case "error": type = 'signin'; break;
			case "success-resend": type = 'resend'; break;
			case "success-reset": type = 'pwreset'; break;
		}
		return cy.get(messageLocator(type));
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

	clickLink(link) {
		cy.get(linkLocators[link]).click();
	}
}


module.exports = new LoginPage();