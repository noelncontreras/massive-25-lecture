INSERT INTO movies
(title, genre, is_good, rating)
VALUES
($1, $2, $3, $4);

--RETURNING *;

--or

--SELECT * FROM movies;