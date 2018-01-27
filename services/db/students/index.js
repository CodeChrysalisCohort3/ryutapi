class Student {
  constructor(dbStudent){
    this.id = dbStudent.id;
    this.name = dbStudent.name;
    this.status = dbStudent.status;
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      status: this.status
    };
  }
}

module.exports = (knex) => {
  return {
    list: require('./list')(knex, Student),
    create: require('./create')(knex, Student),
    remove: require('./remove')(knex, Student),
    update: require('./update')(knex, Student),
  };
};