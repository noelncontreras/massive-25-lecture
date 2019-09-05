function addMovie(req, res) {
    //rating, genre, title, is_good
    const {title, genre, is_good, rating} = req.body;
    const db = req.app.get("db");
    db.addMovie(title, genre, is_good, rating).then(response => {
        console.log(response)
        res.sendStatus(200);
    })
}

function getMovie(req, res) {
    //if there is a rating query, we will send back all the movies with that rating
    const db = req.app.get("db");
    if(req.query.rating !== undefined) {
        db.getMovieByRating(req.query.rating).then(response => {
            // console.log(response);
            res.status(200).json(response[0].title);
        })
    } else if(req.query.is_good !== undefined) {
        db.getMovieByIsGood(req.query.is_good).then(response => {
            console.log(response);
            res.status(200).json(response);
        })
    }
}

module.exports = {
    addMovie,
    getMovie
}