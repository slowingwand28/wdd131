const games = [
    {
        title: "Apex Legends",
        developer: "Respawn Entertainment",
        publisher: "Electronic Arts",
        image: "images/apex.jpg",
        description: "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
        tags: ["Multiplayer", "FPS", "Sci-Fi"]
    },
    {
        title: "Baldur's Gate 3",
        developer: "Larian Studios",
        publisher: "Larian Studios",
        image: "images/bg3.jpg",
        description: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        tags: ["Single-player", "Multiplayer", "RPG", "Fantasy", "Open World"]
    },
    {
        title: "Elden Ring",
        developer: "FromSoftware",
        publisher: "Bandai Namco Entertainment",
        image: "images/elden_ring.jpg",
        description: "THE CRITICALLY ACCLAIMED FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        tags: ["Single-player", "RPG", "Fantasy", "Open World"]
    },
    {
        title: "Halo: The Master Chief Collection",
        developer: "Halo Studios and Bungie Inc.",
        publisher: "Xbox Game Studios",
        image: "images/halo_mcc.png",
        description: "The Master Chief’s iconic journey includes six games, built for PC and collected in a single integrated experience. Whether you’re a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.",
        tags: ["Single-player", "Multiplayer", "FPS", "Sci-Fi"]
    },
    {
        title: "Stellaris",
        developer: "Paradox Development Studio",
        publisher: "Paradox Interactive",
        image: "images/stellaris.png",
        description: "Explore a galaxy full of wonders in this sci-fi grand strategy game from Paradox Development Studios. Interact with diverse alien races, discover strange new worlds with unexpected events and expand the reach of your empire. Each new adventure holds almost limitless possibilities.",
        tags: ["Single-player", "Multiplayer", "Strategy", "Sci-Fi"]
    },
    {
        title: "Total War: Warhammer 3",
        developer: "Creative Assembly",
        publisher: "SEGA",
        image: "images/tww3.jpg",
        description: "The cataclysmic conclusion to the Total War: WARHAMMER trilogy is here. Rally your forces and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate of the world will be decided. Will you conquer your Daemons… or command them?",
        tags: ["Single-player", "Multiplayer", "Strategy", "Fantasy"]
    }
]

document.querySelector(".gallery").addEventListener("click", viewHandler);

const homepage_content = document.querySelector(".homepage")

function viewHandler(event) {
    let game
    const pic = event.target;

    const title = pic.getAttribute("alt");
    for (const item of games) {
        if (title == item.title) {
            game = item
        }
    }

    document.querySelector("main").insertAdjacentHTML("afterbegin", viewerTemplate(game));
    homepage_content.classList.add("hide");
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function viewerTemplate(game) {
    return `
    <div class="viewer">
        ${gameCardTemplate(game)}
        <button class="close-viewer">Exit</button>
    </div>
    `
}

function gameCardTemplate(game) {
    return `
    <div class="game-card">
        <img src="${game.image}" alt="${game.title}">
        <div class="game-info">
            <h3>${game.title}</h3>
            <p class="creators">Developer: ${game.developer}</p>
            <p class="creators">Publisher: ${game.publisher}</p>
            <div class="tag-container">
                ${tagsTemplate(game.tags)}
            </div>
            <p>
                ${game.description}
            </p>
        </div>
    </div>
    `
}

function tagsTemplate(tags){
    return tags.map((tag) => `<p class="tags">${tag}</p>`).join(" ");
}

function closeViewer() {
    document.querySelector(".viewer").remove();
    homepage_content.classList.remove("hide");
}