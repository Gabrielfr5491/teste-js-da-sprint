
let carouselArr = [];

class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {

                Carousel._items = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;

                Carousel.Next();


                Carousel._interval = setInterval(function () {
                    Carousel.Next();
                }, 2000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {

        const container = document.getElementById("carousel");
        const titleContainer = document.getElementById("carousel-title");

        let item = Carousel._items[Carousel._sequence];

        if (container && titleContainer) {
            container.innerHTML = `
                    <button id = "esquerda" type="button"><</button>
                        <img src="img/${item.image}";">
                    <button id="direita">></button>`;
            titleContainer.innerHTML = `<p>${item.title}</p>`;
        }

        const button_eq = document.getElementById("esquerda");

        button_eq.onclick = () => {
            Carousel._sequence--;

            if (Carousel._sequence < 0) Carousel._sequence = Carousel._size - 1;

            Carousel.Next();
        }

        document.getElementById("direita").onclick = () => {
            Carousel._sequence++;
            if (Carousel._sequence >= Carousel._size) {
                Carousel._sequence = 0;
            }

            Carousel.Next();
        }

        Carousel._sequence++
        Carousel.Next
    }

}