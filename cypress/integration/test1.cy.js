/*
describe('First Cypress Test', () => {
  it('Visits the resume-website and checks the page title', () => {
    cy.visit('http://localhost/resume-website-assessment'); // Replace YOUR_PORT_NUMBER with the port number your website is running on

    cy.title().should('contain', 'resume-website'); // Replace 'resume-website' with the expected page title
  });
});
*/

describe('First Cypress Test', () => {
  it('Visits the resume-website and checks the page title', () => {
    cy.visit('http://localhost/resume-website-assessment/index.html', { timeout: 10000 });

    // Wait for the title to contain 'resume-website' before making the assertion
    cy.title().should('include', 'htdocs');
  });
});