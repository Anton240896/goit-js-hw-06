
const create = document.querySelector('.js-create');
const destroy = document.querySelector('.js-destroy');
const input = document.querySelector('.js-input');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', OnClickCreate);
destroy.addEventListener('click', OnClickDestroy);
const title = document.querySelector('.js-title')
let size = 20;

function OnClickCreate() {
    const count = Number(input.value);

    const elements = [];

    for (let i = 0; i < count; i += 1) {
        const div = document.createElement('div');

        size += 10;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        elements.push(div)
    }

    input.value = 0;
    boxes.append(...elements);
}

function OnClickDestroy() {
    boxes.innerHTML = '';
    size = 20;
    input.value = 0;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }