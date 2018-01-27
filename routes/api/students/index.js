const express = require('express');
const router = express.Router();

module.exports = (services) => {
  router.get('', (req, res) => services.db.studnets.list()
    .then(students => student.map(student => student.serialize()))
    .then(studnets => res.status(200).json(studnets))
    .catch(err => res.status(400).send(err.message)));
  return router;
}