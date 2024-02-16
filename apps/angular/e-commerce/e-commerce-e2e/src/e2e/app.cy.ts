describe('e-commerce-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should load', () => {
    cy.contains('e-commerce');
  });
});
