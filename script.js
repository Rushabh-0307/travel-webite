document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const responseMessage = document.getElementById('form-response');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // For now, just show a thank you message on submit.
    responseMessage.style.display = 'block';

    // Optionally, clear the form fields
    form.reset();
  });
});
