let lastScrollTop = window.pageYOffset;
let scrollTimeout;
const returnButton = document.getElementById("return");

//checking if user scrolls up, then showing the return to top button
window.addEventListener("scroll", function() {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        let currentScroll = window.scrollY || document.body.scrollTop;

        if (currentScroll < lastScrollTop && window.pageYOffset != 0) {
            returnButton.classList.add('mobile-return');
        } else {
            returnButton.classList.remove('mobile-return');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, 100);
}, false);