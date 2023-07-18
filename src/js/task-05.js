


const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


input.addEventListener('input', changeValue);
function changeValue(meaning) {
  
if (input.value === '') {
output.textContent = 'Anonymous'
}

else {
  output.textContent = input.value;
}
};