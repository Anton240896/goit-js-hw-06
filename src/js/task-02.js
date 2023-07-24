
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("ul#ingredients");
const liElements = []; // створив пустий масив для зберігання елементів li

for (let i = 0; i < ingredients.length; i+=1) {// - перабрав масив

  const li = document.createElement("li"); // створив новий елемент li
  li.textContent = ingredients[i]; // встановити текстовий вміст елементу li
  li.classList.add("item"); // додав css клас item до елементу li
 
  liElements.push(li); // додав елемент li до масиву liElements
  ul.append(...liElements);// додав всі елементи li одночасно до списку ul за допомогою spread
}




                                        // DRAFT 

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];


// const ul = document.querySelector('#ingredients'); 

//                     ingredients.forEach(ingredient => { // перебирання масиву

// const li = document.createElement('li'); //  створення окремого елемента li
// li.textContent = ingredient; // текстовий вміст 
//   li.classList.add('item'); //  Сss клас
//   ul.append(li); //  усі li  за одну операцію у список ul#ingredients.
