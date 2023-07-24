

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients'); 

         ingredients.map(ingredient => { // перебирання масиву

  const li = document.createElement('li'); //  створення окремого елемента li
  li.textContent = ingredient; // текстовий вміст 
  li.classList.add('item'); //  Сss клас
  ul.append(li); //  усі li  за одну операцію у список ul#ingredients.

         });

         
       