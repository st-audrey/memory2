class Game {
    cards = [];
    pair = 6;
    level = 1;
    chosenCards = [];
    nbClick = 0;
    lives = 1;
    win = false;
    end = false;
    showTmp = 5000;

    /*createDivCol(){
        var divColElt = document.createElement("div");
        divColElt.setAttribute("class", "content-card");
        return divColElt;
    }*/

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
            for(var j = 0; j < randomCards.length; j++){

                /*var divCol = this.createDivCol();
                document.querySelector("#main").appendChild(divCol);*/

                document.querySelector("#main").appendChild(randomCards[j]);
                this.showAllCards();
            }
        }

    }

    showAllCards(){
        var tmp = this.showTmp;
        var cards = document.getElementsByClassName("memory-card");
        setTimeout(function () {
            for (var i=0;i<cards.length;i++){
                cards[i].className = "memory-card flip";
            }
            setTimeout(function () {
                for (var j=0;j<cards.length;j++){
                    cards[j].className = "memory-card";
                }
            }, tmp)
        }, 1500)
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
