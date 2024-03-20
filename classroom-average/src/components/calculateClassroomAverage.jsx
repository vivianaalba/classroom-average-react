// Function to calculate and display the classroom average
export default function calculateClassroomAverage(data) {
    const totalGrades = data.reduce((sum, student) => sum + student.averageGrade, 0);
    const classroomAverage = totalGrades / data.length;

    // Display the classroom average (you should have an element with id 'classroomAverage' in your HTML)
    const classroomAverageElement = document.getElementById('classroomAverage');
    if (classroomAverageElement) {
        classroomAverageElement.textContent = `Classroom Average: ${classroomAverage.toFixed(2)}`;
    }
}