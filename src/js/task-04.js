
let counterValue = 0;

const decrement = document.querySelector("button[data-action ='decrement']")
const increment = document.querySelector("button[data-action ='increment']")
const counter = document.getElementById('value');

decrement.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

    increment.addEventListener("click", () => {
        counterValue += 1;
        counter.textContent = counterValue;
    });
