/** This tests that When a worker is logged in the 
 * UI should contain the FieldKit and BarnKit tabs but not the FD2Config tab.*/
describe("Testing worker is logged in", () => {
    beforeEach(() => {
        cy.login("worker1", "farmdata2")
        cy.visit("/farm")
        //cy.waitForPage()
    })

    // should contain the FieldKit
    it("check contain the FieldKit", () => {
        cy.get('.tabs--primary > :nth-child(4) > .glyphicons-processed').should("have.contain","FieldKit")
    })
    // should contain the BarnKit
    it("check contain the BarnKit", () => {
        cy.get('.tabs--primary > :nth-child(5) > .glyphicons-processed').should("have.contain","BarnKit")
    })
    // should not contain the FD2Config
    it("check not contain theFD2Config", () => {
        cy.get('.tabs--primary').should("not.contain","FD2Config")
    })

    })    