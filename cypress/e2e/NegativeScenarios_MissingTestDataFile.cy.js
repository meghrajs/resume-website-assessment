describe('Resume Website - Negative Test Scenarios - Test Data File is Missing', () => {
  const appUrl = 'http://' + Cypress.env('RUNNER_IP_ADDRESS') + ':8081/resume-website-assessment/negative_MissingTestData.html';
		beforeEach(() => {
		// Load the page before each test case
		cy.visit(appUrl);
		
		cy.wait(4000);
	});
  
  it('Displays an error message for missing cypress/fixtures/resume-data.json', () => {
    // Stub the fetch request to return a 404 response
    cy.intercept('GET', 'cypress/fixtures/randomName.json', { statusCode: 404 });

    // Check if the error message is displayed
    cy.contains('Resume data file not found. Please make sure the file exists.').should('be.visible');
  });
  
  
});
