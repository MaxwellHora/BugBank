describe('funcionalidades de cadastro', () => {

    beforeEach(() => {
      cy.visit('https://automationexercise.com');
    });
  
    it('cadastrar um novo usuário', () => { 
   
      cy.get('a > img').should('be.visible');
      cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
      cy.get('.signup-form > h2').should('be.visible');
  
      cy.get('[data-qa="signup-name"]').type('Emolllaaa souaza');
      cy.get('[data-qa="signup-email"]').type('Oioioi@hotmail.com.br');
      cy.get('[data-qa="signup-button"]').click();
      cy.get(':nth-child(1) > b').should('be.visible');
  
      cy.get('#id_gender1').click();
      cy.get('[data-qa="name"]').clear().type('Emolllaaa souza');
      cy.get('[data-qa="email"]').should('have.value', 'Oioioi@hotmail.com.br');
      cy.get('[data-qa="password"]').type('password');
      cy.get('[data-qa="days"]').select('6');
      cy.get('[data-qa="months"]').select('October');
      cy.get('[data-qa="years"]').select('1994');
  
      cy.get('#newsletter').click();
  
      cy.get('#optin').click();
  
      cy.get('[data-qa="first_name"]').type('emolll souza');
      cy.get('[data-qa="last_name"]').type('Hora');
      cy.get('[data-qa="company"]').type('Study');
      cy.get('[data-qa="address"]').type('Rua A, 123');
      cy.get('[data-qa="address2"]').type('Rua B, 321');
      cy.get('[data-qa="country"]').select('Australia');
      cy.get('[data-qa="state"]').type('São Paulo');
      cy.get('[data-qa="city"]').type('São Paulo');
      cy.get('[data-qa="zipcode"]').type('03416555');
      cy.get('[data-qa="mobile_number"]').type('11912345678');
      
      cy.get('[data-qa="create-account"]').click();
      cy.get('[data-qa="account-created"]').should('be.visible');
  
      cy.get('[data-qa="continue-button"]').click();

      cy.get(':nth-child(2) > .panel-heading > .panel-title').click();
        
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