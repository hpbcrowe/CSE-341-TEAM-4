// Controller for W09

 
const model = require('../models/pokemonModel');

exports.getPokemon = (pageNum, callback) => {
    //Remember Page 1 will have an offset of 0

   const offset = 10 * (pageNum - 1);
   model.getPokemon(offset, (data) => {
       callback(data);
   });
}

