describe("Checking chrome windows cmandes", () => {
  before(() => {
    cy.visit("#/login?_k=5jewux");
  });
  it("checking hash in urls", () => {
      cy.hash().should("eq", "#/login?_k=5jewux")
      cy.location("host").should("eq", "react-redux.realworld.io")
      cy.location("protocol").should("eq", "https:")
      cy.location("pathname").should("eq", "/")

      cy.reload()
  });
});
