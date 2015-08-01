$(function() {
   
    var $cloudLayer = $('#cloud-layer');
    
    function makeCloud() {
        $('<img>').attr('src', '/img/para/cloud.png').addClass('cloud').data('speed', Math.random()).css({
            "top": Math.random() * 100 + "px",
            "left": Math.random() * $(window).innerWidth() + "px",
            "transform": "scale(" + Math.random() /2 + 0.5 + ")",
            "opacity": Math.random / 3
        }).appendTo($cloudLayer);
    }
    
    for(var i = 0; i < 3; i ++) {
        //makeCloud();   
    }
    
    function animateClouds() {
        
        $cloudLayer.children().each(function(i, e) {
            var $e = $(e);
            var left = $e.position().left;
            if (left < -200) {
                left = $(window).innerWidth() + 50;   
            }
            left = left - $e.data('speed');
            $e.css('left', left + "px");
        });
        
        requestAnimationFrame(animateClouds);   
    }
    
    //animateClouds();
    
});