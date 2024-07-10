
const Movie = require("../models/movie");

// lay all phim
exports.getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

// lay phim theo id
exports.getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
};

// tao phim
exports.createMovie = async (req, res) => {
  const newMovie = await Movie.create(req.body);
  res.json(newMovie);
};

// update phim
exports.updateMovie = async (req, res) => {
  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedMovie);
};

// delete theo id
exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
};

