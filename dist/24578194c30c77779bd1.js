import './asset/styles.css'
import './component/Card'
import './view/home'
import './view/menu'
import './asset/menu-option/veggies/veggies.png'

const entryPoint = document.querySelector('#content')

const homeBtn = document.querySelector('[data-nav="home"]')
const menuBtn = document.querySelector('[data-nav="menu"]')

homeBtn.addEventListener('click', () => {
    entryPoint.innerHTML = `
    <view-home>I am the home page</view-home>
    ` 
})

menuBtn.addEventListener('click', () => {
    entryPoint.innerHTML = `
    <view-menu>I am the menu page</view-menu>
    `
})

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
