describe('resume-website test cases', () => {
	
	const appUrl = 'http://' + Cypress.env('RUNNER_IP_ADDRESS') + ':8081/resume-website-assessment';
		beforeEach(() => {
		// Load the page before each test case
		cy.visit(appUrl);
		
		cy.wait(4000);
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
  
  it("should scroll to the about section when clicking on 'About' in the navigation menu", () => {

	// Expand the navigation menu
	cy.get('a.menu-toggle').click();
	
	// Validate that navigation menu has opened
    cy.get('ul.main-navigation').should('be.visible');
	
    // Click on the "About" link in the navigation menu
    cy.get('a[href="#about"]').click({ multiple: true });

    // Wait for the scroll animation to complete
    cy.wait(1000); // Adjust the wait time as needed

    // Check if the about section is visible on the page
    cy.get("#about").should("be.visible");
  });
  
   it('should scroll to the resume section when clicking on "Resume" in the navigation menu', () => {
    // Click on the menu toggle to expand the navigation menu
    cy.get('a.menu-toggle').click();

    // Ensure that the navigation menu is visible before clicking on "Resume"
    cy.get('ul.main-navigation').should('be.visible');

    // Click on "Resume" link in the navigation menu
    cy.get('ul.main-navigation').contains('Resume').click();

    // Wait for a moment to allow the page to scroll to the resume section
    cy.wait(1000);

    // Assert that the URL contains "#resume" to confirm the scroll
    cy.url().should('include', '#resume');

    // Assert that the resume section is now visible
    cy.get('#resume').should('be.visible');
  });
  
  it('should scroll to the contact section when clicking on "Contact" in the navigation menu', () => {
    // Click on the menu toggle to expand the navigation menu
    cy.get('a.menu-toggle').click();

    // Ensure that the navigation menu is visible before clicking on "Contact"
    cy.get('ul.main-navigation').should('be.visible');

    // Click on "Contact" link in the navigation menu
    cy.get('ul.main-navigation').contains('Contact').click();

    // Wait for a moment to allow the page to scroll to the contact section
    cy.wait(1000);

    // Assert that the URL contains "#contact" to confirm the scroll
    cy.url().should('include', '#contact');

    // Assert that the contact section is now visible
    cy.get('#contact').should('be.visible');
  });
  
  it('should scroll to the intro section when clicking on "Home" in the navigation menu', () => {
    // Click on the menu toggle to expand the navigation menu
    cy.get('a.menu-toggle').click();

    // Ensure that the navigation menu is visible before clicking on "Home"
    cy.get('ul.main-navigation').should('be.visible');
	
	// Click on "Resume" link in the navigation menu
    cy.get('ul.main-navigation').contains('Resume').click();

    // Wait for a moment to allow the page to scroll to the resume section
    cy.wait(1000);
	
	// Click on the menu toggle to expand the navigation menu
    cy.get('a.menu-toggle').click();

    // Ensure that the navigation menu is visible before clicking on "Home"
    cy.get('ul.main-navigation').should('be.visible');

    // Click on "Home" link in the navigation menu
    cy.get('ul.main-navigation').contains('Home').click();

    // Wait for a moment to allow the page to scroll to the intro section
    cy.wait(1000);

    // Assert that the URL contains "#top" to confirm the scroll to the intro section
    cy.url().should('include', '#intro');

    // Assert that the intro section is now visible
    cy.get('#intro').should('be.visible');
  });
  
  it('should link to the about section when clicking on "More About Me" button', () => {
    // Click on the "More About Me" button
    cy.contains('More About Me').click();

    // Wait for a moment to allow the page to scroll to the about section
    cy.wait(1000);

    // Assert that the URL contains "#about" to confirm the link to the about section
    cy.url().should('include', '#about');

    // Assert that the about section is now visible
    cy.get('#about').should('be.visible');
  });
  
  it('should link to the contact section when clicking on "Hire Me" button', () => {
    // Click on the "Hire Me" button
    cy.contains('Hire Me').click();

    // Wait for a moment to allow the page to scroll to the contact section
    cy.wait(1000);

    // Assert that the URL contains "#contact" to confirm the link to the contact section
    cy.url().should('include', '#contact');

    // Assert that the contact section is now visible
    cy.get('#contact').should('be.visible');
  });
  
  it('should bring the user back to the intro section when clicking on "Back to Top" link', () => {
    // Click on the menu toggle to expand the navigation menu
    cy.get('a.menu-toggle').click();

    // Ensure that the navigation menu is visible before clicking on "Home"
    cy.get('ul.main-navigation').should('be.visible');
	
	// Click on "Resume" link in the navigation menu
    cy.get('ul.main-navigation').contains('Resume').click();

    // Wait for a moment to allow the page to scroll to the resume section
    cy.wait(1000);
	
	// Click on the "Back to Top" link
    cy.get('a[href="#top"]').click();

    // Wait for a moment to allow the page to scroll to the intro section
    cy.wait(1000);

    // Assert that the URL contains "#top" to confirm the scroll to the intro section
    cy.url().should('include', '#top');

    // Assert that the intro section is now visible
    cy.get('#intro').should('be.visible');
  });
  
});