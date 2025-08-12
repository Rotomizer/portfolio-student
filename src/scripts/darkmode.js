let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

document.addEventListener("DOMContentLoaded", darkMode());

function darkMode() {
    document.body.classList.toggle('darkmode')
    if (darkmode !== "active") {
        localStorage.setItem('darkmode', 'active')
    } else {
        localStorage.setItem('darkmode', null)
    }
    darkmode = localStorage.getItem('darkmode')
}