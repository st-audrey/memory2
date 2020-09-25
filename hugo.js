(function initFlip() {
    var cards = document.getElementsByClassName("memory-card");
    setTimeout(function () {
        for (var j=0;j<cards.length;j++){
            cards[j].className += " flip";
        }
        setTimeout(function () {
            for (var j=0;j<cards.length;j++){
                cards[j].className = "memory-card";
            }
        }, 2000)
    }, 1000)
}())