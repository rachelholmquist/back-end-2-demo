const express = require('express');
const cors = require('cors');
const { getAllMovies, deleteMovie, addMovie } = require('./movieController');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/movies', getAllMovies);
app.delete('/api/movies/:id', deleteMovie);
app.post('/api/movies', addMovie);

app.listen(4004, () => console.log('app running on port 4004'));