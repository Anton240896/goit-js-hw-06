const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients'); 

                    ingredients.forEach(ingredient => { // перебираємо масив

const li = document.createElement('li'); // створюємо окремий елемент li
li.textContent = ingredient; // текстовий вміст , тобто список на html сторінці 
  li.classList.add('item'); // додаємо до елемента li , Css клас item
  ul.append(li); // Вставляємо усі li  за одну операцію у список ul#ingredients.
 
});
