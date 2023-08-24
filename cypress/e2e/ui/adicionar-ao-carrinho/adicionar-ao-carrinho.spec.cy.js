/// <reference types="cypress"/>

describe("Should add product in the cart", () => {
    it("Should add product in the cart successfully", () => {
      cy.visit("/produtos"); 
      cy.get(".produto:first-child").click(); 
      cy.contains("Produto adicionado ao carrinho").should("be.visible");
      cy.get(".carrinho-icon").click();
      cy.get(".item-carrinho").should("have.length", 1);
    });
});