window.addEventListener('load', function () {
    var mainPage = document.getElementById("mainPage");
    var tla = ['url(img/tlo1.jpg)', 'url(img/tlo2.jpg)', 'url(img/tlo3.jpg)', 'url(img/tlo4.jpg)', 'url(img/tlo5.jpg)',];
    var czas = 5;
    
    var i = 0;
    setInterval(function () {
        i++;
        i%=tla.length;
        
        mainPage.style.background = tla[i];
    }, czas * 1000);
}, false);