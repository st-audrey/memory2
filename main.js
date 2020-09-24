class Card extends HTMLElement {

    constructor() {
        super();
        this.createCard();
        this.initListeners();
    }
    initListeners() {
        this.onclick = function () {
            var event = new CustomEvent('cardClicked', { 'detail': 'toto' });
            this.dispatchEvent(event);
            console.log('toto');
        }
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


    function cardClicked(ev) {
        console.log(ev);
    }

    card = new Card;

    card.addEventListener('cardClicked', function (ev) {
        cardClicked(ev);
    });

    document.body.appendChild(card);
    console.log(card);


})();