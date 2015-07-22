var Gallery = Gallery || {};

Gallery.run = function() {
	$("#galleryMore").click(function() {
		$("#galleryWrapper").show("slow");
	});

	$("#galleryExit").click(function() {
		$("#galleryWrapper").hide("slow");
	});
}


Gallery.init = function() {
	Gallery.run();
}