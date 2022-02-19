/// <reference types = "cypress"/>

describe('Testing Login suite', () => {

    it('Login with valid credentials', () => {
        cy.visit("#/login?_k=5jewux")

        cy.get("input[type='email']").should("be.visible").type("huzii@mailinator.com")
        cy.get("input[type='password']").should("be.visible").type("huzii")
        cy.get("button[type='submit']").should("be.visible").click()
        cy.contains("No articles are here... yet.").should("be.visible")
        
    });
    
});