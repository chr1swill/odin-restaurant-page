import './asset/logo/logo.svg'
import './component/Card'
import './asset/menu-option/veggies/veggies.png'

let svgContent;

fetch('path_to_your_svg_file')
    .then(response => response.text())
    .then(data => {
        svgContent = data;
    });

let header = document.querySelector('header');
header.innerHTML = svgContent;
doument.body.appendChild(header);

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
>
</card-component>
`
}

