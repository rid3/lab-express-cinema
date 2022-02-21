 const {Schema, model} = require ("mongoose") //desestructurando las propiedades que trae mongoose para poder trabajar con ellas

 //creo el Schema
 const moviesSchema = new Schema ({
     title: {
         type: String
     },

     director: {
         type: String
     },

     image: {
         type: String
     },

     description: {
         type: String
     },
     showtimes: [{
         type: String
     }]

 })

 //con el Schema creo el Model, y le mando primero como un str el nombre del Model.
 const Movie = model ("Movie", moviesSchema)

 //exporto el Model para poder usarlo en otros lugares. 
 module.exports = Movie

