const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


input.addEventListener('input', inputChange);

function inputChange(meaning) {
    if (meaning.currentTarget.value) {
        output.textContent = meaning.currentTarget.value;
    }

    else {
  output.textContent = "Anonymous";

    }
}