describe("Ensure Seeding Input Log has sane default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput")
    })
    it("Tray seeding is enabled", () => {
        cy.get("[data-cy='tray-seedings']").should('be.enabled')
    })
    it("Direct seeding is enabled", () => {
        cy.get("[data-cy='direct-seedings']").should('be.enabled')
    })
})
