$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target,
            offset = 0;
        $target = $(target);
        if($target.attr('id') != 'mainPage') {
            offset = $target.offset().top+2;
        }
        $('html, body').stop().animate({
            'scrollTop': offset
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var menuHeight = 87;
        var contactHeight = 1662;
        if (refElement.position().top <= scrollPos  && 
            refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        } else if(scrollPos > contactHeight) {
            $('#menu-center ul li a').removeClass("active");
            $('#menu-center ul li a[href=#contact]').addClass("active");
        } else{
            currLink.removeClass("active");
        }
    });
}