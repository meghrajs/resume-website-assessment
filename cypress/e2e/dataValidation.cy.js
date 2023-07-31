
describe('Resume Website - Data Validation', () => {
 
		beforeEach(() => {
		cy.fixture('resume-data').as('resumeData');
		// Load the page before each test case
		cy.visit('/');
		
		cy.wait(4000);
	});

  it('should display the intro section with the correct content', () => {
    cy.get('@resumeData').then((resumeData) => {
      cy.get('#profile_name').should('have.text', " I'm " + resumeData.personalDetails.name);
      
	  const primarySkillsText = resumeData.primarySkills.map(skill => skill.skill).join('');
      cy.get('#primarySkills').invoke('text').then((text) => {
        expect(text.replace(/\s/g, '')).to.equal(primarySkillsText.replace(/\s/g, ''));
      });

    });
  });
  
  it('should display the about me section with the correct content', () => {
	  // Click on the menu toggle to expand the navigation menu
    cy.get('a.menu-toggle').click();

    // Ensure that the navigation menu is visible before clicking on "Resume"
    cy.get('ul.main-navigation').should('be.visible');

    // Click on "Resume" link in the navigation menu
    cy.get('ul.main-navigation').contains('About').click();

    // Wait for a moment to allow the page to scroll to the resume section
    cy.wait(1000);
	
    cy.get('@resumeData').then((resumeData) => {
      cy.get('#introduction').should('have.text', resumeData.introducton.statement);

      cy.get('#fullName').should('have.text', resumeData.personalDetails.name);
      cy.get('#dateOfBirth').should('have.text', resumeData.personalDetails.DOB);
      cy.get('#jobTitle').should('have.text', resumeData.personalDetails.jobTitle);
      cy.get('#personalWebsite').should('have.text', resumeData.personalDetails.website);
      cy.get('#profileEmail').should('have.text', resumeData.personalDetails.email);

      // Check if skills are displayed
      resumeData.skills.forEach((skill) => {
        cy.get('#skills').contains(skill.skill);
      });

	});
  });
  
  it('should display the resume section with the correct content', () => {
	  // Click on the menu toggle to expand the navigation menu
    cy.get('a.menu-toggle').click();

    // Ensure that the navigation menu is visible before clicking on "Resume"
    cy.get('ul.main-navigation').should('be.visible');

    // Click on "Resume" link in the navigation menu
    cy.get('ul.main-navigation').contains('Resume').click();

    // Wait for a moment to allow the page to scroll to the resume section
    cy.wait(1000);
	
    cy.get('@resumeData').then((resumeData) => {
      cy.get('#introduction').should('have.text', resumeData.introducton.statement);

      // Check if experiences are displayed
      resumeData.experiences.forEach((experience) => {
        cy.get('#experiences').contains(experience.position);
        cy.get('#experiences').contains(`${experience.startDate} - ${experience.endDate}`);
        cy.get('#experiences').contains(experience.company);
        cy.get('#experiences').contains(experience.description);
      });

      // Check if education items are displayed
      resumeData.education.forEach((education) => {
        cy.get('#educations').contains(education.degree);
        cy.get('#educations').contains(`${education.startDate} - ${education.endDate}`);
        cy.get('#educations').contains(education.institution);
        cy.get('#educations').contains(education.description);
      });
	});
  });
  
});
