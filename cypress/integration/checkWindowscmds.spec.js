describe("Checking chrome windows cmandes", () => {
  before(() => {
    cy.visit("#/login?_k=5jewux");
  });
  it("checking hash in urls", () => {
    cy.hash().should("eq", "#/login?_k=5jewux");
    cy.location("host").should("eq", "react-redux.realworld.io");
    cy.location("protocol").should("eq", "https:");
    cy.location("pathname").should("eq", "/");

    cy.reload();
  });

  it.only("navigating inside windows with cypress cmdr", () => {
    cy.contains("Sign up").click();
    cy.go("back");
    cy.contains("Need an account?").should("have.text", "Need an account?");
    cy.go("forward");
    cy.contains("Have an account?").should("have.text", "Have an account?");
  });
});
