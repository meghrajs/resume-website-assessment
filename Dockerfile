# Use the official Node.js image as the base image
#FROM node:14
FROM cypress/included:8.3.0

# Set the working directory to /usr/local/apache2/htdocs/
WORKDIR /usr/local/apache2/htdocs/
#WORKDIR /usr/src/app

# Copy your application files to the container
COPY package.json package-lock.json ./

# Install dependencies
#RUN npm install

# Set up a virtual framebuffer (Xvfb) for headless testing
#RUN apt-get update && apt-get install -y xvfb

# Set the environment variable for Cypress to use Xvfb
#ENV DISPLAY=:99

# Copy the rest of your application files to the container
COPY . .
#COPY cypress/cypress.json /usr/local/apache2/htdocs/cypress/cypress.json


# Install Cypress and required dependencies
#RUN npm install cypress --save-dev
#RUN apt-get update && apt-get install -y libnss3 libatk1.0-0 libatk-bridge2.0-0

# Set up a virtual framebuffer (Xvfb) for headless testing
#RUN apt-get install -y xvfb

# Set the environment variable for Cypress to use Xvfb
#ENV DISPLAY=:99

# Install Apache HTTP server
RUN apt-get update && apt-get install -y apache2

# Install Node.js and npm
#RUN apk add --update nodejs npm

# Install Cypress
#RUN npm install cypress --save-dev

# Expose the port your Apache server is running on
EXPOSE 80

# Start the Apache HTTP server
#CMD ["apache2ctl", "-D", "FOREGROUND"]
CMD ["npx", "http-server", "-p", "80"]

# Run Cypress tests using the full path to the binary
#CMD ["./node_modules/.bin/cypress", "run", "--spec", "cypress/e2e/test1.cy.js"]