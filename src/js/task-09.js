
                
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
 