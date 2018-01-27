const express = require('express');
const router = express.Router();

module.exports = (services) => {
  router.get('', (req, res) => services.db.students.list()
    .then(students => students.map(student => student.serialize()))
    .then(students => {
      return res.status(200).json(students)
    })
    .catch(err => res.status(400).send(err.message))
  );

  router.post('', (req, res) => {
    return services.db.students.create(
      {
        name: req.body.name,
        status: req.body.status
      })
      .then(students => res.status(201).json(students.serialize))
      .catch((err) => {
        return res.status(400).send(err.message);
      })
  });

  router.delete('', (req, res) => {
    return services.db.students.remove(
      {
        name: req.body.name
      })
      .then(student => res.status(200).json(`${student} is deleted successfuly`))
      .catch((err) => {
        return res.status(400).send(err.message);
      })
  });

  router.put('', (req, res) => {
    return services.db.students.update(
      {
        name: req.body.name,
        status: req.body.status,
      })
      .then(student => res.status(200).json(student))
      .catch((err) => {
        return res.status(400).send(err.message);
      })
  });


  

  return router;
}