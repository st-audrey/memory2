class Card extends HTMLElement {

    constructor(i, game) {
        super();
        this.createCard(i);
        this.initListeners();
        this.game = game;
    }
    initListeners() {
        this.onclick = function () {
            if (!this.game.isLocked) {
                this.classList.add('flip');
                this.game.handleClickedCard(this);
            }
        }
    }

    paired() {
        this.onclick = null; 
    }

    noMatch() {
        setTimeout(() => {
            this.classList.remove("flip");
            this.game.unlock();
        }, 1500);
    }

    createCard(i) {
        this.setAttribute("data-match", i.toString());
        this.setAttribute("class", "memory-card");
        var verso = document.createElement("IMG");
        verso.classList.add('verso');
        var recto = document.createElement("IMG");
        recto.classList.add('recto');
        verso.setAttribute("src", "images/classic.png");
        recto.setAttribute("src", "https://picsum.photos/200/300?random=" + i);
        this.appendChild(verso);
        this.appendChild(recto);
    }

}
customElements.define('memory-card', Card);