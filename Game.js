class Game {
    cards = [];
    pair = 3;
    level = 1;
    chosenCards = [];
    nbClick = 0;
    lives = 1;
    win = false;
    end = false;
    showTmp = 5000;
    cardSelected = null;
    inter = null;

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

    getImgFromUrl(url) {
        return new Promise( function(resolve, reject){
            var i = new Image();
            i.src = url;
            i.onload = function(){
                resolve(i);
            }
        });
    }

    promiseMeImgs(tabUrl){
        var promises = [];
        for ( let i = 0; i < tabUrl.length; i++){
            promises.push( this.getImgFromUrl( tabUrl[i] ) )
        }
        return Promise.all(promises);
    }

    displayCards(){
        var me = this;
        var urls = [];
        for(var i = 0; i < this.pair; i++){
            urls.push( "https://picsum.photos/200/300?random="+i );
        }

        return this.promiseMeImgs(urls)
            .then( function( imgs ){
                for (var i = 0; i < imgs.length; i++) {
                    var img = imgs[i];
                    var img2 = img.cloneNode( true );
                    me.cards.push(new Card(i, img), new Card(i, img2));
                }
                var randomCards = me.randomizeCards();
                if(randomCards.length > 0){
                    for(var j = 0; j < randomCards.length; j++){

                        /*var divCol = this.createDivCol();
                        document.querySelector("#main").appendChild(divCol);*/

                        document.querySelector("#main").appendChild(randomCards[j]);
                        me.showAllCards();
                    }
                }
            });
    }

    showAllCards(){
        var cards = this.cards;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                for (var i=0;i < cards.length;i++){
                    cards[i].show();
                }
                setTimeout(function () {
                    for (var j=0;j<cards.length;j++){
                        cards[j].hide();
                        cards[j].disabled = false;
                    }
                }, 500)
            },500)
        })
    }

    promiseMyTwin(ev) {
        var me = this;
        return new Promise(function(resolve, reject){
            if (!me.cardSelected) {
                me.cardSelected = ev.detail;
                me.inter = setTimeout( function(){
                    resolve( { win : false } );
                }, 5000);
            } else {
                clearTimeout(me.inter);
                me.inter = null;
                if (me.cardSelected === ev.detail ){
                    resolve( { win : true , cardSelected: me.cardSelected, cardClicked : ev.detail } );
                } else {
                    resolve( { win : false } );
                }
            }
        });
    }

    cardIsClicked(ev){
        var me = this;
        this.promiseMyTwin(ev).then( function(result){
            console.log(result);
            me.cardSelected = null;
        });

    }
    isPair(){
        var me = this;
        console.log(this.cards.length);
        for(var i = 0; i < this.cards.length; i++) {
            let c = this.cards[i];
            c.addEventListener("cardClicked", function(e){
                me.cardIsClicked(e);
            })
        }
    }

    addPair(){
        this.pair += 2;
    }

    levelUp(){
        this.level += 1
    }
}
