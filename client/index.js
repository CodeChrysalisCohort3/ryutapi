window.onload = () => {
  const studentTable = document.getElementById('students');
  const addButton = document.getElementById('add');
  const updateButton = document.getElementById('update');
  const deleteButton = document.getElementById('delete');

  const getStudentList = () => {
    for (var i = studentTable.rows.length-1; i > 0; i -= 1) {
      studentTable.deleteRow(i);
    };

    fetch('http://localhost:4000/api/students', )
    .then(response => response.json())
    .then(students => {
      students.forEach(student => {
        const row = studentTable.insertRow(1);
        const col1 = row.insertCell(0);
        const col2 = row.insertCell(1);
        const col3 = row.insertCell(2);
        col1.innerHTML = student.id;
        col2.innerHTML = student.name;
        col3.innerHTML = student.status;
      });
    })
    .catch((err) => console.log(err));
  }

  getStudentList();

  addButton.onsubmit = (event) => {
    event.preventDefault();
    const data = {
      name: document.add.name.value,
      status: document.add.status.value,
    };

    fetch('http://localhost:4000/api/students', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(() => getStudentList())
    .catch((err) => {
      throw err;
    });
  };

  updateButton.onsubmit = (event) => {
    event.preventDefault();
    const data = {
      name: document.update.name.value,
      status: document.update.status.value,
    };

    fetch('http://localhost:4000/api/students', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(() => getStudentList())
    .catch((err) => {
      throw err;
    });
  };
  
  deleteButton.onsubmit = (event) => {
    event.preventDefault();
    const data = {
      name: document.delete.name.value,
    };

    fetch('http://localhost:4000/api/students', {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(() => getStudentList())
    .catch((err) => {
      throw err;
    });
  };
}
