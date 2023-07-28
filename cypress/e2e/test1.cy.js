describe('First Cypress Test', () => {
  it('Visits the resume-website and checks the page title', () => {
    cy.visit('http://localhost/resume-website-assessment'); // Replace YOUR_PORT_NUMBER with the port number your website is running on

    cy.title().should('contain', 'resume-website'); // Replace 'resume-website' with the expected page title
  });
});