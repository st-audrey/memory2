class Card extends HTMLElement {

    constructor(i) {
        super();
        this.createCard(i);
        this.initListeners();
    }
    initListeners() {
        this.onclick = function () {
            var event = new CustomEvent('cardClicked', { 'detail': 'toto' });
            this.dispatchEvent(event);
            console.log('toto');
            this.classList.add('flip'); 
        }
    }
    createCard(i) {
        this.setAttribute("data-match", i.toString());
        this.setAttribute("class", "memory-card");
        var verso = document.createElement("IMG");
        verso.setAttribute("class", "verso");
        var recto = document.createElement("IMG");
        recto.setAttribute("class", "recto");
        verso.setAttribute("src", "images/hearthstone.jpg");
        recto.setAttribute("src", "https://picsum.photos/200/300?random=" + i);
        this.appendChild(verso);
        this.appendChild(recto);
    }
}
customElements.define('memory-card', Card);