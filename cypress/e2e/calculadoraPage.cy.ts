/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/calculadora');
  });

  it('should have the url path: http://localhost:3000/calculadora', () => {
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
  });

  it('should have a table header', () => {
    cy.contains('tr', 'Origem');
    cy.contains('tr', 'Destino');
    cy.contains('tr', 'Tempo');
    cy.contains('tr', 'Plano FaleMais');
    cy.contains('tr', 'Com FaleMais');
    cy.contains('tr', 'Sem FaleMais');
  });

  it('should have three selects', () => {
    cy.contains('[data-cy=ddd-origem]', 'Select');
    cy.contains('[data-cy=ddd-destino]', 'Select');
    cy.contains('[data-cy=plano]', 'FaleMais 30');
  });

  it('should have a input and a Calcular button', () => {
    cy.get('[type=number]').should('have.value', '0');
    cy.contains('button', 'Calcular');
  });

  it('should be able to check the prices', () => {
    cy.get('[type=number]').should('have.value', '0');
    cy.contains('button', 'Calcular');
  });

  it('should be able to check the prices', () => {
    // setting the inputs
    cy.contains('[data-cy=ddd-origem]', 'Select').click();
    cy.contains('li', '011').click();
    cy.contains('[data-cy=ddd-destino]', 'Select').click();
    cy.contains('li', '016').click();
    cy.get('[type=number]').should('have.value', '0').type('2000');
    cy.contains('button', 'Calcular').click();

    // checking the table data
    cy.contains('td', '011');
    cy.contains('td', '016');
    cy.contains('td', 'FaleMais 30');
    cy.get('[data-testid=DeleteOutlineIcon]');
    cy.contains('td', 'R$4,117.30');
    cy.contains('td', 'R$3,800.00');
  });

  it('should remove an item when the remove button is clicked', () => {
    // removing the item
    cy.get('[data-testid=DeleteOutlineIcon]').click();

    // checking if it was removed
    cy.contains('td', '011').should('not.exist');
    cy.contains('td', '016').should('not.exist');
    cy.contains('td', 'FaleMais 30').should('not.exist');
    cy.contains('td', 'R$4,117.30').should('not.exist');
    cy.contains('td', 'R$3,800.00').should('not.exist');
  });
});
export {};