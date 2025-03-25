describe('funcionalidades de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('cadastrar um novo usuário', () => { 
 
    cy.get('a > img').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.signup-form > h2').should('be.visible');

    cy.get('[data-qa="signup-name"]').type('Maxwell');
    cy.get('[data-qa="signup-email"]').type('Maxwellz@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('be.visible');

  });
  });