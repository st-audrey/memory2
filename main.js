class Card extends HTMLElement {

    constructor() {
        super();

    }
    createCard() {       
        this.setAttribute("data-match", "");
        var recto = document.createElement("IMG");
        var verso = document.createElement("IMG");
        recto.setAttribute("src" , "images/dos.jpg");
        verso.setAttribute("src" , "https://picsum.photos/200/300?random=");
        this.appendChild(recto);
        this.appendChild(verso);
    }
}
customElements.define('memory-card', Card);

(function () {

    card = new Card;
    card.createCard();
    console.log(card);


})();