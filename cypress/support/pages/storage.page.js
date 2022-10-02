const joinTheWaitListLinks = '[href*="#form"]';
const joinTheWaitListHeader = "#form h3";
const joinForm = "#form form";
const waitlistHeader = "main h1";

class StoragePage {
    getJoinTheWaitListHeader() {
        return cy.get(joinTheWaitListHeader);
    }

    getWaitlistHeader() {
        return cy.get(waitlistHeader);
    }

    clickJoinTheWaitListLink() {
        cy.get(joinTheWaitListLinks).first().should("have.text", "Join the waitlist").click();
    }

    checkFormIsLoad() {
        cy.get(joinForm, { timeout: 10000 }).should("be.visible");
    }
}

module.exports = new StoragePage();
