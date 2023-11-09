describe("Testing crop filter for seeding report", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
    })
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
  })
