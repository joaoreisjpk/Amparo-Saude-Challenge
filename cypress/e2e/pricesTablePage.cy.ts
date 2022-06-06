/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/price-table');
  });

  it('should have the url path: http://localhost:3000/price-table', () => {
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
  });

  it('should have the title Taxas de ligações intermunicipais', () => {
    cy.contains('h4', 'Taxas de ligações intermunicipais');
  });

  it('should have a table header', () => {
    cy.contains('tr', 'Cidade Origem');
    cy.contains('tr', 'Cidade Destino');
    cy.contains('tr', 'R$ Por Minuto');
  });

  it('should have all the prices content', () => {
    cy.contains('td', '011');
    cy.contains('td', '016');
    cy.contains('td', '017');
    cy.contains('td', '018');
    cy.contains('td', 'R$1.90');
    cy.contains('td', 'R$1.70');
    cy.contains('td', 'R$0.90');
    cy.contains('td', 'R$2.90');
    cy.contains('td', 'R$2.70');
  });
});

export {};