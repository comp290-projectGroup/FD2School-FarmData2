/** This tests that When a worker is logged in the 
 * UI should contain the FieldKit and BarnKit tabs but not the FD2Config tab.*/
describe("Testing worker is logged in", () => {
    // should contain the FieldKit
    it("check contain the FieldKit manager1", () => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(4) > .glyphicons-processed').should("have.contain","FieldKit")
    })
    // should contain the BarnKit
    it("check contain the BarnKit manager1", () => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(5) > .glyphicons-processed').should("have.contain","BarnKit")
    })
    // should contain the FD2Config
    it("check contain theFD2Config manager1", () => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(8) > .glyphicons-processed').should("have.contain","FD2 Config")
        //cy.get('.tabs--primary').should("contain","FD2Config")
    })
    
    // should contain the FieldKit
    it("check contain the FieldKit worker1", () => {
        cy.login("worker1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(4) > .glyphicons-processed').should("have.contain","FieldKit")
    })
    // should contain the BarnKit
    it("check contain the BarnKit worker1", () => {
        cy.login("worker1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary > :nth-child(5) > .glyphicons-processed').should("have.contain","BarnKit")
    })
    // should not contain the FD2Config
    it("check not contain theFD2Config worker1", () => {
        cy.login("worker1", "farmdata2")
        cy.visit("/farm")
        cy.get('.tabs--primary').should("not.contain","FD2Config")
    })
  
    })    