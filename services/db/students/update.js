const Promise = require('bluebird');

const isValidName = (name, length) => {
  return typeof name === 'string'
  && name.replace(' ', '').length > length;
}

module.exports = (knex, Student) => {
  return (params) => {
    const nameLowerCase = params.name.toLowerCase();
    const newData = {
      name: nameLowerCase,
      status: params.status,
    }

    return Promise.try(() => {
      if (!isValidName(nameLowerCase, 3)) {
        throw new Error ('Valid name must be provided')
      }
    })
    .then(() => knex('students')
      .where('name', nameLowerCase)
      .update('status', params.status)
    )
    .then(() => knex('students')
      .where(newData)
      .select()
    )
    .then(students => new Student(students.pop()))
    .catch((err) => {
      throw err
    });
  };
};