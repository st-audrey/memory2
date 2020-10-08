class Game {   

    constructor(level, life, theme) {
        this.level = level;
        this.life = life;
        this.theme = theme;
        this.hasFlippedCard = false;
        this.isLocked = false;
        this.successPair = 0;
        this.initBoard(level);
        this.showLife(life);
    }

    initBoard() {
        this.nbPair = 0;
        var board = document.getElementById("memory-board");
        var cards = document.getElementsByClassName("verso");
        board.innerHTML = "";
        this.successPair = 0;
   
        
        
        if (this.level == 1) {
            this.nbPair = 2;
        } else if (this.level == 2) {
            board.setAttribute("style", "width: 640px;");
            this.nbPair = 4;
        }else if (this.level == 3) {
            board.setAttribute("style", "width: 960px;");
            this.nbPair = 6;
        }

        var tab = [];

        for (let i = 0; i < this.nbPair; i++) {
            let card = new Card(i, this);
            let card2 = new Card(i, this);

            tab.push(card);
            tab.push(card2);
   
        }

        function randomize(tab) {
            var i, j, tmp;
            for (i = tab.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                tmp = tab[i];
                tab[i] = tab[j];
                tab[j] = tmp;
            }
            return tab;
        }

        var tabShuffle = randomize(tab);
        for (var i in tabShuffle) {
            board.appendChild(tabShuffle[i]);
        }

        if (this.theme == 1) {
            for (var item of cards) {
                item.setAttribute("src", "images/blueRibbonArtisancards.png");
            }
        } else if (this.theme == 2) {
            for (var item of cards) {
                item.setAttribute("src", "images/bonafideplayingcards.jpg");
            }
        } else if (this.theme == 3) {
            for (var item of cards) {
                item.setAttribute("src", "images/jungleArtisancards.png");
            }
        } else if (this.theme == 4) {
            for (var item of cards) {
                item.setAttribute("src", "images/artOfPlayArtisancards.png");
            }
        } else if (this.theme == 5) {
            for (var item of cards) {
                item.setAttribute("src", "images/bicyclecards.png");
            }
        };

        var allCards = document.querySelectorAll(".memory-card");

        setTimeout(() => {
            for (let i = 0; i < allCards.length; i++) {             
                allCards[i].classList.add("flip");  
            }        
        }, 1500);

        setTimeout(() => {
        for (let i = 0; i < allCards.length; i++) {        
            allCards[i].classList.remove("flip");
            }          
        }, 4500);

    }

    showLife(life) {
        var lifeCount = document.getElementById("memory-life");
        lifeCount.innerHTML = "";
        for (let i = 0; i <life; i++) {
            
            var lifePic = document.createElement("IMG");
            lifePic.className = "vie";
            lifePic.setAttribute("src", "images/vie.png");
            lifeCount.appendChild(lifePic);
        }
    }

    handleClickedCard(card) {
        
        //if (lockBoard) return;
        //if (this === firstCard) return; 

        if (!this.hasFlippedCard) {
            //premier click
            this.hasFlippedCard = true;
            this.firstCard = card;      
            return;
        }
        //deuxieme click
        this.hasFlippedCard = false;

        //on match
        let isMatch = this.firstCard.dataset.match === card.dataset.match;
        if (isMatch) {
            this.firstCard.paired();
            card.paired()
            this.life++;
            this.showLife(this.life);

            this.successPair++;
            if (this.successPair == this.nbPair) {
                this.level++;

                var levelUp = document.getElementById("memory-lvl");
                levelUp.innerText = "lvl " + this.level;

                setTimeout(() => {
                    this.initBoard();
                }, 1500);
            }
        } else {
            this.isLocked = true;
            this.firstCard.noMatch();
            card.noMatch();
            this.life--

            this.showLife(this.life);


            if (this.life == 0) {
                alert('Game Over');
            }
        }
    }

    unlock() {
        this.isLocked = false;
    }
}
