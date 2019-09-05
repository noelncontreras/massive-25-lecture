SELECT * FROM movies
WHERE is_good = $1;

--for boolean(like is_good is in our database), you CANNOT use ILIKE. You have to use an = so it can evaluate if it is equal to true or false.