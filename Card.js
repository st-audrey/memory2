class Card extends HTMLElement {
    id;
    constructor(id) {
        super();
        this.id = id;
        this.createCard();
        this.initListeners();
    }

    initListeners() {
        this.onclick = function () {
            var event = new CustomEvent('cardClicked', { 'detail': 'toto' });
            this.dispatchEvent(event);
            console.log(this.id);
            this.classList.add('flip'); 
        }
    }
    createCard() {
        this.setAttribute("data-match", this.id);
        this.setAttribute("class", "memory-card");
        var verso = document.createElement("IMG");
        verso.setAttribute("class", "img-fluid");
        var recto = document.createElement("IMG");
        recto.setAttribute("class", "img-fluid");
        verso.setAttribute("src", "images/hearthstone.jpg");
        recto.setAttribute("src", "https://picsum.photos/200/300?random=" + this.id);
        this.appendChild(verso);
        this.appendChild(recto);

    }
}

customElements.define('memory-card', Card);