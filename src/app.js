import './component/Card'

const entryPoint = document.querySelector('#content')

if(!entryPoint) {
    console.error('Element not found')
} else {
entryPoint.innerHTML = `
<h1>Hello, World!</h1>
<h2>Hello, World!</h2>
<h3>Hello, World!</h3>
<h4>Hello, World!</h4>
<h5>Hello, World!</h5>
<h6>Hello, World!</h6>
<card-component></card-component>
`;
}

