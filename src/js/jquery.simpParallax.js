/* simpParallax - Arthur Camara -  https://github.com/arthurcamara1/simpParallax */

(function ($) {
 
    $.fn.simpParallax = function(options) {

    	var defaults = {
    		factor: 0.2,
    		parallaxtype: 'top'
    	};

    	var settings = $.extend( defaults, options );
    	var scrolledY = $(window).scrollTop();

    	if(settings.parallaxtype === "background") {
    		this.css("background-position","center -"+((scrolledY*settings.factor))+"px");
    	} else {
    		this.css(settings.scrollType,"-"+((scrolledY*settings.factor))+"px");
    	}
        return this;
    };

    $.simpParallax = function() {

        $(window).bind("scroll",function(e){
        
            $("[data-parallax='true']").each(function() {
                //set options according to data attributes
                var options = {};
                var attrs = ["factor", "parallaxtype"];
                for(var i=0, size=attrs.length; i<size; i++) {
                    var attribute = attrs[i];
                    if($(this).attr("data-"+attribute)) {
                        options[attribute] = $(this).data(attribute);
                    }
                }
                $(this).simpParallax(options);
            });

        });

    }
 
}(jQuery));