import './asset/logo/logo.svg'
import './component/Card'
import './asset/menu-option/veggies/veggies.png'

document.addEventListener('DOMContentLoaded', (event) => {

    let svgContent;

    fetch('./asset/logo.svg')
        .then(response => response.text())
        .then(data => {
            svgContent = data;

            let header = document.querySelector('header');
            let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgElement.innerHTML = svgContent;
            header.appendChild(svgElement);

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
        });
});
