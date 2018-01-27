const express = require('express');
const router = express.Router();

module.exports = (services) => {
  router.get('', (req, res) => services.db.students.list()
    .then(students => students.map(student => student.serialize()))
    .then(students => {
      return res.status(200).json(students)
    })
    .catch(err => res.status(400).send(err.message)));
  return router;
}