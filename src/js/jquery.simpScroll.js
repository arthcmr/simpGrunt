/*

    simpScroll - Arthur Camara -  https://github.com/arthurcamara1/simpScroll

    Requires: jQuery easing: https://github.com/gdsmith/jquery.easing

 */

(function ($) {
 
    //applies scroll to a specific link
    $.fn.simpScroll = function(options) {

        var defaults = {
            speed: 800
        };
        var settings = $.extend( defaults, options );

        //click
    	var link = this.attr('href');
        this.click(function (e) {
            e.preventDefault();
            go_to($(link));
        });

        //animate
        function go_to(destination, speed) {
            var body = $('body');
            body.data("scrolling", true);
            $('html, body').animate({
                scrollTop: destination.offset().top
            }, speed, 'easeInOutExpo', function () {
                body.data("scrolling", false);
            });
        }
    };

    //catches all scrollable links
    $.simpScroll = function(options) {
        
        var defaults = {
            speed: 800
        };
        var settings = $.extend( defaults, options );

        $("[data-scroll='true']").each(function () {
            $(this).simpScroll(settings);
        });
    }
 
}(jQuery));