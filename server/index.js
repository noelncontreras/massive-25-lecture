const express = require("express");
const massive = require("massive");
require("dotenv").config();
//controllers
const {addMovie, getMovie} = require("./controllers/movieController");
;
const app = express();

//The string below is from the URI from Heroku, the site where we set up the DB at.
//we put ?ssl=true to put secure sockets to server for better security
massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected");
})

app.use(express.json())

app.post("/api/movies", addMovie)
app.get("/api/movies", getMovie)

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})