const callFromOverseasHeader = "#intl-tel-list h2";
const mainHeader = "main h1";
const callFromOverseasItems = "#intl-tel-list li";
const reasonContactSelect = "#Reason_for_Contact__c";
const requiredFields = "form .mktoRequiredField input";

class ContactPage {
    getCallFromOverseasHeader() {
        return cy.get(callFromOverseasHeader);
    }

    getMainHeader() {
        return cy.get(mainHeader);
    }

    getCallFromOverseasLinks() {
        return cy.get(callFromOverseasItems).children();
    }

    getRequiredFields() {
        return cy.get(requiredFields);
    }

    chooseReasonSelect(option) {
        cy.get(reasonContactSelect, { timeout: 5000 }).select(option);
    }
}

module.exports = new ContactPage();
