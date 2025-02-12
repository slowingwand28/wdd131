const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const container = document.querySelector(".books");

articles.forEach(function(item){
	let book = document.createElement("article");

	book.setAttribute("class", "book");

	let html = `<div class="info">
					<p class="date">${item.date}</p>
					<p class="age">${item.ages}</p>
					<p class="genre">${item.genre}</p>
					<p class="raiting">${item.stars}</p>
				</div>
				<div class="summery">
					<h2 class="title">${item.title}</h2>
					<img class="cover" src="${item.imgSrc}" alt="${item.imgAlt}">
					<p>${item.description} <a class="book-link" href="#">Read More...</a></p>
				</div>`
	book.innerHTML = html;
	container.appendChild(book);
})