

const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputValue);


function inputValue() {
   

    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("invalid")
    }
    else {
    

    }
};
    

