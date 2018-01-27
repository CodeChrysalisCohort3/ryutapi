const express = require('express');
const router = express.Router();

module.exports = (services) => {
  router.use(`./students`, studentRouter(service));
  return router;
};