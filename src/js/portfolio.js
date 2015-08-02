$(function() {
    var $items = $('.item');
    var $popups = $('.portfolio-popup');
    $items.hide();

    var $container = $('#items');
    $container.imagesLoaded(function() {
        
       $items.fadeIn();

        $container.masonry({
            itemSelector : '.item'
        });    
    });
    
    $items.on('click', function(ev) {
        ev.preventDefault();
        
        var $this = $(this);
        var id = $this.data('id');
        var item = $this.data('item');
        var $popup;
        
        $popups.each(function(i,e) {
            
            $e = $(e);
            if ($e.data('for').indexOf(id) > -1) {
                $popup = $e;
                return false;
            }
            
        });
        
        if ($popup) {
            $popup.find('h2').text(item.title);
            $popup.find('img').attr('src', "/img/" + item.img);
            $popup.addClass('shown');   
        }
        
    });
    
    $popups.find('.popup-overlay').on('click', function(ev) {
        ev.preventDefault();
        $(this).parent().removeClass('shown');
    });
    
    $popups.find('.close').on('click', function(ev) {
        console.log("lol");
        ev.preventDefault();
        $(this).closest('.portfolio-popup').removeClass('shown');
    });
    
    
    
    
    
    
});