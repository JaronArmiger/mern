const express = require('express');
const MovieCtrl = require('../controllers/movie-ctrl');

const router = express.Router();

router.post('/movies', MovieCtrl.createMovie);
router.put('/movies/:id', MovieCtrl.updateMovie);
router.delete('/movies/:id', MovieCtrl.deleteMovie);
router.get('/movies/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getMovies);

module.exports = router;