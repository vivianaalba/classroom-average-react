import './App.css';
import { useState } from 'react';
import studentsData from './components/studentData';
import ClassroomAverage from './components/ClassroomAverage';
import StudentTable from './components/StudentTable';


export default function App() {
  const [students, setStudents] = useState(studentsData);
  const [classroomAverage, setClassroomAverage] = useState(83.714);

  const updateGrade = (e, index) => {
    const inputValue = parseFloat(e.target.value.trim());
    const updatedStudents = [...students];
    updatedStudents[index].averageGrade = inputValue;
    setStudents(updatedStudents);
    recalculateClassroomAverage(updatedStudents);
  };

  const recalculateClassroomAverage = (updatedStudents) => {
    const totalGrades = updatedStudents.reduce((sum, student) => sum + student.averageGrade, 0);
    const average = totalGrades / updatedStudents.length;
    setClassroomAverage(average);
  };
   
   
  return (
    <>
      <StudentTable  students={students} updateGrade={updateGrade}/>
      <ClassroomAverage classroomAverage={classroomAverage}/>
    </>
  )
}
