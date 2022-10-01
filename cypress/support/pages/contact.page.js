const callFromOverseasHeader = "#intl-tel-list h2";
const callFromOverseasItems = "#intl-tel-list li";

class ContactPage {
    getCallFromOverseasHeader() {
        return cy.get(callFromOverseasHeader);
    }

    getCallFromOverseasLinks() {
        return cy.get(callFromOverseasItems).children();
    }
}

module.exports = new ContactPage();
