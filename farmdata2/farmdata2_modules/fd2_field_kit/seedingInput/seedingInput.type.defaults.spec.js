describe("Ensure Seeding Input Log has same default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput")
    })

    /** Check elements for "Tray" and "Direct" are enabled. */
    it("Tray seeding is enabled", () => {
        cy.get("[data-cy='tray-seedings']").should('be.enabled')
    })
    it("Direct seeding is enabled", () => {
        cy.get("[data-cy='direct-seedings']").should('be.enabled')
    })

    /** Check neither Tray nor Direct is selected and
     *  a message is visible indicating that Tray or Direct must be selected. */
    it("Tray and Direct elements not selected and message visible", () => {
        cy.get("[data-cy='tray-seedings']").should('not.be.checked')
        cy.get("[data-cy='direct-seedings']").should('not.be.checked')
        cy.contains("Please Select Tray Seeding or Direct Seeding")
    })

    /** Check the form elements for either the "Tray" and 
    "Direct" seedings are not visible or do not exist. */

    it("Check form elements of Tray is not visible or not exist", () => { 
        cy.get("[data-cy=tray-area-selection]").should("not.be.visible")
        cy.get("[data-cy=num-cell-input]").should("not.be.visible")
        cy.get("[data-cy=num-tray-input]").should("not.be.visible")
        cy.get("[data-cy=num-seed-input]").should("not.be.visible")
    }) 
    it("Check form elements of Direct is not visible or not exist", () => { 
        cy.get("[data-cy=direct-area-selection]").should("not.be.visible")
        cy.get("[data-cy=num-rowbed-input]").should("not.be.visible")
        cy.get("[data-cy=unit-feet]").should("not.be.visible")
        cy.get("[data-cy=num-feet-input]").should("not.be.visible")
    }) 
})