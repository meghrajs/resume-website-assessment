describe('Resume Website - Contact Form Validation', () => {
  
		beforeEach(() => {
		// Load the page before each test case
		cy.visit('/');
		
		cy.wait(4000);
	});

  it('should access and fill all fields in the contact form', () => {
    // Scroll to the contact form
    cy.get('#contact').scrollIntoView();

    // Accessing and filling the Name field
    cy.get('#contactName').type('John Doe').should('have.value', 'John Doe');

    // Accessing and filling the Email field
    cy.get('#contactEmail').type('johndoe@example.com').should('have.value', 'johndoe@example.com');

    // Accessing and filling the Subject field
    cy.get('#contactSubject').type('Regarding Job Opportunity').should('have.value', 'Regarding Job Opportunity');

    // Accessing and filling the Message field
    cy.get('#contactMessage').type('Hello, I am interested in working with you.').should('have.value', 'Hello, I am interested in working with you.');

    // Submitting the contact form
    cy.get('.submitform').click();

	// Asserting that the form submission message is displayed
	cy.get("#message-success").should("exist");
	
   
    //cy.get('#message-success').should('be.visible').contains('Your message was sent, thank you!');
  });
});
