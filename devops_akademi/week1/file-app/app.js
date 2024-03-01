const fs = require("fs");
const express = require("express");

const app = express();

// read data file from local file system
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
console.log(data); // Veriyi kontrol etmek için eklenen satır
const dataObj = JSON.parse(data); // JSON.parse kullanılmalıdır

// write json file to local file system
dataObj.name = "Ezgi";
dataObj.age = 19;
const newData = JSON.stringify(dataObj);
fs.writeFileSync(`${__dirname}/data.json`, newData); // fs.writeFileSync kullanılmalıdır

app.get("/student", (req, res) => {
    res.status(200).json({
        status: "Success",
        data: dataObj,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
