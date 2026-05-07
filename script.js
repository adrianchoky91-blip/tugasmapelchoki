const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('pageTheme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('pageTheme', isLight ? 'light' : 'dark');
});
