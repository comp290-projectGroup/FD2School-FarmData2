describe("Ensure Seeding Input Log has sane default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput")
        
        //set default values for DATA and Labor 
        cy.get("[data-cy='date-selection']").type("2020-01-01")
        // choose ARUGULA
        cy.get('[data-cy="crop-selection"] > [data-cy="dropdown-input"]').children().first()
        
        cy.get("[data-cy='num-worker-input']").type("1")
        cy.get("[data-cy='minute-input']").type("1")
        cy.get("[data-cy='time-unit']>[data-cy=dropdown-input]>[data-cy=option1]") // choose minute

    })
    /**This test must confirm that when the “Cancel” button is clicked: 
     * All of the input elements in the form remain populated with their existing values.
     * - when creating a tray seeding.
     * - when creating a direct seeding.
    */

    it("remain values of tray seeding after clicking Cancel button", () => {
        // set values for tray-seeding
        cy.get("[data-cy='tray-seedings']").click()
        cy.get("[data-cy=tray-area-selection] > [data-cy=dropdown-input]").children().first() // CHUAU
        cy.get("[data-cy='num-cell-input']").type("1")
        cy.get("[data-cy='num-tray-input']").type("1")
        cy.get("[data-cy='num-seed-input']").type("1")

        cy.get('[data-cy="submit-button"]').click()
        cy.get('[data-cy="cancel-button"]').click()

        // test these values should remain
        cy.get("[data-cy='date-selection']").should("have.value","2020-01-01")
        cy.get('[data-cy=crop-selection] > [data-cy=dropdown-input]').should("have.value","ARUGULA") 
        cy.get("[data-cy='num-worker-input']").should("have.value","1")
        cy.get("[data-cy='minute-input']").should("have.value","1")
        cy.get("[data-cy='time-unit']>[data-cy=dropdown-input]").should("have.value","minutes")
        cy.get("[data-cy='tray-seedings']").should("be.visible")
        cy.get("[data-cy=tray-area-selection] > [data-cy=dropdown-input]").should("have.value","CHUAU")
        cy.get("[data-cy='num-cell-input']").should("have.value","1")
        cy.get("[data-cy='num-tray-input']").should("have.value","1")
        cy.get("[data-cy='num-seed-input']").should("have.value","1")

    })

    it("remain values of direct seeding after clicking Cancel button", () => {
        //set direct seeding values
        cy.get("[data-cy='direct-seedings']").click()
        cy.get("[data-cy=direct-area-selection] > [data-cy=dropdown-input]").children().first() //A
        cy.get("[data-cy='num-rowbed-input']").type("1")
        cy.get('[data-cy=unit-feet] > [data-cy=dropdown-input]').children().first() // Bed Feet
        cy.get("[data-cy='num-feet-input']").type("1")
        cy.get('[data-cy="submit-button"]').click()
        cy.get('[data-cy="cancel-button"]').click()

        // test these values should remain
        cy.get("[data-cy='date-selection']").should("have.value","2020-01-01")
        cy.get('[data-cy=crop-selection] > [data-cy=dropdown-input]').should("have.value","ARUGULA") 
        cy.get("[data-cy='num-worker-input']").should("have.value","1")
        cy.get("[data-cy='minute-input']").should("have.value","1")
        cy.get("[data-cy='time-unit']>[data-cy=dropdown-input]").should("have.value","minutes")
        cy.get("[data-cy='direct-seedings']").should("be.visible")
        cy.get("[data-cy=direct-area-selection] > [data-cy=dropdown-input]").should("have.value","A")
        cy.get("[data-cy='num-rowbed-input']").should("have.value","1")
        cy.get('[data-cy=unit-feet] > [data-cy=dropdown-input]').should("have.value","Bed Feet")
        cy.get("[data-cy='num-feet-input']").should("have.value","1")

    })
})