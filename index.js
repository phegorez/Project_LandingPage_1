const toggle = document.querySelector('.toggle')
const menu = document.querySelector('nav')
const close = document.querySelector('.close')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    toggle.classList.toggle('actived')
    close.classList.toggle('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active')
    toggle.classList.remove('actived')
    close.classList.remove('active')
})