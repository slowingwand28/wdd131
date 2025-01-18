const themeSelector = document.querySelector("#select-mode");

function changeTheme() {
    if (themeSelector.value == "dark") {
        const element = document.getElementById("bod");
        element.classList.add("dark");
        const image = document.getElementById("logo");
        image.setAttribute("src", "byui-logo_white.png");
    } else {
        const element = document.getElementById("bod");
        element.classList.remove("dark");
        const image = document.getElementById("logo");
        image.setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener("change", changeTheme);