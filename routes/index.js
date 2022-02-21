const express = require('express');
const res = require('express/lib/response');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res,next) => {
    //console.log("movies running")
    Movie.find()
    .then ((response) => {
        console.log("quetul") //esto me lo consolea
        console.log(response) //no me estaría consoleando las movies, me devuelve un array vacío. 
        res.render("movies.hbs", {response});
        //devuelve:
        //         []
        // GET /movies 304 60.282 ms - -
        // GET /js/script.js 304 3.762 ms - -
        // GET /stylesheets/style.css 304 1.641 ms - -
    })
    .catch ((err) => {

    })
    })


    



module.exports = router;
