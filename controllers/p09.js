// Controller for W09

 
const model = require('../models/pokemonModel');

exports.getPokemon = (page, callback) => {
    //Remember Page 1 will have an offset of 0

   const offset = 10 * (page - 1);
   model.getPokemon(offset, (data) => {
       callback(data);
   });
}

