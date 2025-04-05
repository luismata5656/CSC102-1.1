// Luis Mata Jurado, 2025-04-04
//
// This file contains the functions for the palindrome checker in strings.html

// Function to check if a string is a palindrome
// In order to check if a string is a palindrome, we need to remove all non-alphanumeric characters and convert the string to lowercase
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  // regex to remove all non-alphanumeric characters,
  // regular expression is a pattern that can be used to match character combinations in strings, this regex matches any character that is not a letter or a number and replaces it with an empty string
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}

// Function to display the result
function displayResult(result) {
  // Get the result element
  const resultElement = document.getElementById("result");
  // Check if the result is true or false
  if (result) {
    // If true, display that the input is a palindrome
    resultElement.innerHTML = "That is a palindrome!";
  } else {
    // If false, display that the input is not a palindrome
    resultElement.innerHTML = "That is not a palindrome.";
  }
}

// function to get the user input from the text box
function getInput() {
  // Get the value of the input field
  const input = document.forms["palindromeForm"]["inputText"].value;
  // Check if the input is a palindrome
  const result = isPalindrome(input);
  // Display the result
  displayResult(result);
}
