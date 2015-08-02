$(function() {
    var $items = $('.item');
    $items.hide();

    var $container = $('#items');
    $container.imagesLoaded(function() {
        
       $items.fadeIn();

        $container.masonry({
            itemSelector : '.item'
        });    
    });
});