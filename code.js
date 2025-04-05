// This is a simple color memory game where the user has to remember a color and select it from similar colors.

// setup game variables that will be used across the game
let correctColor;
// this determines how similar the colors will be to the correct color
const difficulty = 100;
let score = 0;

// This function generates a set of similar colors based on the base color
function generateSimilarColors(baseColor, count = 3) {
  // a color consists of 3 values, red, green and blue, which are integers between 0 and 255
  // this can be expressed using a list with 3 elements, or a 3-tuple
  const [r, g, b] = baseColor;

  // a set is used to store unique colors, this ensures that we don't have duplicates
  const variations = new Set();

  // generate colors until we have the desired number of unique colors
  while (variations.size < count) {
    // the map function is used to "map" or apply a function to each element of the array, this case being the color channels
    // each r, g, and b value is adjusted by a random value between -difficulty and +difficulty
    const newColor = [r, g, b].map(channel => {
      // this generates a random number between -difficulty and +difficulty
      const delta = Math.floor(Math.random() * difficulty * 2) - difficulty;
      // this ensures that the new color value is between 0 and 255
      return Math.min(255, Math.max(0, channel + delta));
    });

    // in order to set the colors there are several options
    // 1. use the rgb() function to set the color
    // 2. calculate the hex value of the color by using the toString(16) method
    // 3. use the hsl() function to set the color(just like rgb, but with hue, saturation and lightness)
    const colorStr = `rgb(${newColor.join(',')})`;
    // this is used to check if the color is already in the set, if it is then we skip it
    if (colorStr !== `rgb(${r}, ${g}, ${b})`) {
      variations.add(colorStr);
    }
  }


  // an Array is used to convert the Set to an Array, this is done because the Set object is not iterable
  return Array.from(variations);
}

// This function flasshes the correct color to the user
function showFlashColor() {
  // generate a random color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  correctColor = `rgb(${r}, ${g}, ${b})`;

  // set the instructions to memorize the color
  document.getElementById("instructions").innerText = "Memorize this color!";
  // set the background color to the correct color
  document.body.style.backgroundColor = correctColor;

  // the setTimeout function delays the code inside it for a specified amount of time, in this case 1500 milliseconds
  setTimeout(() => {
    // after the delay, set the background color to white and show the options
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById("instructions").innerText = "Which one was it?";
    showColorOptions([r, g, b]);
  }, 1500);
}

// This function shows the color options to the user
function showColorOptions(baseRGB) {
  const optionsContainer = document.getElementById("options");
  // create a set of similar colors based on the base color
  const colors = generateSimilarColors(baseRGB);
  colors[Math.floor(Math.random() * colors.length)] = correctColor; // insert the correct one

  // reset the options container
  optionsContainer.innerHTML = "";
  optionsContainer.style.display = "block";

  // iterate over the colors and create a div for each one
  colors.forEach(color => {
    const box = document.createElement("div");
    box.className = "color-box";
    // set the color of the box
    box.style.backgroundColor = color;
    // create the behavior for the box when clicked
    box.onclick = () => {
      // check if the color is the correct one
      if (color === correctColor) {
        // win condition, increment score
        document.getElementById("result").innerHTML = "Correct!";
        document.body.style.backgroundColor = "#55ff55";
        score++
      } else {
        // lose condition, reset score
        score = 0;
        document.getElementById("result").innerHTML = "Nope!";
        document.body.style.backgroundColor = "#ff5555";
      }
      // update the score
      document.getElementById("score").innerHTML = score;
      // remove the result message after 2 seconds
      setTimeout(() => {
        document.getElementById("result").innerHTML = "";
        showFlashColor();
      }, 2000);
    };
    // add the box to the options container
    optionsContainer.appendChild(box);
  });
}

// Start the game
showFlashColor();
>>>>>>> Stashed changes
