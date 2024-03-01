const express = require("express");

const app = express();

// Her birine route denir. API'ın nereye gideceğini belirler.

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/api/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});

app.get("/api/number/:number", (req, res) => {
    const number = req.params.number;
    res.send(`Your number is ${number}`);
});

app.get("/api/add/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
