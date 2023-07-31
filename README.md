# Single Page Resume Website


## Introduction
This is an assessment project for building and testing a single-page resume website. The project can be hosted and built on your local machine using an Apache server or configured to run in a Docker container. Detailed requirements can be found in the '[Requirements.docx](Requirements.docx)' file placed at the project root.

## Installation

* Running the website on a local machine would require an Apache web server installed and in a running state. 
* An easy fix can be downloading and installing "XAMMP" as it comes with an Apache server and is easy to start with. 
* Place all the project files within the "htdocs" folder in the "XAMPP" installation directory and visit "http://localhost:8081/resume-website-assessment" from your browser. 
* Make sure to change the port to '81' in http.conf file which can be accessed from the XAMPP control panel. 
* If you are not updating the port, kindly use the default port "8080" in the URL.

### Application Preview
![Screenshot](Images%20for%20Documentation/application_preview.png)

### Application Features
* Single Page Resume Website with Navigation Options
* Separate sections are created to display candidate data
* The '[resume-data.json](resume-data.json)' file provides the data used to dynamically display your personalized resume on the website. Modify this file to showcase your unique skills, experiences, and achievements
* Contact us form fill in details and get in touch

## Project Structure
This section describes the organization of the project and provides an overview of the main files and folders.
* resume-website-assessment/
  * cypress/
    * fixtures/
      * resume-data.json
    * e2e/
      * smokeTestSuite.cy.js
      * dataValidation.cy.js
      * contactFormValidation.cy.js
      * NegativeScenarios_MissingTestDataFile.cy.js
      * NegativeScenarios_WrongFormatTestdataFile.cy.js
    
* index.html
* js/
  * script.js  
* images/
  * intro-bg.jpg
* cypress.config.json
* package.json
* README.md
* requirements.docx

### Description of Key Files and Folders

1. `cypress/`: This folder contains all the Cypress test files and configurations.

   - `fixtures/`: Contains test data fixtures used in Cypress tests.
   - `e2e/`: Contains test suites (test files) written in Cypress.

2. `node_modules/`: Contains the dependencies installed by Node.js package manager (`npm install`).

3. `cypress.config.json`: The configuration file for Cypress, which sets various options for test execution.

4. `package.json`: The project's package file that includes dependencies, scripts, and other details.


## Testing Framework and Structure  
The Single Page Resume Website project utilizes Cypress as the chosen testing framework for automated testing. Cypress is an open-source JavaScript automation tool designed specifically for modern web applications. It offers a range of powerful features that make writing and maintaining tests easier and more efficient.

### Key Benefits of Using Cypress:
* No Explicit Waits: Cypress automatically waits for DOM elements to be available, eliminating the need for explicit wait statements in test scripts. This reduces test flakiness and makes test code cleaner.
* Flake-Free Tests: Cypress retries commands automatically when encountering transient failures, leading to more reliable and flake-free test runs.
* No Network Lag: Cypress directly interacts with the browser and its APIs, enabling faster test execution by bypassing network communication, unlike other tools.
* Snapshots: Cypress automatically takes screenshots and records videos during test execution, making it easier to diagnose and debug failures.
* Shorter Feedback Cycles: With its fast and efficient test execution, Cypress provides developers with quick feedback on their changes, helping them identify and fix issues early in the development process.

## Testing Artifacts
Testing artifacts related to test cases/scenarios can be found within the '[Testing Artifacts](Testing%20Artifacts)' directory of the project.
![Screenshot](Images%20for%20Documentation/Test%20Coverage%20Matrix.png)
![Screenshot](Images%20for%20Documentation/Test%20Coverage.png)
![Screenshot](Images%20for%20Documentation/Test%20Scenario%20Status.png)


### CI/CD(Jenkins)
Jenkins is configured/set-up locally and connected via GIT Plugin to fetch and trigger automated test cases on latest code.

### Test Scenario Pass/Fail Dashboard
Cypress Dashboard ("https://cloud.cypress.io/") is configured to keep track of each run and provides visibility of pass/fail along with details like:
* GIT Branch from which Test Scenario was Executed
* Execution Date Time
* Pass/Fail Status, along with failure message and screenshot
![Screenshot](Images%20for%20Documentation/cypress_dashboard_all_branches.png)
![Screenshot](Images%20for%20Documentation/cypress_dashboard_test_runs.png)
![Screenshot](Images%20for%20Documentation/cypress_dashboard_test_scenario_run.png)

## Docker Container Setup
Make sure Docker is installed on your machine and also below packages are available.

1. Node.js (v14 or higher)
2. npm (Node Package Manager)

To install project dependencies, run the following command in the project root directory:

 ``` 
npm install
 ```
### Building Docker Image
Run the following command in the project root directory, expecting the previous command is already executed and there were no errors
 ``` 
npm run build
 ```

this build command will be reading the script written in Dockerfile which is creating a docker image from httpd2.4 which is the official Apache HTTP Server image and will have all the necessary things to run an Apache server. The copy statement will copy all project-related files to the htdocs folder of the apache server on the container.

 ```
FROM httpd:2.4
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf
COPY . /usr/local/apache2/htdocs/resume-website-assessment
EXPOSE 81
 ```

### Starting Docker Container
Run the following command in the project root directory, expecting the previous command is already executed and there were no errors
 ``` 
npm start
 ```
the command above is mapping to the instruction written in package.json which is equivalent to below command if run separately.
 ``` 
"start": "docker run -dit --name resume-website-assessment -p 8081:80 resume-website-assessment"
 ```

### Opening Cypress and triggering test execution
Run the following command if you want to start the Cypress UI and then want to initiate tests using the Cypress UI.
 ``` 
npm run cy:open
 ```
![Screenshot](Images%20for%20Documentation/Cypress%20View.png)
### Running Tests from Command Line
If you simply want to trigger the test execution from the command line, make sure you are in the project root folder and type in the below command, it will run tests in headless mode and update the test status within the console.
 ``` 
npm test
 ```
![Screenshot](Images%20for%20Documentation/local%20run%20from%20command%20line.png)
