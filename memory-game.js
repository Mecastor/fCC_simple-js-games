const cardArray = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },

    {
        name: "fries",
        img: "images/fries.png"
    },

    {
        name: "hotdog",
        img: "images/hotdog.png"
    },

    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },

    {
        name: "milkshake",
        img: "images/milkshake.png"
    },

    {
        name: "pizza",
        img: "images/pizza.png"
    },

    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },

    {
        name: "fries",
        img: "images/fries.png"
    },

    {
        name: "hotdog",
        img: "images/hotdog.png"
    },

    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },

    {
        name: "milkshake",
        img: "images/milkshake.png"
    },

    {
        name: "pizza",
        img: "images/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
console.log(gridDisplay);

const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.append(card);
        //console.log(card, i);
    }
}

const flipCard = () => {
    const cardID = this.getAttribute("data-id");
    console.log("clicked", cardID);
}

createBoard();
flipCard();

//Stopped at 44:55!1!