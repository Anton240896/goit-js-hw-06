const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');


button.addEventListener('click', getChangeColor);

function getChangeColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    span.textContent = body.style.backgroundColor;
   }
