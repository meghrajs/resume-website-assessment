describe('resume-website test cases', () => {
	
	beforeEach(() => {
    // Load the page before each test case
    //cy.visit('http://192.168.1.218:8081/resume-website-assessment');
	cy.visit('http://localhost:8081/resume-website-assessment');
	cy.wait(2000);
  });
  
  it('should display the page title', () => {
    cy.title().should('eq', 'resume-website');
  });
  
  it('should contain the navigation links', () => {
    cy.get('.main-navigation')
      .should('contain', 'Home')
      .should('contain', 'About')
      .should('contain', 'Resume')
      .should('contain', 'Contact');
  });
  
  it('should display the social media links in the intro section', () => {
    cy.get('.intro-social').should('be.visible');
  });
  
});