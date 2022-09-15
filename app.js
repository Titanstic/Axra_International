const input = document.querySelector(".form-control"),
    searchIcon = document.querySelector(".search");

const navbar = document.querySelector(".navbar");

AOS.init();

searchIcon.addEventListener("click", function() {
    input.classList.toggle("show");
    input.focus();
});

window.addEventListener("scroll", function() {
    let getscrollY = this.window.scrollY;

    //for navbar 
    if (getscrollY >= 300) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }

})