
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  time: Number,
  year: Number,
  image: String,
  introduce: String,
});

module.exports = mongoose.model("Movie", movieSchema);
