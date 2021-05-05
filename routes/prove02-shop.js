const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./prove02-admin');

const router = express.Router();

// This file handles all routes prefixed with /prove02-shop

// GET -> /prove02-shop/
router.get('/', (req, res, next) => {
const products = adminData.products;
const details = adminData.details;
res.render('pages/prove02-shop', {
    prods: products,
    dets: details,
    title: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
    });
});

//module.exports = router;
exports.routes = router;