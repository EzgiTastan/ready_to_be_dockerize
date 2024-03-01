const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "you_should_enter_your_own_password",
  database: "example_app",
});

module.exports = connection;
