
const input = document.querySelector('#name-input'); 
const output = document.querySelector('#name-output');

input.addEventListener('input', changeName);
   
    function changeName(meaning) {
        if (meaning.currentTarget.value) {
          output.textContent = meaning.currentTarget.value;

        } else
         output.textContent = 'Anonymous';
      }
    