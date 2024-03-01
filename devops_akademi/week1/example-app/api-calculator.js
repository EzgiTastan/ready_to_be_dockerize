const express = require("express");

const app = express();

//route'larımızı yazmaya başlarsak

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.get("/api/topla/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.send(`Toplam: ${sum}`);
});

app.get("/api/carp/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const carpim = num1 * num2;
    res.send(`Çarpım: ${carpim}`);
});

app.get("/api/bol/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    if (num2 !== 0) {
        const division = num1 / num2;
        res.send(`Bölüm: ${division}`);
    } else {
        res.send("Bu islem gerceklestirilemez.");
    }
});

app.get("/api/cikar/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    if (num2 < num1) {
        const fark = num1 - num2;
        res.send(`Fark: ${fark}`);
    } else {
        res.send("Çıkarma işlemi gerçekleştirilemez. İkinci sayı, birinci sayıdan küçük olmalıdır.");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
