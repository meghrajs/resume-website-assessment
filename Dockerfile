# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory within the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all the website files to the container
COPY . .

# Build the production version of the website (if applicable)
RUN npm run build

# Expose the port used by the web server (if applicable)
EXPOSE 80

# Command to start the web server (replace 'start' with your actual command)
CMD ["npm", "start"]
