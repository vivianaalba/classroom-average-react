import './App.css';
import data from './components/studentData';
import calculateClassroomAverage from './components/calculateClassroomAverage';
import renderStudentTable from './components/renderStudentTable';

export default function App() {
    // Get the table element by ID
    let table = document.getElementById("student-table");
    
    // // want to prevent re-rendering table upon refresh
    // // why does table render 2 sets of student data?
    // // If rows already exist, don't re-render
    // if (table.querySelector('tr') === "") { // ??
    //   return;
    // } else {
    //   renderStudentTable(table,data);
    // }

    renderStudentTable(table,data);
    
    calculateClassroomAverage(data);

  //      // implement event handler to recalculate class average when a student average has changed
  //  table.addEventListener("change", updateGrade) 

  //   // Function to update a student's grade and recalculate the classroom average
  //   function updateGrade(event) {
  //     const inputElement = event.target;
  //     const inputValue = inputElement.value.trim();
  //     const rowIndex = inputElement.closest('tr').rowIndex;
  
  //     // Update the corresponding student's grade in the data array
  //     data[rowIndex - 1].averageGrade = parseFloat(inputValue);
  
  //     for (let i = 0; i < data.length; i++) {
  //       // array that extracts student ID and grade
  //       let studentData = [data[i].id, data[i].averageGrade];
  //     }
  //     calculateClassroomAverage(data)
  //   }
    
   
  return (
    <>

          <table id="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Average Grade</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
    
          <span id="classroomAverage"></span>
    </>
  )
}
