require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
//const authRoutes = require("./routes/auth_v");
//const userRoutes = require("./routes/Volunteers");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// routes
//app.use("/api/Volunteers", userRoutes);
//app.use("/api/auth_v", authRoutes);

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));
