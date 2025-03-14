const body = document.querySelector("body");
const header = document.querySelector(".custom-header");

body.addEventListener("scroll", function() {
    let scrollPosition = body.scrollTop;
    
    if (scrollPosition > 0) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});