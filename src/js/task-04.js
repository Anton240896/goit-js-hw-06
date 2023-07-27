let counterValue = 0; 
let counterFive= 0;
let counterHundred = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const decrementFive = document.querySelector('button[data-action="decrementfive"]');
const incrementFive = document.querySelector('button[data-action="incrementfive"]');

const decrementHundred = document.querySelector('button[data-action="decrementHundred"]');
const incrementHundred =  document.querySelector('button[data-action="decrementHundred"]');

const valueHundred = document.querySelector('#valueHundred')
const val = document.querySelector('#val')
const value = document.querySelector('#value');

decrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});
    

increment.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;

});
///////////////////////////////////////////////////////////////////////


decrementFive.addEventListener('click', () => {
    counterFive -= 5;
    val.textContent = counterFive;
});

incrementFive.addEventListener('click', () => {
    counterFive += 5;
    val.textContent = counterFive;
});
///////////////////////////////////////////////////////////////////////


// decrementHundred.addEventListener('click', () => {
//     counterHundred -= 100;
//     valueHundred.textContent = counterHundred;
// });

// incrementHundred.addEventListener('click', () => {
//     counterHundred += 100;
//     valueHundred.textContent = counterHundred;
// });

// console.log(valueHundred);
///////////////////////////////////////////////////////////////////////
