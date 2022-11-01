// SCRIPT HAMBURGER MENU //

let nav = document.querySelector("#nav");
let btn = document.querySelector(".navbarHamburgerToggle");
let mask = document.querySelector(".navbarHamburgerMask");
let filter = document.querySelector(".navbarHamburgerFilter");
let body = document.querySelector("body");
let opened = 0;

/* if button of responsive navbar is clicked then button, menu and filter are enable */

btn.onclick = () => {
    nav.classList.toggle("open");
    mask.classList.toggle("open");
    filter.classList.toggle("open");
    submenu.classList.remove("open");

    if(opened === 1) {
        body.classList.remove("overflowHidden");
        opened = 0;
    }
    else {
        body.classList.add("overflowHidden");
        opened = 1;
    }
};

/* if you click in the main page then menu, button, filter and submenu are resets */

filter.onclick = () => {
    mask.classList.remove("open");
    filter.classList.remove("open");
    nav.classList.remove("open");
    submenu.classList.remove("open");

    if(opened === 1) {
        body.classList.remove("overflowHidden");
        opened = 0;
    }
    else {
        body.classList.add("overflowHidden");
        opened = 1;
    }
}

/* SCRIPT SUBMENU HAMBURGER */

let menu = document.querySelector(".navbarAlignLeftResponsiveGrid");
let submenu = document.querySelector(".navbarSubMenu");
let header = document.querySelector(".navbarSubMenuHeader");

/* if menu is clicked then submenu is open */

menu.onclick = () => {
    submenu.classList.toggle("open");
}

/* if header of submenu is clicked then submenu is close */

header.onclick = () => {
    submenu.classList.remove("open");
}

/* if media screen is max width on 768px then reset all responsives objects */

window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        mask.classList.remove("open");
        filter.classList.remove("open");
        nav.classList.remove("open");
        submenu.classList.remove("open");
    }
})

