const express = require("express");
require("dotenv").config()
const cors = require("cors");
const serverless = require('serverless-http')


//MIDDLEWARE

const users = ["bc240429953"];

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// ROUTES

app.get('/users', (req, res) => {
    res.json(users);
});

// SERVER

PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);