
const menuButton = document.querySelector(".menubutton");

const menu = document.querySelector(".links");

menuButton.addEventListener("click", toggleMenu);

window.addEventListener("resize", handleResize);

document.querySelector(".gallery").addEventListener("click", viewHandler);

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

function viewerTemplate(pic, alt) {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>
    `
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const pic = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const source = pic.getAttribute("src");
    const sourceSplit = source.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSource = `${sourceSplit[0]}-full.jpeg`;
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSource, "Enlarged Image"));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}


handleResize();
