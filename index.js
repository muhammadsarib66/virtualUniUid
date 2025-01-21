const express = require("express");
require("dotenv").config();
const cors = require("cors");

// MIDDLEWARE
const users = ["BC240429953", "BC240430371","BC240220029"];

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
    res.json(users); // Send the array directly
});

// SERVER
const PORT = process.env.PORT || 7000; // Ensure the port matches your frontend fetch URL

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
