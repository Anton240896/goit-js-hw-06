

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients'); 

   const ingredientsElem = ingredients.map(ingredient => { 

  const li = document.createElement('li'); //створив новий li
  li.textContent = ingredient;  //Відобразив в браузері
  li.classList.add('item');   // додав клас css 

  return li;  

});

ul.append(...ingredientsElem);// додав за одну дію 
console.log(...ingredients);


       