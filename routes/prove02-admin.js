const path = require('path');

const express = require('express');

//const rootDir = require('/..util/path');

const router = express.Router();

const products = [];
//const info = [];
const book = {title: 'Any Book', description: 'A boring book'}
// GET -> /prove02-admin/
// router.get('/')
// No Function Defined yet


// GET -> /prove02-admin/prove02-add-product
router.get('/prove02-add-product', (req, res, next) => {
    res.render('pages/prove02-addProduct', {
        title: 'Add Product',
        path: '/prove02-admin/prove02-add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

router.post('/prove02-add-product', (req, res, next) => {
    products.push({title: req.body.title });
    
    //info.push({description: req.body.description });
    res.redirect('/prove02-shop/');
});

exports.routes = router;
exports.products = products;