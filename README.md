# Database Application with Express.js and MySQL
This is a simple Node.js application built with Express.js for handling HTTP requests and MySQL for database management. The application allows users to perform CRUD operations on a student database.

## Setup Instructions:
- Clone the repository to your local machine:`git clone https://github.com/EzgiTastan/ready_to_be_dockerize.git`
- Navigate to the project directory:`cd db-app`
- Install dependencies:`npm install`
- Start the server: `node app.js`
- Open your browser and navigate to http://localhost:3000 to access the application.

## Available Endpoints:
- Get Student List:`GET /students`
- Get Student by ID:`GET /students/:id`
- Add New Student:`GET /students/add/{name}/{midterm}/{final}`

## Observations and Potential Issues:
Ensure to provide correct and complete information for the host, user, password, and database fields in the helper/mysql.js file for proper connection to the MySQL database.
Make sure to have a students table created in your MySQL database.
