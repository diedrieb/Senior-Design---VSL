const express = require('express');

const app = express();

app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow Origin", "*");
    res.setHeader(
        "Access-Control-Allow Header",
        "Origin, X-Requested-With, Content-Type, Accept"

    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    res.send('Hello from express!');
});

module.exports = app;