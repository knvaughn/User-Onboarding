describe("Form Application", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const name = () => cy.get('[data-cy=name]');
    const email = () => cy.get('[data-cy=email]');
    const password = () => cy.get('[data-cy=password]');
    const termsOfService = () => cy.get('[data-cy=termsOfService]');

    it("Can fill out name input", () => {
        
    }); 
});