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
ENTRYPOINT ["npm", "run"]