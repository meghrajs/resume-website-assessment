FROM cypress/included:12.17.1
RUN mkdir /resume-website
WORKDIR /resume-website

#COPY ./package.json .
#COPY ./package-lock.json .
#COPY ./cypress.config.js .
#COPY ./cypress ./cypress
COPY . .

#RUN npm install
# Install Cypress and cache the binary
RUN npm install cypress@12.17.2
RUN npx cypress install


# Run the Cypress tests with recording enabled
ENTRYPOINT ["npx", "cypress", "run", "--record", "--key", "06fca1cf-58b2-44a5-ab9d-b23152ae1927"]
#ENTRYPOINT ["npm", "run"]