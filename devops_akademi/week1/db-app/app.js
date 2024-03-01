"use strict";
const express = require("express");
const dbConnection = require("./helper/mysql");

const app = express();

dbConnection.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
  }
});

/* dbConnection.query(
  "INSERT INTO students (name, midterm_grade, final_grade, average) VALUES ('Ege', 22, 83)",
  (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      console.log("Data inserted successfully");
    }
  }
); */

app.get("/students", (req, res) => {
  dbConnection.query("SELECT * FROM students", (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

app.get("/students/:id", (req, res) => {
  dbConnection.query(
    "SELECT *, (midterm_grade + final_grade) / 2 AS average FROM students WHERE id = ?",
    [req.params.id],
    (err, results, fields) => {
      if (err) {
        console.log("Database query error: ", err);
      } else {
        res.status(200).json({
          status: "success",
          data: results,
        });
      }
    }
  );
});

app.get("/students/add/:name/:midterm/:final", (req, res) => {
  const name = req.params.name;
  const midterm = req.params.midterm;
  const final = req.params.final;
  const average = (parseInt(midterm) + parseInt(final)) / 2;

  const insertQuery = "INSERT INTO students (name, midterm_grade, final_grade, average) VALUES (?, ?, ?, ?)";

  dbConnection.query(insertQuery, [name, midterm, final, average], (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
      res.status(500).json({
        status: "error",
        message: "Error inserting student data",
      });
    } else {
      console.log("Student data inserted successfully");
      res.status(201).json({
        status: "success",
        message: "Student data inserted successfully",
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});