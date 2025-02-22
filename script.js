const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

// Function to move the button randomly
function moveButton(button) {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = 'absolute';
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

// Event listener for the "No" button (moves on hover)
noButton.addEventListener('mouseover', () => {
  moveButton(noButton);
});

// "Yes" button stays still

yesButton.addEventListener('click', () => {
  alert('Yay! Let’s go out for lunch! 🥳');
});