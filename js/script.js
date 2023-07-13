// SCRIPT HAMBURGER MENU //

let nav = document.querySelector("#nav");
let btn = document.querySelector(".navbarHamburgerToggle");
let mask = document.querySelector(".navbarHamburgerMask");
let filter = document.querySelector(".navbarHamburgerFilter");
let body = document.querySelector("body");
let opened = 0;

/* if button of responsive navbar is clicked then button, menu and filter are enable */

btn.onclick = () => {
    toggleOpen(nav, mask, filter);
    removeOpen(submenu);

    if(opened < 1) {
        removeOverflow(body);
        opened = 0;
    }

    addOverflow(body);
    opened = 1;
};

/* if you click in the main page then menu, button, filter and submenu are resets */

filter.onclick = () => {
    removeOpen(mask, filter, nav, submenu);

    if(opened > 0) {
        removeOverflow(body);
        opened = 0;
    } else {
        addOverflow(body);
        opened = 1;
    }
}

/* SCRIPT SUBMENU HAMBURGER */

let menu = document.querySelector(".navbarAlignLeftResponsiveGrid");
let submenu = document.querySelector(".navbarSubMenu");
let header = document.querySelector(".navbarSubMenuHeader");

/* if menu is clicked then submenu is open */

menu.onclick = () => {
    toggleOpen(submenu);
}

/* if header of submenu is clicked then submenu is close */

header.onclick = () => {
    removeOpen(submenu)
}

/* if media screen is max width on 768px then reset all responsives objects */

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        removeOverflow(body);
        removeOpen(mask, filter, nav, submenu);
    }
})

function removeOpen(...list) {
    return list.forEach(element =>
        element.classList.remove("open")
    )
}

function toggleOpen(...list) {
    return list.forEach(element =>
        element.classList.toggle("open")
    )
}

function removeOverflow(...list) {
    return list.forEach(element =>
        element.classList.remove("overflowHidden")
    )
}

function addOverflow(...list) {
    return list.forEach(element =>
        element.classList.add("overflowHidden")
    )
}

/* SCRIPT EXPANDABLE */

let expandable = document.querySelectorAll('.informationsResponsive > div:nth-child(2n-1)');

for(let i = 0; i < expandable.length; i++) {
    expandable[i].addEventListener('click', () => {
        let hidden = document.querySelector('.hiddenCollapsible' + i);
        hidden.classList.toggle("active");
        let rotate = document.querySelector('.logoCollapsible' + i)
        rotate.classList.toggle('rotate');
    })
}
