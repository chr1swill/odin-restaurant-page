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
