module.exports = (knex, Student) => {
  return () => {
    return knex('students')
      .select()
      .then(studentList => {
        return studentList.map(student => {
          return new Student(student);
        });
      });
  };
};
