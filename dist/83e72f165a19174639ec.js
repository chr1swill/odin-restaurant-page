import './asset/logo/logo.svg'
import './component/Card'
import './asset/menu-option/veggies/veggies.png'

const img = document.createElement('img')
img.src = './asset/logo.svg'
document.body.insertAdjacentElement('afterbegin', img)

const entryPoint = document.querySelector('#content')

if(!entryPoint) {
    console.error('Element not found')
} else {
entryPoint.innerHTML = `
<card-component
title="Hello, World!"
text="Hello, World!"
imgsrc='./asset/veggies.png'
imgalt='an image of that'
background='black'
></card-component>
`;
}

