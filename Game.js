class Game {   

    constructor(level, life) {
        this.level = level;
        this.life = life;
        this.initBoard();
    }

    initBoard() {
        var nbPair = 0;
        var board = document.getElementById("memory-board");

        if (this.level == 1) {
            nbPair = 2;
        } else if (this.level == 2) {
            board.setAttribute("style", "width: 640px;");
            nbPair = 4;
        }else if (this.level == 3) {
            board.setAttribute("style", "width: 960px;");
            nbPair = 6;
        }
        
        var tab = [];

        for (let i = 0; i < nbPair; i++) {
            let card = new Card(i);
            let card2 = new Card(i);

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

    }
}
