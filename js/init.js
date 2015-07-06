window.addEventListener('load', function () {
    var tla = ['tlo1.jpg', 'tlo2.jpg', 'tlo3.jpg', 'tlo4.jpg', 'tlo5.jpg',];
    var czas = 3;
    
    var i = 0;
    setInterval(function () {
        i++;
        i%=tla.length;
        
        document.body.style.background = tla[i];
    }, czas * 1000);
}, false);

/*window.addEventListener('load', function () { //działa zmian kolorów
    var tla = ['red', 'green', 'blue'];
    var czas = 3;
    
    var i = 0;
    setInterval(function () {
        i++;
        i%=tla.length;
        
        document.body.style.backgroundColor = tla[i];
    }, czas * 1000);
}, false);*/