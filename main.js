const button = document.querySelector('button');
const touch = new TouchBoxInner(button,true, 20,'200ms');
button.addEventListener("click", (e) => {
  touch._init(e.clientY / 1.7, e.clientX / 1.7);
})



/*const div = document.querySelector('.box');
const btn = new TouchBoxInner(div,true,60,'0.5s');
div.addEventListener('click',(e) => {
  btn._init(e.clientY / 1.7, e.clientX / 1.7);
})*/


/*onst cir = document.querySelector('.cir');
const cirBtn = new TouchBoxOuter(cir,true,15,'200ms');
cir.addEventListener('click',() => {
  cirBtn._init();
})*/


const spans = document.querySelectorAll(".card span");
spans.forEach(span => {
  let touchE = new TouchBoxOuter(span,true,7,'200ms');
  span.addEventListener("click",() =>{
    touchE._init();
  })
})

 const logo = document.querySelector('.card_logo');
 let card = new TouchBoxOuter(logo,true,10,'300ms');
 
 logo.addEventListener("click",() =>{
   card._init();
 })