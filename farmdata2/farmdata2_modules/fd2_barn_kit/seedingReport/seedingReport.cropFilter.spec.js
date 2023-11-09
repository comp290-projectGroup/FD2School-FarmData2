describe("Testing crop filter for seeding report", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
        //cy.waitForPage()
    })

    /**when “All” is selected in the Crop filter, the table will 
     * contain logs for seedings for multiple different crops. */
    it("When All is selected in crop filter there will be logs for multiple different crops", () => {
        cy.get('[data-cy=start-date-select] > [data-cy=date-select]').type('2020-01-01').blur()
        cy.get('[data-cy=end-date-select] > [data-cy=date-select]').type('2020-12-01').blur()
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=crop-dropdown] > [data-cy=dropdown-input]').should('have.value', 'All')
        cy.get('[data-cy=td-r0c1]').contains('STRAWBERRY')
        cy.get('[data-cy=td-r1c1]').contains('CARROT')
        cy.get('[data-cy=td-r2c1]').contains('CHARD')
        cy.get('[data-cy=td-r3c1]').contains('COLLARDS')
        cy.get('[data-cy=td-r4c1]').contains('HERB-MARJORAM')
    })

    /**when a specific crop is selected in the Crop filter, 
     * the table will contain only seeding logs for the selected type of crop. */
    it("check table contains only selected crop's seeding logs", () => {
        cy.get('[data-cy=start-date-select] > [data-cy=date-select]').type('2020-01-01').blur()
        cy.get('[data-cy=end-date-select] > [data-cy=date-select]').type('2020-12-01').blur()
        cy.get('[data-cy=generate-rpt-btn]').click()
        //select crop ARUGULA which is the second crop row
        cy.get('[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option1]')

        //check each row has the same filtering crop
        cy.get("[data-cy=h1]>[data-cy=r0]").should("have.text","ARUGULA")
        cy.get("[data-cy=h1]>[data-cy=r1]").should("have.text","ARUGULA")
        cy.get("[data-cy=h1]>[data-cy=r2]").should("have.text","ARUGULA")

    })    
  })
