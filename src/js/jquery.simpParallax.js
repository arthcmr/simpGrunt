/* simpParallax - Arthur Camara -  https://github.com/arthurcamara1/simpParallax 

-----------------------------------------
Usage:

<script>
    $("#my_element").simpParallax({
        factor: 0.5,
        parallaxtype: 'background'
    });
</script>

OR

<div id="element" data-parallax="true" data-factor="0.3" data-parallaxtype="top"></div>
<script>
    $.simpParallax();
</script>

-----------------------------------------
*/

(function ($) {
 
    $.fn.simpParallax = function(options) {

        var defaults = {
            factor: 0.5,
            parallaxtype: 'top'
        };

        var settings = $.extend( defaults, options );
        var scrolledY = $(window).scrollTop();

        if(settings.parallaxtype === "background") {
            this.css("background-position","center -"+((scrolledY*settings.factor))+"px");
        } else {

            var top;
            if ($.isNumeric(this.attr('data-initialpos'))) {
                top = this.attr('data-initialpos');
            } else {
                top = parseInt(this.css('top'),10);
                this.attr('data-initialpos', top);
            }

            var position = (top-(scrolledY*settings.factor));

            this.css(settings.parallaxtype,position+"px");
        }
        return this;
    };

    $.simpParallax = function() {

        $("[data-parallax='true']").each(function() {
            if (!$(this).attr('data-parallaxtype')) {
                $(this).attr('data-parallaxtype', 'top');
            }
            if (!$(this).attr('data-factor')) {
                $(this).attr('data-factor', 0.5);
            }
        });

        $(window).bind("scroll",function(e){
        
            $("[data-parallax='true']").each(function() {
                //set options according to data attributes
                var options = {};
                var attrs = ["factor", "parallaxtype"];
                for(var i=0, size=attrs.length; i<size; i++) {
                    var attribute = attrs[i];
                    if($(this).attr("data-"+attribute)) {
                        options[attribute] = $(this).attr("data-"+attribute)
                    }
                }
                $(this).simpParallax(options);
            });

        });

    }
 
}(jQuery));