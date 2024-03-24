import './App.css';
import { useState, useEffect } from 'react';
import studentsData from './components/studentData';
import ClassroomAverage from './components/ClassroomAverage';
import StudentTable from './components/StudentTable';


export default function App() {
  const [students, setStudents] = useState(studentsData);
  const [classroomAverage, setClassroomAverage] = useState(0);

  const updateGrade = (e, index) => {
    const inputValue = parseFloat(e.target.value.trim());
    const updatedStudents = [...students];
    updatedStudents[index].averageGrade = inputValue;
    setStudents(updatedStudents);
    recalculateClassroomAverage(updatedStudents);
  };

  useEffect(() => {
    const initialTotalGrades = students.reduce((sum, student) => sum + student.averageGrade, 0);
    const initialAverage = students.length > 0 ? initialTotalGrades / students.length : 0;
    setClassroomAverage(initialAverage);
  }, [students]);

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
