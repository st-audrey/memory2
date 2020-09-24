

/*(function () {


    function cardClicked(ev) {
        console.log(ev);
    }

    //card = new Card;

    card.addEventListener('cardClicked', function (ev) {
        cardClicked(ev);
    });

    var board = document.getElementById("memory-board");
    board.appendChild(card);

    //document.body.appendChild(card);
    //console.log(card);


})();*/

var game = new Game();
game.displayCards();