// Routes for W09 Prove Assignment.
const express = require('express');
const router = express.Router();
var pokeController = require('../controllers/p09.js');

router.get('/', (req,res, next) => {
    res.render('pages/welcomePage');  
    //had just welcomePage no /views/pages/
})
//had just /pokemon/:page
.get('/pokemon/:page', (req, res, next) => {
    const page = req.params.page;
    pokeController.getPokemon(page, (pokemon) => {
        res.render('pages/pokemon', {
            pokemonList: pokemon,
            page: page
        });
    });
});
     
module.exports = router;