const movies = require('./db.json');
let globalId = 11;

 
    const getAllMovies = (req, res) => {
        res.status(200).send(movies);
    } 
    const deleteMovie = (req, res) => {
        const movies = required('./db.json')
        const { id }= req.params;
        for(let i = 0; i < movies.length; i++){
            if(movies[i].id === +id){
                movies.splice(i, 1);
                return res.status(200).send(movies);
            }
        }
        res.status(400).send(movies);
    }


const addMovie = (req, res) => {
    const { title, rating, imageURL } = req.body;
    movies.push({
        title,
        rating,
        imageURL,
        id: globalId,
    });
    globalId++;
    res.status(200).send(movies);
}

const updateRating = (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

   for(let i = 0; i <movies.length; i++){
   if(movies[i].id === +id){
    if(type === 'plus' && movies[i].rating < 5){
        movies[i].rating++
    } else if (type === 'minus' && movies[i].rating > 1){
        movies[i].rating--
    }
    res.status(200).send(movies);
}  }
}

module.exports = {
    getAllMovies,
    deleteMovie,
    addMovie,
}