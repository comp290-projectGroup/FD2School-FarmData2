/** This tests that When a worker is logged in the 
 * UI should contain the FieldKit and BarnKit tabs but not the FD2Config tab.*/
describe("Testing worker is logged in", () => {
    //managers should see all tabs
    it("check contain the FieldKit manager1", () => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(4) > .glyphicons-processed').should("have.contain", "FieldKit")
    })
    it("check contain the BarnKit manager1", () => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(5) > .glyphicons-processed').should("have.contain", "BarnKit")
    })
    it("check contain theFD2Config manager1", () => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(8) > .glyphicons-processed').should("have.contain", "FD2 Config")
        //cy.get('.tabs--primary').should("contain","FD2Config")
    })

    //workers should see all tabs except for fd2config
    it("check contain the FieldKit worker1", () => {
        cy.login("worker1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(4) > .glyphicons-processed').should("have.contain", "FieldKit")
    })
    it("check contain the BarnKit worker1", () => {
        cy.login("worker1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(5) > .glyphicons-processed').should("have.contain", "BarnKit")
    })
    it("check not contain theFD2Config worker1", () => {
        cy.login("worker1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary').should("not.contain", "FD2Config")
    })

    //guests should not see any tabs
    it("check contain the FieldKit worker1", () => {
        cy.login("guest", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary').should("not.contain", "FieldKit")
    })
    it("check contain the BarnKit worker1", () => {
        cy.login("guest", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary').should("not.contain", "BarnKit")
    })
    it("check not contain theFD2Config worker1", () => {
        cy.login("guest", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary').should("not.contain", "FD2Config")
    })

})