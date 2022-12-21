const openToggleButton = document.querySelector('.open')

const closeToggleButton = document.querySelector('.close')

const navMenu = document.querySelector('.nav-menu')


openToggleButton.addEventListener('click', () => {
    navMenu.classList.add('active')
}
)

closeToggleButton.addEventListener('click', () => {
    navMenu.classList.remove('active')
}
)