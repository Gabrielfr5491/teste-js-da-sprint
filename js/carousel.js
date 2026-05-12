let carouselArr = [];

class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {

        if (!arr || arr.length <= 0) {
            throw "Method Start need a Array Variable.";
        }

        Carousel._items = arr;
        Carousel._sequence = 0;
        Carousel._size = arr.length;

        Carousel.Next();

        Carousel._interval = setInterval(() => {

            Carousel._sequence++;

            if (Carousel._sequence >= Carousel._size) {
                Carousel._sequence = 0;
            }

            Carousel.Next();

        }, 7000);
    }

   static Next() {

    const container = document.getElementById("carousel");
    const titleContainer = document.getElementById("carousel-title");
    const dotsContainer = document.getElementById("carousel-dots");

    let item = Carousel._items[Carousel._sequence];

    container.innerHTML = `
        <button id="esquerda"><</button>
        <img src="img/${item.image}">
        <button id="direita">></button>
    `;

    titleContainer.innerHTML = `<p>${item.title}</p>`;

    dotsContainer.innerHTML = "";

    Carousel._items.forEach((_, index) => {

        const dot = document.createElement("div");

        dot.classList.add("dot");

        if(index === Carousel._sequence){
            dot.classList.add("active");
        }

        dot.onclick = () => {
            Carousel._sequence = index;
            Carousel.Next();
        }

        dotsContainer.appendChild(dot);

    });

    document.getElementById("esquerda").onclick = () => {

        Carousel._sequence--;

        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.Next();
    };

    document.getElementById("direita").onclick = () => {

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        Carousel.Next();
    };
    };
};