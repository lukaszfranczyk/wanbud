var Gallery = Gallery || {};

Gallery.run = function() {
	$("#galleryMore").click(function() {
		$("#mainWrapper").fadeOut(200, function() {
			$("#galleryWrapper").fadeIn(200);
		});
	});

	$("#galleryExit").click(function() {
		$("#galleryWrapper").fadeOut(200, function() {
			$("#mainWrapper").fadeIn(200);
		});
	});
}


Gallery.init = function() {
	Gallery.run();
}