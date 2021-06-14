const getElement = selector => document.querySelector(selector)

const square = getElement('.square');
// застарілий метод
// button.onclick = () => console.log('Hello World');
// button.onclick = () => console.log('bye');

// button.addEventListener('click', event => {
    // console.log(event)
    // event.target.style.background = 'red'
    // console.log(event.target.classList)
    // const classListArr = [...event.target.classList]
    // console.log(classListArr)
    // if(event.target.classList.contains('red')){
    //     event.target.classList.remove('red');
    // }
    // else if(!event.target.classList.contains('red'))
    // event.target.classList.to('red')
    
    // console.log(event.target.classList)
// } )

// console.dir(button)

// document.addEventListener('keydown', event => {
//     const left = square.offsetLeft;
//     const top = square.offsetTop;
//     console.log(left)
//     console.log(top)    
    
//     // let left = square.offsetLeft;
//     // let top = square.offsetTop;
//      if(event.keyCode === 37){
//         square.style.left = left - 10 + 'px';
//     }
//     if(event.keyCode === 38){
//         square.style.top += top - 10 + 'px';
//     }
//     if(event.keyCode === 39){
//         square.style.left = left + 10 + 'px';
//     }
//     if(event.keyCode === 40){
//         square.style.top = top + 10 + 'px';
//     }


// })

// document.addEventListener('resize', event => {
//     if(event.target.outerWidth < 700) {
//         square.style.background = 'red';
//     } else {
//         square.style.background = 'yellow';
//     }
// })
const btn = getElement('.menu__link');
const menu = getElement('.menu');

// btn.addEventListener('click', e => {
//     e.target.classList.toggle('active')
//     menu.classList.toggle('active')
// })

function toggleClass(currentElement, secondElement, classNames) {
    currentElement.addEventListener('click', e => {
        classNames.forEach(className => {
            e.target.classList.toggle(className)
            secondElement.classList.toggle(className)
        });
    })
}

toggleClass(btn, menu, ['active', 'big-size']);