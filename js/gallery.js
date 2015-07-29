var Gallery = Gallery || {};


Gallery.prepareHTML = function(data, short) {
	short = typeof short !== 'undefined' ? true : false;
	var html = "",
		html_class = short ? 'photo' : 'photo marginPhotoGallery'
	for(var i in data.images) {
		html += '<div class="'+html_class+'">';
		html += '<a href="'+data.images[i].img+'" data-lightbox="'+data.meta.group+'">';
		html += '<img src="'+data.images[i].min_img+'"/>';
		html += '</a></div>';
	}
	$container = short ? $("#photoContainer") : $("#PhotosPlaceholder");
	$container.prepend(html);
}

Gallery.setGallery = function(cat) {
	$("#PhotosPlaceholder").fadeOut(function() {
		$("#PhotosPlaceholder .photo").remove();
		Gallery.prepareHTML(Gallery[cat]);
		$("#PhotosPlaceholder").fadeIn();
	})
}

Gallery.switchGallery = function() {
	$("#galleryMenu li").click(function() {
		var cat = $(this).data('cat');
		Gallery.setGallery(cat);
	})
}


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
	Gallery.prepareHTML(Gallery.basic, true);
	Gallery.switchGallery();
	Gallery.setGallery('gal2');
}