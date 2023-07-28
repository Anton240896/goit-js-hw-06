const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);


categories.forEach(category => {
  
  const categoryEl = category.querySelector('h2')
  const elements = category.querySelectorAll('li')

  console.log('Category:', categoryEl.textContent);
  console.log('Elements:', elements.length);
});

