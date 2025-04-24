describe('funcionalidades de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('cadastrar um novo usuário', () => { 
 
    cy.get('a > img').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.signup-form > h2').should('be.visible');

    cy.get('[data-qa="signup-name"]').type('Yon Do Valle');
    cy.get('[data-qa="signup-email"]').type('yondovalli@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('be.visible');

    cy.get('#id_gender1').click();
    cy.get('[data-qa="name"]').clear().type('Yon Do Valle');
    cy.get('[data-qa="email"]').should('have.value', 'yondoValie@gmail.com');
    cy.get('[data-qa="password"]').type('password');
    cy.get('[data-qa="days"]').select('6');
    cy.get('[data-qa="months"]').select('October');
    cy.get('[data-qa="years"]').select('1994');

    cy.get('#newsletter').click();

    cy.get('#optin').click();

    cy.get('[data-qa="first_name"]').type('Yon');
    cy.get('[data-qa="last_name"]').type('Do Valle');
    cy.get('[data-qa="company"]').type('Study');
    cy.get('[data-qa="address"]').type('Rua A, 123');
    cy.get('[data-qa="address2"]').type('Rua B, 321');
    cy.get('[data-qa="country"]').select('Australia');
    cy.get('[data-qa="state"]').type('São Paulo');
    cy.get('[data-qa="city"]').type('São Paulo');
    cy.get('[data-qa="zipcode"]').type('0341651155');
    cy.get('[data-qa="mobile_number"]').type('11912345628');
    
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();
    
    cy.get('b').should('have.text', 'Yon')
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

    cy.get('[data-qa="account-deleted"]').should('be.visible');


  });
  });