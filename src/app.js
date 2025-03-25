// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const eventRoutes = require("./routes/eventRoutes");

// const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);
// app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();

module.exports = app;
