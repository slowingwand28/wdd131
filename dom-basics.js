const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/200");
image.setAttribute("alt", "An Image added with JavaScript");
document.body.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
const newP = document.createElement("p");
newH2.innerText = "DOM Basics";
newP.innerText = "This was added through Javascript";
newSection.appendChild(newH2);
newSection.appendChild(newP);
document.body.appendChild(newSection);
