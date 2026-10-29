const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const subscribeForm = document.querySelector('#subscribe-form');
const emailInput = document.querySelector('#email');
const formMessage = document.querySelector('#form-message');
const year = document.querySelector('#year');

// Keep the footer year current without requiring an update each January.
year.textContent = new Date().getFullYear();

// Toggle the mobile navigation and keep its expanded state accessible.
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  siteNav.classList.toggle('is-open', !isOpen);
});

// Close the mobile menu after choosing a section.
siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a') && window.matchMedia('(max-width: 640px)').matches) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  }
});

// Give immediate feedback for the example newsletter form; it does not submit data.
subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!emailInput.validity.valid || email.length === 0) {
    formMessage.textContent = 'Please enter a valid email address and try again.';
    formMessage.classList.add('error');
    emailInput.focus();
    return;
  }

  formMessage.textContent = `Thanks! Your next postcard will find you at ${email}.`;
  formMessage.classList.remove('error');
  subscribeForm.reset();
});
