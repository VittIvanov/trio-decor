// появление списка advantages 
const advantages = document.querySelector('.advantages');
const advantagesTitle = document.querySelector('.advantages__title');

if (advantages && advantagesTitle) {
  advantagesTitle.addEventListener('click', () => {
    advantages.classList.toggle('active');
  });
}

// галерея 
GLightbox({
  selector: '.glightbox-wedding, .glightbox-holyday, .glightbox-birthday'
});


