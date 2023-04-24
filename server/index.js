require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// database connection

// middlewares
app.use(express.json());
app.use(cors());

// routes

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
