const input = document.querySelector(".form-control"),
    searchIcon = document.querySelector(".search");

const navbar = document.querySelector(".navbar");

const description = document.querySelector(".prodcut-subtitle .descirpt-group"),
    imggroup = document.querySelector(".subtitle-img-group img:last-of-type");

const product1 = document.querySelector(".prodcut-card .prodcut-description.product-1"),
    product2 = document.querySelector(".prodcut-card .prodcut-description.product-2");
const pImg1 = document.querySelector(".prodcut-card .product-img-group.img-1"),
    pImg2 = document.querySelector(".prodcut-card .product-img-group.img-2");

searchIcon.addEventListener("click", function() {
    input.classList.toggle("show");
    input.focus();
});

window.addEventListener("scroll", function() {
    let getscrollY = this.window.scrollY;
    console.log(getscrollY);

    //for navbar 
    if (getscrollY >= 300) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }

    if (getscrollY >= 1000) {
        description.classList.add("scroll");
        imggroup.classList.add("scroll");
    } else {
        description.classList.remove("scroll");
        imggroup.classList.remove("scroll");

    }

    //for product section
    if (getscrollY >= 1550) {
        product1.classList.add("scroll");
        pImg1.classList.add("scroll");
    } else {
        product1.classList.remove("scroll");
        pImg1.classList.remove("scroll");
    }

    if (getscrollY >= 1900) {
        product2.classList.add("scroll");
        pImg2.classList.add("scroll");
    } else {
        product2.classList.remove("scroll");
        pImg2.classList.remove("scroll");
    }

})