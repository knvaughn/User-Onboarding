describe("Form Application", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const name = () => cy.get('[data-cy=name]');
    const email = () => cy.get('[data-cy=email]');
    const password = () => cy.get('[data-cy=password]');
    const termsOfService = () => cy.get('[data-cy=termsOfService]');

    it("Can fill out inputs", () => {
        name()
            .should('have.value', '')
            .type('Kristin Vaughn')
            .should('have.value', 'Kristin Vaughn');

        email()
            .should('have.value', '')
            .type('vaughn.kristin.n@gmail.com')
            .should('have.value', 'vaughn.kristin.n@gmail.com');

        password()
            .should('have.value', '')
            .type('12345')
            .should('have.value', '12345');
    }); 
});