const cookiesCloseButton = '[aria-label="close and deny"]';
const callUsLink = {
    locator: "header button",
    text: "Call Us",
};
const callUsPopUp = '[role="dialog"]';
const callFromOverseasLink = '[href*="#intl-tel-list"]';
const socialLinks = '[data-e2e="Footer--navItem-social"] a';

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

    getCallUsPopUp() {
        return cy.get(callUsPopUp, { timeout: 5000 });
    }

    getAttributeFromPhoneNumber(attribute) {
        return cy.get(callUsPopUp).contains("+").invoke("attr", attribute);
    }

    getAttributeFromSocialLink(social, attribute) {
        return cy.get(socialLinks).contains(social).parent().parent().invoke("attr", attribute);
    }
}

module.exports = new BasePage();
