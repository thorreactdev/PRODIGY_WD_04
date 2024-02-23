// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let footerIcon = document.querySelector(".footer-icon");


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
// sticky header
let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY>100);

    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll
}

function scrolltoTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};