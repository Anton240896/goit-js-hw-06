
const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputValue);

function inputValue(evt) {
    if (evt.currentTarget.value.length <= Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove('invalid')
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
};