const router = require('express').Router();

//Views
const mainRouter = require('./views/main.router');
const photoView = require('./views/photo.view');
const authView = require('./views/auth.view');
const albumsRouter = require("./views/album.router")

// //Api
// const productApi = require('./api/product.api');
const authApi = require('./api/auth.api');
const photoApiRouter = require('./api/photos.api')

//router Views
router.use('/', mainRouter);
router.use("/albums", albumsRouter);
router.use('/auth', authView);
router.use('/api/auth', authApi);
<<<<<<< HEAD
router.use('/api/photos', photoApiRouter)

=======
router.use('/photo', photoView)
>>>>>>> e55cb0014fa0262e6841399b030f3d718ac2f5b3

module.exports = router;
