const searchInput = document.querySelector('.input-news');
searchInput.maxLength = 40;

searchInput.addEventListener('input', () => {
  if (searchInput.value.length > 40) {
    searchInput.value = searchInput.value.slice(0, 40);
  }
});
