module.exports = (knex, Student) => {
  return () => {
    return knex('students')
      .orderBy('id', 'desc')
      .select()
      .then(studentList => {
        return studentList.map(student => {
          return new Student(student);
        });
      });
  };
};
