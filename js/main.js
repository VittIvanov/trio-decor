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
  selector: '.glightbox-wedding'
});

GLightbox({
  selector: '.glightbox-birthday'
});

GLightbox({
  selector: '.glightbox-holyday'
});

// печатающийся текст формы
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.order-form');
  const textEl = document.querySelector('.order-form__description-text');

  if (!form || !textEl) return;

  const fullText = textEl.dataset.text || '';
  let i = 0;
  let isTyping = false;
  const speed = 20;

  form.addEventListener('mouseenter', () => {
    if (isTyping) return;

    isTyping = true;
    textEl.textContent = '';
    i = 0;

    const interval = setInterval(() => {
      textEl.textContent += fullText[i];
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, speed);
  });

  form.addEventListener('mouseleave', () => {
    isTyping = false;
    // textEl.textContent = ''; // если нужно, чтобы очищался
  });
});