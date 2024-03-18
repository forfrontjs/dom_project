let links = document.querySelectorAll('.links')
for(let i = 0; i<links.length; i++){
    links[i].style.color = 'red'
}
let button = document.querySelector('button')
button.innerText = 'Investigate'
let button1 = document.createElement('button')
button1.innerHTML = 'button1'
button1.style.background = 'yellow'
button.after(button1)
let h1 = document.querySelector('h1')
h1.textContent = h1.textContent.toUpperCase()

let section = document.querySelector('section')
section.style.height = '85vh'




// let h1 = document.children[0].children[1]
// console.log(h1);

// let h1 = document.getElementsByTagName('h1')
// console.log(h1[0]);
// let h1 = document.querySelector('h1')
// h1.style.color = 'red'
// h1.style.background = 'blue'
// console.log(h1);

// let h1 = document.querySelector('h1')
// let btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{

// })
// let first_h1 = document.querySelectorAll('h1')
// first_h1[1].style.color = 'blue'
// first_h1[0].style.color = 'red'
// let h2 = document.querySelector('h2')
// h2.style.color = 'green'
// let buttons = document.querySelectorAll('button')
// buttons[0].style.borderRadius = '100px'
// buttons[1].style.borderRadius = '100px'
// let span = document.querySelector('span')
// span.innerText = 'поменял'
// span.style.color = 'yellow'
