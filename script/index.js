const controls = document.querySelectorAll('.control')
const items = document.querySelectorAll('.projects-view') 
let currentItem = 0
const maxItems = items.length

controls.forEach((control) => {
    control.addEventListener('click', () => {
        const isUp = control.classList.contains('arrow-up-slider')
        if(isUp) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if(currentItem >= maxItems) {
            currentItem = 0
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1
        }
        
        items.forEach(item => {
            item.classList.remove('current-item')
        })

        items[currentItem].scrollIntoView({
            behavior: 'smooth'
        })

        items[currentItem].classList.add('current-item')
    })
})


const h1Positions = document.querySelector('#aboutMe')
const postions = h1Positions.getBoundingClientRect()

console.log(postions)

const btn = document.getElementById('btn') 

btn.addEventListener('click', () => {
    h1Positions.scrollIntoView()
})