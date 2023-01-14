'use strict';

const navbar = document.querySelector('header');
const navbarHeight = navbar.getBoundingClientRect().height;
// console.log(navbarHeight);

document.addEventListener('scroll', ()=>{
  if(window.scrollY>navbarHeight){
      navbar.classList.add('navbar--dark');
  }
  else{
      navbar.classList.remove('navbar--dark');
  }
})

const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('active');
    navbar.classList.toggle('open');
} )