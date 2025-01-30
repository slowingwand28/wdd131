
const menuButton = document.querySelector(".menubutton");

const menu = document.querySelector(".links");

menuButton.addEventListener("click", toggleMenu);

window.addEventListener("resize", handleResize);

function toggleMenu() {
    if (menu.classList.contains("hide")) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

function handleResize() {
    if (window.innerWidth >= 1000) {
        if (menu.classList.contains("hide")) {
            menu.classList.remove("hide");
        }
    } else {
        if (menu.classList.contains("hide") == false) {
            menu.classList.add("hide");
        }
    }
}

handleResize();
