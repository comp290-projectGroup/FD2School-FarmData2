describe('testForBarnKitSubTabs', () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-barn-kit")
})

/**The BarnKit tab contains sub-tabs for “Info”, “Seeding Report” and “Transplanting Report” */
  it('Contains info, seeding-report and transplanting-report subtabs.', () => {
      cy.get('.tabs--secondary').should("have.contain","Info")
      cy.get('.tabs--secondary').should("have.contain","Seeding Report")
      cy.get('.tabs--secondary').should("have.contain","Transplanting Report")
    })

/**The order of the tabs is “Info”, “Seeding Report” and then “Transplanting Report.” */
  it('Order of tabs is info, seeding-report and transplanting-report.', () => {
      // first order is Info
      cy.get('.tabs--secondary > :nth-child(1) > a').should("have.contain","Info")
      //second order is  Seeding Report tabs
      cy.get('.tabs--secondary > :nth-child(2) > a').should("have.contain","Seeding Report")
      //third order is Transplanting report tabs
      cy.get('.tabs--secondary > :nth-child(3) > a').should("have.contain","Transplanting Report")
    })

  it('Count of tabs is correct.', () => {
      cy.get('.tabs--secondary').should('have.length', 3)
    })
  
  })
