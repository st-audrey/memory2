class Game {
    cards = [];
    pair = 2;
    level = 1;
    chosenCards = [];
    nbClick = 0;
    lives = 1;
    win = false;
    end = false;

    createDivCol(){
        var divColElt = document.createElement("div");
        divColElt.setAttribute("class", "content-card");
        return divColElt;
    }

    randomizeCards(){
        var i,
            j,
            tmp;

        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = tmp;
        }
        return this.cards;
    }

    displayCards(){
        for(var i = 0; i < this.pair; i++){
            var card = new Card(i);
            var cardMirror = new Card(i);
            this.cards.push(card);
            this.cards.push(cardMirror);
        }

        var randomCards = this.randomizeCards();
        if(randomCards.length > 0){
            for(var i = 0; i < randomCards.length; i++){
                var divCol = this.createDivCol();

                //document.querySelector("#main").appendChild(divCol);



                document.querySelector("#main").appendChild(randomCards[i]);
            }
        }

    }

    showCards(){

    }

    isIdentic(){

    }

    addPair(){
        this.pair += 2;
    }

    levelUp(){
        this.level += 1
    }
}
