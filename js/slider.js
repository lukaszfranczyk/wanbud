var Slider = Slider || {};

Slider.photos = []

Slider.run = function() {
	var i = 1;
	setInterval(function() {
		var url = 'url(img/slider/'+i+'.png)';
		console.log(url);
		$("#mainPage").animate({opacity: 0}, 'fast', function() {
			$(this).css({'background': url}).animate({'opacity': 1});
		})
		i++;
		if(i > 6) {
			i = 1;
		}
	}, 10000);
};

Slider.init = function() {
	Slider.run();
}