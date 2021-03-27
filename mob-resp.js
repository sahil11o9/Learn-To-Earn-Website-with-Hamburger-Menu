burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('visi-mob')
    navList.classList.toggle('visi-mob')
    navbar.classList.toggle('h-nav-mob')
})