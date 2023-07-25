const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
    evt.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.value === '' || password.value === '') {
    alert('Warning! That all fields must be filled');
    }

    else {
        form.reset();
    

    const formData = {
        email: email,
        password: password
      };
      console.log(formData);
    }
form.reset();
  }