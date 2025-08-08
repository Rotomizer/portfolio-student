//collect mobile menu div from the document
const mobile = document.getElementById("mobileMenu");

function mobileMenu () {
    let scrollPosition = window.pageYOffset;

    mobile.classList.toggle('active-mobile');
    mobile.classList.contains('active-mobile') ? window.onscroll = function() {window.scrollTo(0, scrollPosition)} : window.onscroll = null; 
}