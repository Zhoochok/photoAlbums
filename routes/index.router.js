const router = require('express').Router();

//Views
const mainRouter = require('./views/main.router');
// const productView = require('./views/product.view');
const authView = require('./views/auth.view');

// //Api
// const productApi = require('./api/product.api');
const authApi = require('./api/auth.api');
const photoApiRouter = require('./api/photos.api')

//router Views
router.use('/', mainRouter);
router.use('/auth', authView);
router.use('/api/auth', authApi);
router.use('/api/photos', photoApiRouter)


module.exports = router;
