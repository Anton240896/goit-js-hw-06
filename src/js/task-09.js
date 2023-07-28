
                  // SOLUTION 1 

// const button = document.querySelector('.change-color');
// const span = document.querySelector('.color');
// const body = document.querySelector('body');


// button.addEventListener('click', getChangeColor);

// function getChangeColor() {
//   body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
//     span.textContent = body.style.backgroundColor;
//    }


   
                  // SOLUTION 2
 function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }
       


const elem = {
  button : document.querySelector('.change-color'),
  span : document.querySelector('.color'),
  body : document.querySelector('body')
 }
 
 
 elem.button.addEventListener('click', getChangeColor);
 
 function getChangeColor() {
   elem.body.style.backgroundColor = getRandomHexColor();
   elem.span.textContent = getRandomHexColor();
    }
 