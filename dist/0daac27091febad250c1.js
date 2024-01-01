import './asset/styles.css'
import './component/Card'
import './asset/menu-option/veggies/veggies.png'

const entryPoint = document.querySelector('#content')

if(!entryPoint) {
    console.error('Element not found')
} else {
    entryPoint.innerHTML = `
    <section class="two-column-grid">
                 <card-component
                    title="Hello, World!"
                    text="Hello, World!"
                    imgsrc='./asset/veggies.png'
                    imgalt='an image of that'
                    background='black'
                 >
                 </card-component>
                 <card-component
                    title="Hello, World!"
                    text="Hello, World!"
                    imgsrc='./asset/veggies.png'
                    imgalt='an image of that'
                    background='black'
                 >
                 </card-component>

                 <card-component
                    title="Hello, World!"
                    text="Hello, World!"
                    imgsrc='./asset/veggies.png'
                    imgalt='an image of that'
                    background='black'
                 >
                 </card-component>

                 <card-component
                    title="Hello, World!"
                    text="Hello, World!"
                    imgsrc='./asset/veggies.png'
                    imgalt='an image of that'
                    background='black'
                 >
                 </card-component>

                 <card-component
                    title="Hello, World!"
                    text="Hello, World!"
                    imgsrc='./asset/veggies.png'
                    imgalt='an image of that'
                    background='black'
                 >
                 </card-component>
              </section>
              `
}