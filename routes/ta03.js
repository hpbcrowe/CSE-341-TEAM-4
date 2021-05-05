//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const fs = require('fs');
const fetch = require('node-fetch');



router.get('/',(req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/search',(req, res, next) => {
    let URL = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
    const productData = [];
    const tag = req.body.tag;

     fetch(URL)
     .then(res => res.json())
     .then((out) => {
         if (productData != null) {
             out.forEach(data => {
                 productData.push(data)
             })
         }
         console.log(productData[0]);
         const tagProducts = productData.filter((productData) => {
             //Search for tag in a product's tag and add if found
             return productData.tags.includes(tag);
         });
         res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03',
            painIn: tagProducts,
        });

     })
     .catch(err => { throw err });



});

module.exports = router;
