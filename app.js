const input = document.querySelector(".form-control"),
    searchIcon = document.querySelector(".search");

const navbar = document.querySelector(".navbar");

const description = document.querySelector(".prodcut-subtitle .descirpt-group"),
    imggroup = document.querySelector(".subtitle-img-group img:last-of-type");

searchIcon.addEventListener("click", function() {
    input.classList.toggle("show");
    input.focus();
});

window.addEventListener("scroll", function() {
    let getscrllY = this.window.scrollY;
    console.log(getscrllY);

    if (getscrllY >= 300) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }

    if (getscrllY >= 1000) {
        description.classList.add("scroll");
        imggroup.classList.add("scroll");
    } else {
        description.classList.remove("scroll");
        imggroup.classList.remove("scroll");

    }
})