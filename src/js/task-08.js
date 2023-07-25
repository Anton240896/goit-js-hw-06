const form = document.querySelector('.login-form');
const input = document.querySelector('input');

form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
    evt.preventDefault();

    const email = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;

    if (email === '' || password === '') {
    (alert('Warning! That all fields must be filled'));
    }

    else {
      const formData = {
        email,
        password,
      };
      console.log(formData);
  
      form.reset();
    }
  }