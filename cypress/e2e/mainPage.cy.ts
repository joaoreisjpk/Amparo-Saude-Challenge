/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have the url path: http://localhost:3000', () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('http://localhost:3000/');
      expect(location.host).to.eq('localhost:3000');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:3000');
      expect(location.pathname).to.eq('/');
      expect(location.port).to.eq('3000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });
  });

  it('should have the default texts', () => {
    cy.get('p').should('contain.text', 'Ligações menores que 30');
    cy.get('p').should('contain.text', 'Ligações menores que 60');
    cy.get('p').should('contain.text', 'Ligações menores que 120');

    cy.get('p span').should('contain.text', '30');
    cy.get('p span').should('contain.text', '60');
    cy.get('p span').should('contain.text', '120');

    cy.get('h4').should(
      'contain.text',
      'Ligações de um jeito simples e eficiente.'
    );
    cy.get('h4 span').should('contain.text', 'eficiente');

    cy.get('p').should('have.length', '5');
    cy.get('span').should('have.length', '11');
    cy.get('h4').should('have.length', '1');
    cy.get('h6').should('have.length', '3');
  });

  it('should have tree buttons', () => {
    cy.get('button').should('have.length', '3');

    cy.get('button').should('have.length', '3');

    cy.contains('button', 'Consulte taxas locais');

    cy.contains('button', 'Quem é a Amparo?');

    cy.contains('button', 'Calcule seu Desconto');
  });

  it('should have the buttons working propperly', () => {
    cy.contains('button', 'Consulte taxas locais').click();

    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('http://localhost:3000/price-table');
      expect(location.host).to.eq('localhost:3000');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:3000');
      expect(location.pathname).to.eq('/price-table');
      expect(location.port).to.eq('3000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });

    cy.contains('button', 'Calcule seu Desconto').click();

    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('http://localhost:3000/calculadora');
      expect(location.host).to.eq('localhost:3000');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:3000');
      expect(location.pathname).to.eq('/calculadora');
      expect(location.port).to.eq('3000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });

    cy.contains('button', 'Quem é a Amparo?').click();

    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('http://localhost:3000/');
      expect(location.host).to.eq('localhost:3000');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:3000');
      expect(location.pathname).to.eq('/');
      expect(location.port).to.eq('2000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });
  });
});

export {};
