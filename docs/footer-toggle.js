let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let footer = document.querySelector("footer");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // User is scrolling down -> Show footer
        footer.style.bottom = "0";
    } else {
        // User is scrolling up -> Hide footer
        footer.style.bottom = "-50px";
    }
    lastScrollTop = currentScroll;
});
