const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const app = express();

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

module.exports = app;
