// const path = require('path');

// const express = require('express');

// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const PORT = process.env.PORT || 5000 

// const app = express();

// app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'views'));

// const adminRoutes = require('./routes/prove02-admin');
// const shopRoutes = require('./routes/prove02-shop');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/prove02-admin', adminRoutes.routes);
// app.use(shopRoutes.routes);

// app.use(errorController.get404);

// app.listen(PORT, () => console.log(`Listening on ${ PORT }`));