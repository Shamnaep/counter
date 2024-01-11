
const h1 = document.getElementById('h1')
const button =document.getElementById('btn')

let count = 0
button.addEventListener('click',()=>{
count = count + 1
 h1.innerHTML =count
});