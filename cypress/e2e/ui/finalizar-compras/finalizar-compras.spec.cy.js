/// <reference types="cypress"/>

describe("Shopping", () => {
    it("Should buy and finalise successfuly", () => {
      cy.visit("/carrinho");
      cy.get(".item-carrinho").should("have.length.gt", 0);
      cy.get(".botao-finalizar-compra").click(); 
      cy.contains("Compra realizada com sucesso").should("be.visible");
    });
  });