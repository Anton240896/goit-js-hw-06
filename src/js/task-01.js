const listCategories = document.querySelector('#categories');
const categories = listCategories.querySelectorAll('.item');

console.log('Number of categories:',  categories.length);


categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsAmount = category.querySelectorAll('li').length;

  console.log('Category:', categoryName);
  console.log('Elements:', elementsAmount);
});