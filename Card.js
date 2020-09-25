class Card extends HTMLElement {
    id;

    constructor(id) {
        super();
        this.id = id;
        this.createCard();
        this.initListeners();
    }

    show() {
        this.classList.add('flip');
    }

    initListeners() {
        this.onclick = function () {
            var event = new CustomEvent('cardClicked', { 'detail': 'toto' });
            this.dispatchEvent(event);
            console.log(this.id);
            this.show();
        }
    }

    createCard() {
        this.setAttribute("data-match", this.id);
        this.setAttribute("class", "memory-card");
        var verso = document.createElement("img");
        verso.setAttribute("class", "verso img-size");
        var recto = document.createElement("img");
        recto.setAttribute("class", "recto img-size");
        verso.setAttribute("src", "images/hearthstone.jpg");
        recto.setAttribute("src", "https://picsum.photos/200/300?random=" + this.id);
        this.appendChild(verso);
        this.appendChild(recto);
    }
}
customElements.define('memory-card', Card);