//collect mobile menu div from the document
const mobile = document.getElementById("mobileMenu");

//function on click
function mobileMenu () {
    mobile.classList.toggle('active-mobile');
}
//check if mobile menu is showing
//if not, turn on (menu slides in from the side and fades in)
//if showing, turn off (menu slides out and fades out)