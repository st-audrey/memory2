class Card extends HTMLElement {

    constructor(i, game) {
        super();
        this.createCard(i);
        this.initListeners();
        this.game = game;
    }
    initListeners() {
        this.onclick = function () {
            //var event = new CustomEvent('cardClicked', { 'detail': 'toto' });
            //this.dispatchEvent(event);
 
            this.classList.add('flip'); 

            var promise = Promise(function (resolve, reject));
            promise.then(function() {
                // si la promesse est tenue, cette carte est gardee retournee
                // mettre a jour game => attente nouvelle premiere carte
            }).catch(function() {
                //si la promesse n'estp as tenue, on retourne cette carte
                // mettre a jour game => attente nouvelle premiere carte
            });

            game.handleClickedCard(this.dataset.match, promise);
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