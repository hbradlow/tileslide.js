(function($){
    $.fn.tileslide = function(){
        var slide_time = 300;
        var slide_height = 50;
        var img_height = 200;
        var text_height = 100;
        $(this).hover(function(){
            $(this).find("img").stop().animate({"top":"-"+slide_height+"px"},slide_time);
            $(this).find(".tile_text").stop().animate({"top":String(img_height-slide_height)+"px"},slide_time);
        },function(){
            $(this).find("img").stop().animate({"top":"0px"},slide_time);
            $(this).find(".tile_text").stop().animate({"top":String(img_height-text_height)+"px"},slide_time);
        });
    };
})(jQuery);
