describe("Form Application", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const name = () => cy.get('[data-cy=name]');
    const email = () => cy.get('[data-cy=email]');
    const password = () => cy.get('[data-cy=password]');
    const termsOfService = () => cy.get('[data-cy=termsOfService]');
    const submitBtn = () => cy.get('[data-cy=submitBtn]');

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

    it("Can check the terms of service box", () => {
        termsOfService()
            .check()
            .should('be.checked');
    });

    it("Can submit the form", () => {
        cy.contains(/Kristin Vaughn/i).should('not.exist');
        name().type('Kristin Vaughn');
        email().type('vaughn.kristin.n@gmail.com');
        password().type('12345');
        termsOfService().check();
        submitBtn().click();
        cy.contains(/Kristin Vaughn/i).should('exist');
    });

    it("Submit button is disabled if name is left empty", () => {
        name().should('have.value', '');
        email().type('vaughn.kristin.n@gmail.com');
        password().type('12345');
        termsOfService().check();
        submitBtn().should('be.disabled');
    });

    it("Submit button is disabled if email is left empty", () => {
        name().type('Kristin Vaughn');
        email().should('have.value', '');
        password().type('12345');
        termsOfService().check();
        submitBtn().should('be.disabled');
    });

    it("Submit button is disabled if password is left empty", () => {
        name().type('Kristin Vaughn');
        email().type('vaughn.kristin.n@gmail.com');
        password().should('have.value', '');
        termsOfService().check();
        submitBtn().should('be.disabled');
    });

    it("Submit button is disabled if terms of service is not checked", () => {
        name().type('Kristin Vaughn');
        email().type('vaughn.kristin.n@gmail.com');
        password().type('12345');
        termsOfService().should('not.be.checked');
        submitBtn().should('be.disabled');
    });
});