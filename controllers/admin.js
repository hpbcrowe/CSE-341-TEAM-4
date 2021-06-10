const Product = require('../models/product.js');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/prove02-addProduct', {
       title: 'Add Product',
       path: '/admin/prove02-addProduct',
       formsCSS: true,
       productCSS: true,
       activeAddProduct: true
   });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageURL, description, price);
  product.save();
   res.redirect('/');
   
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        //const details = adminData.details;
    res.render('admin/products', {
        prods: products,
        title: 'Admin Products',
        path: '/admin/products',
        
        });
    });    
}
