import './asset/styles.css'
import './component/Card'
import { homePage } from './view/home'
import { menuPage } from './view/menu'

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
    entryPoint.innerHTML = `${menuPage()}`
})
