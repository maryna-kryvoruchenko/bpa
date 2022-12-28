'use strict';

const navbar = document.querySelector('header');
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);

document.addEventListener('scroll', ()=>{
  if(window.scrollY>navbarHeight){
      navbar.classList.add('navbar--dark');
  }
  else{
      navbar.classList.remove('navbar--dark');
  }
})