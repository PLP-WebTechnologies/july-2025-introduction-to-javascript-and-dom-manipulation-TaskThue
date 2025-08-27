//  Part 1: Variables & Conditionals
// Capture DOM elements
const nameInput = document.getElementById("studentName");
const marksInput = document.getElementById("marks");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

//  Part 2: Functions
// Function to calculate grade
function calculateGrade(marks) {
  if (marks >= 80) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 40) return "C";
  else return "F";
}

// Function to display result on page
function displayResult(name, grade) {
  resultDiv.innerHTML = `Hello, <b>${name}</b>!  Your grade is <span style="color:green">${grade}</span>.`;
}

//  Part 3: Loops
// Example: Looping through subjects & calculating average
function calculateAverage(subjectMarks) {
  let total = 0;
  for (let i = 0; i < subjectMarks.length; i++) {
    total += subjectMarks[i];
  }
  return total / subjectMarks.length;
}

//  Part 4: DOM Manipulation
// Event listener for button
submitBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const marks = parseInt(marksInput.value);

  // Check input validity
  if (!name || isNaN(marks)) {
    resultDiv.innerHTML = "<span style='color:red'> Please enter both name and marks.</span>";
    return;
  }

  // Use function to calculate grade
  const grade = calculateGrade(marks);

  // Display result
  displayResult(name, grade);

  // Example: Loop demo (simulate marks in 3 subjects)
  const subjects = [marks, 75, 90];
  const avg = calculateAverage(subjects);

  // Create new DOM element dynamically
  const avgPara = document.createElement("p");
  avgPara.textContent = `Your average marks across 3 subjects: ${avg.toFixed(2)}`;
  resultDiv.appendChild(avgPara);

  // Toggle color class (extra DOM trick)
  resultDiv.classList.toggle("highlight");
});
