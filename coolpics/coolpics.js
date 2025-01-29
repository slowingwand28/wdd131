const menuButton = document.querySelector("button");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const menu = document.querySelector(".links");
    if (menu.classList.contains("hide")) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);

function handleResize() {
    
}