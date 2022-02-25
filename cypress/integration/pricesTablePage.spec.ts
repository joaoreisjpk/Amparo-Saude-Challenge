describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/prices-table');
  });

  it('should have the url path: http://localhost:3000/prices-table', () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('http://localhost:3000/prices-table');
      expect(location.host).to.eq('localhost:3000');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:3000');
      expect(location.pathname).to.eq('/prices-table');
      expect(location.port).to.eq('3000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });
  });
});
