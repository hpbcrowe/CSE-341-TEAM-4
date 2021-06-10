const { render } = require('pug');
const Product = require('../models/product.js');



exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        //const details = adminData.details;
    res.render('shop/product-list', {
        //productId: 12121,
        prods: products,
        title: 'All Products',
        path: '/products',
        
        });
    });
    
};


exports.getProduct = (req, res, next) => {
   const prodId = req.params.productId;
   console.log(prodId);
    res.redirect('/prove02-shop/');
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        //const details = adminData.details;
    res.render('shop/index', {
        prods: products,
        title: 'Shop',
        path: '/',
        
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        title: 'Your Cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        title: 'Your Orders'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        title: 'Checkout'
    })
}