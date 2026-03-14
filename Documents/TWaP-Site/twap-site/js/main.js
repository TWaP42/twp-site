// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// Mark active nav link
const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '');
  if (currentPath.endsWith(href) || (href === 'index.html' && (currentPath === '' || currentPath === '/'))) {
    a.classList.add('active');
  }
});
