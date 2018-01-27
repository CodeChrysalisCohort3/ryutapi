const express = require('express');
const router = express.Router();
const studentRouter = require('./students');

module.exports = (services) => {
  router.use(`/students`, studentRouter(services));
  return router;
};