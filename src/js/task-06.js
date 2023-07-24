

const input = document.getElementById('validation-input');

input.addEventListener('blur', validateInput);

function validateInput() {
  const inputValue = input.value;
  const dataLength = input.getAttribute('data-length');

  if (inputValue.length === parseInt(dataLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

                //  SOLUTION 1

// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', inputValue);

// function inputValue(evt) {
//     if (evt.currentTarget.value.length <= Number(input.dataset.length)) {
//         input.classList.add("valid");
//         // input.classList.remove('invalid')
//     }
//     else {
//         input.classList.add("invalid");
//         input.classList.remove("valid");
//     }
// };
