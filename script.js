 
var btn = document.querySelector('button')
var box = document.querySelector('#box')

btn.addEventListener('click' , function(){ 
  var c1 = Math.floor(Math.random(c1)*256);
  var c2 = Math.floor(Math.random(c2)*256);
  var c3 = Math.floor(Math.random(c3)*256);
  
  console.log(c1 , c2 , c3);
  box.style.backgroundColor = `rgb(${c1} , ${c2} , ${c3})`
})