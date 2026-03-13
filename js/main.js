// появление списка advantages 
const block = document.querySelector('.advantages');
const button = document.querySelector('.advantages__title');

button.addEventListener('click', () => {
  block.classList.toggle('active');
});