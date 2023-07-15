const ListCategories = document.querySelectorAll('.item');

console.log('Number of categories:', ListCategories.length);


ListCategories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsAmount = category.querySelectorAll('li').length;

  console.log('Category:', categoryName);
  console.log('Elements:', elementsAmount);
});