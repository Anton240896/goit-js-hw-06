let counterValue = 0; // створюєм let, тому що значення буде змінюватись

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

decrement.addEventListener('click', () => { // додаємо подію 
    counterValue -= 1; // віднімаємо від let 
    value.textContent = counterValue;
});


increment.addEventListener('click', () => {
    counterValue += 1; // додаємо до let
    value.textContent = counterValue;
})