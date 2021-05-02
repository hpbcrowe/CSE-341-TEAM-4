const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

const adminData = require('./routes/prove02-admin');
const shopRoutes = require('./routes/prove02-shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/prove02-admin', adminData.routes);
app.use('/prove02-shop', shopRoutes.routes);

app.use((req, res, next) => {
    res.status(404).render('partials/prove02-404', { title:'Page Not Found', 
path: req.url});
});

app.listen(3000);