import './asset/styles.css'
import './component/Card'
import { homePage } from './view/home'
import './view/menu'
import './asset/menu-option/veggies/veggies.png'

const entryPoint = document.querySelector('#content')
const homeBtn = document.querySelector('[data-nav="home"]')
const menuBtn = document.querySelector('[data-nav="menu"]')

if (!entryPoint) {
    console.error('#content not found')
} else {
    entryPoint.innerHTML = `${homePage()}`
}

homeBtn.addEventListener('click', () => {
    if (!entryPoint) {
        console.error('#content not found')
    }
    entryPoint.innerHTML = `${homePage()}` 
})

menuBtn.addEventListener('click', () => {
    if (!entryPoint) {
        console.error('#content not found')
    }
    entryPoint.innerHTML = `
    <view-menu>I am the menu page</view-menu>
    `
})
