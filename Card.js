class Card extends HTMLElement {
    id;
    disabled = true;

    constructor(id, img) {
        super();
        this.id = id;
        this.img = img;
        this.createCard();
        this.initListeners();
    }

    initListeners() {
        var me = this;
        this.onclick = function () {

            if(!me.disabled){
                me.show();
                var event = new CustomEvent('cardClicked', { 'detail': this.id } );
                me.dispatchEvent(event);
            }
        }

    }

    show() {
        this.classList.add('flip');
    }

    hide(){
        this.classList.remove("flip");
    }

    createCard() {
        this.setAttribute("data-match", this.id);
        this.setAttribute("class", "memory-card");
        var verso = document.createElement("img");
        verso.setAttribute("class", "verso img-size");
        verso.setAttribute("src", "images/hearthstone.jpg");

        var recto = this.img;
        recto.setAttribute("class", "recto img-size");

        this.appendChild(verso);
        this.appendChild(recto);
    }
}

customElements.define('memory-card', Card);