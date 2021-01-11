const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const productRoute = require('./product.route');
const orderRoute = require('./order.route');
const docsRoute = require('./docs.route');
const generalRoute = require("./general");
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  },
  {
    path: '/general',
    route: generalRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
