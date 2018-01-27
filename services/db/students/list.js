module.exports = (knex, Studnet) => {
  return () => {
    return knex('students')
      .select()
      .then(studentList => {
        return studentList.map(student => {
          return new Student(studnet);
        })
      })

  }

}