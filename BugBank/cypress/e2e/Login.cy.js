describe('funcionalidades de cadastro', () => {

    beforeEach(() => {
      cy.visit('https://automationexercise.com');
    });
  
    it('Login do usuario', () => { 

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('Emool@hotmail.com.br');
        cy.get('[data-qa="login-password"]').type('password');
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();

        cy.get('.col-sm-6 > .btn').click();
        cy.get('.form-control').type('Por favor notificar via e-mail quando for concluido o processo de compra');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('Bruno cheiroso');
        cy.get('[data-qa="card-number"]').type('3332444355546665');
        cy.get('[data-qa="cvc"]').type('432');
        cy.get('[data-qa="expiry-month"]').type('08/10');
        cy.get('[data-qa="expiry-year"]').type('2025');
        cy.get('[data-qa="pay-button"]').click();


});
});