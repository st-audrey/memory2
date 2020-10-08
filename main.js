(function () {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const theme = urlParams.get('theme')


    new Game(1, 1, theme);

})();