import React from 'react';

const StudentTable = ({students, updateGrade}) => {
  return (
    <table id="student-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Average Grade</th>
            </tr>
        </thead>

        <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.address}</td>
            <td>
              <input
                type="number"
                defaultValue={student.averageGrade}
                onChange= {(e) => updateGrade(e,index)}
              />
            </td>
          </tr>
        ))}
      </tbody>
  </table>
  );
};

export default StudentTable;
