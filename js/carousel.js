
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
                
               
                Carousel._interval = setInterval(function() { 
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
                <a href="${item.link}">
                    <button id = "esquerda"><</button>
                        <img src="img/${item.image}" style="width:50%; transition: opacity 0.5s ease-in-out ;">
                    <button id="direita">></button>
                </a>`;
            titleContainer.innerHTML = `<p>${item.title}</p>`;
        }

        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0; 
        }    
    }

}