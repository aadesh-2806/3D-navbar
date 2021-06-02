const hamburger = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container')

hamburger.addEventListener('click' , ()=>{
    container.classList.toggle('active')
})