// const categories = document.querySelectorAll('.item');

// console.log('Number of categories:', categories.length);


// categories.forEach(category => {
  
//   const categoryEl = category.querySelector('h2').textContent;
//   const elements = category.querySelectorAll('li').length;

//   console.log('Category:', categoryEl);
//   console.log('Elements:', elements);
// });


const a = document.querySelectorAll('.item');

console.log("number:", a.length);

a.forEach(element => {
    
    const b = element.querySelector('h2').textContent;
    const c = element.querySelectorAll('li').length;

    console.log("cat:", b);
    console.log("elem:", c);
});