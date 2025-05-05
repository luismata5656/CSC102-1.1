// this code toggles the navigation 


const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.style.display === 'block';
  if (isOpen) {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});
