const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients'); 

                    ingredients.forEach(ingredient => { // перебирання масиву

const li = document.createElement('li'); //  окремий елемент li
li.textContent = ingredient; // текстовий вміст 
  li.classList.add('item'); //  до елемента li , Css клас item
  ul.append(li); //  усі li  за одну операцію у список ul#ingredients.
 
});
