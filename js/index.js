const body = document.querySelector("body");
const header = document.querySelector(".custom-header");
const navbarToggler = document.querySelector(".navbar-toggler") 

let navAberta = false;
let scrollPosition = 0;

body.addEventListener("scroll", function() {
    scrollPosition = body.scrollTop;
    
    fundoNavbar();
});

navbarToggler.addEventListener("click", function() {
    navAberta = !navAberta;

    fundoNavbar();
});

function fundoNavbar() {
    if ((scrollPosition > 0 || navAberta) && !header.classList.contains("visible")) {
        header.classList.add("visible");
    } else if (scrollPosition === 0 && !navAberta && header.classList.contains("visible")) {
        header.classList.remove("visible");
    }
}
