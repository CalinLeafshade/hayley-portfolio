/*global $ */
/*jslint browser: true*/

$(function () {
    "use strict";
    
    var $window = $(window);
    
    function onScroll() {
        
        var scrollTop = $window.scrollTop();
        
        //$(".parallax").css("transform", "translate(0," + scrollTop * 0.5 + "px)");
        
        $(".parallax div").each(function (i, e) {
            
            var $e = $(e),
                trans = -(scrollTop * Number($(e).data("ratio")));
            $e.css("transform", "translate(0," + trans + "px)");
            
            
        });
    }
    
    function setup() {
        
        var w = $window.innerWidth(),
            h = $window.innerHeight();
    
        h = 1080;
        
        $(".parallax div").each(function (i, e) {
           
            var $e = $(e),
                start = Number($e.data("start"));
            $e.css('top', start * h + "px");
        
        });
        
        onScroll();
    }
    
    setup();
    
    $window.on("resize", setup);
    $window.on("scroll", onScroll);
    
    $window.load(function() {
        $('.overlay').fadeOut(800);
    });
    
});

