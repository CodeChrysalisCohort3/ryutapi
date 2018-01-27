const Promise = require('bluebird');

const isValidName = (name, length) => {
  return typeof name === 'string'
  && name.replace(' ', '').length > length;
}

module.exports = (knex, Student) => {
  return (params) => {
    const nameLowerCase = params.name.toLowerCase();

    return Promise.try(() => {
      if (!isValidName(nameLowerCase, 3)) {
        throw new Error ('Valid name must be provided')
      }
    })
    .then(() => knex('students').where( 'name', nameLowerCase ).delete())
    .then((deletedRow) => {
      if (deletedRow === 0) {
        return 'No student'
      }
      return nameLowerCase;
    })
    .catch((err) => {
      throw err
    });
  };
};