export default function renderStudentTable(table,data) {
    for (let i = 0; i < data.length; i++) {
      // Create a new row element in the table with each student's information
      // average grade should be an input with a preset value of the student's initial average
      const newStudent = document.createElement('tr');
      newStudent.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].address}</td><td><input type="number" id ="inputElement" value="${data[i].averageGrade}"></td>`;

      // Append the new row to table
      table.appendChild(newStudent);
    }
}
