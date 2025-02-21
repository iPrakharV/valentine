const yesButton = document.getElementById('yes'); 
const noButton = document.getElementById('no');

function moveButton(button) {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = 'absolute';
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

noButton.addEventListener('mouseover', () => {
  moveButton(noButton);
});

yesButton.addEventListener('click', () => {
  alert('Yay! Let’s go out for lunch! 🥳');
});
