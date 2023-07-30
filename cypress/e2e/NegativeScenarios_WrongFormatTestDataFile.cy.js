describe('Resume Website - Negative Test Scenarios - Wrong format in Test Data File', () => {
  const appUrl = 'http://' + Cypress.env('RUNNER_IP_ADDRESS') + ':8081/resume-website-assessment/negative_wrongFormat.html';
		beforeEach(() => {
		// Load the page before each test case
		cy.visit(appUrl);
		
		cy.wait(4000);
	});
  
  it('Displays an error message for invalid JSON data', () => {
    // Stub the fetch request to return invalid JSON data
    cy.intercept('GET', 'cypress/fixtures/resume-data.json', 'invalid json data');

    // Check if the error message is displayed
    cy.contains('Invalid data format. Please check the JSON file.').should('be.visible');
  });
  
});
