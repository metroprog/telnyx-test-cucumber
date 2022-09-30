const cookiesCloseButton = '[aria-label="close and deny"]';
const callUsButton = {
    locator: 'header button',
    text: 'Call Us'
};
const phone = '[href*="tel:+"]';

class BasePage {
    closeCookies() {
        cy.wait(1000);
        cy.get("body").then(($body) => {
            if ($body.find(cookiesCloseButton).length > 0) {
                cy.get(cookiesCloseButton).click();
            }
        });
    }
    
    clickCallUsButton() {
        cy.get(callUsButton.locator).contains(callUsButton.text).click();
    }

    getAttributeFromPhoneNumber(attribute) {
        return cy.get(phone).invoke('attr', attribute);
    }
}

module.exports = new BasePage();