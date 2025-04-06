// Luis Mata Jurado, 2025-04-06
//
// This file contains the functions for the input validator 
// Function to check the input
function checkInput(name, zipcode) {
  // Define the correct name and zipcode
  const correctNameLen = 20;
  const correctZipcodelen = 5;
  // Check if the name and zipcode are correct
  if (name.length <= correctNameLen && zipcode.length == correctZipcodelen) {
    return true;
  } else {
    return false;
  }
}

// Function to display the result
function displayResult(result) {
  // Get the result element
  const resultElement = document.getElementById("result");
  // Check if the result is true or false
  if (result) {
    // If true, display that the input is correct
    resultElement.innerHTML = "Correct!";
  } else {
    // If false, display that the input is not correct
    resultElement.innerHTML = "Wrong input, please try again.";
  }
}

// function to get the user input from the text box
function getInput() {
  // Get the value of the input fields and combine the first and last name with a space
  const firstName = document.forms["inputForm"]["firstName"].value;
  const lastName = document.forms["inputForm"]["lastName"].value;
  const zipcode = document.forms["inputForm"]["zipcode"].value;
  const name = firstName + " " + lastName;
  // Check if the input is correct
  const result = checkInput(name, zipcode);
  // Display the result
  displayResult(result);
}
