import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {  
	if (test.state === "failed") {    
		const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed) (attempt 2).png`;    
		addContext({ test }, screenshot);  
	}
});

Cypress.on("test:after:run", (test, runnable) => {  
	if (test.state === "passed") {    
		const screenshot =`assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (passed) (attempt 1).png`;    
		addContext({ test }, screenshot);  
	}
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // You can handle the uncaught exception here, e.g., logging or ignoring it
  // By returning false, you are preventing Cypress from failing the test
  return false;
});
