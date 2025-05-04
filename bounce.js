// Get references to DOM elements
const meme = document.getElementById("memeImage");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// Starting position and velocity
let x = 100, y = 100;
let vx = 6, vy = 4;
let animationId = null;

// Function to update meme position
function moveMeme() {
  // getBoundingClientRect returns the size of an element and its position relative to the viewport
  const rect = meme.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  x += vx;
  y += vy;

  // Bounce off edges
  if (x <= 0 || x >= maxX) vx *= -1;
  if (y <= 0 || y >= maxY) vy *= -1;

  // Update position
  meme.style.left = `${x}px`;
  meme.style.top = `${y}px`;

  // Request next frame
  animationId = requestAnimationFrame(moveMeme);
}

// Function to start bouncing and toggle buttons
function startBounce() {
  // Disable Start button
  startBtn.disabled = true;
  // Enable Stop button
  stopBtn.disabled = false;
  // Start animation
  if (!animationId) moveMeme();
}

// Function to stop bouncing and toggle buttons
function stopBounce() {
  // Disable Stop button
  stopBtn.disabled = true;
  // Enable Start button
  startBtn.disabled = false;
  // Stop animation
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}
