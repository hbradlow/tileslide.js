TileSlide.js
============

A simple jQuery plugin to make image tiles on your website animate to reveal more information.

Demo: http://hbradlow.github.com/tileslide.js/

##Usage

###HTML

    <div class="tile">
        <img class="tile_img" src=""></img>
        <div class="tile_text">
            <h3>Awesome Image</h3>
            This is a picture of me doing something cool.
        </div>
    </div>

###Styleing

    <link href="css/tileslide.css" rel="stylesheet">
    
###Javascript

    <script src="js/tileslide.js"></script>
    <script type="text/javascript">
        $(function(){
            $(".tile").tileslide();
        });
    </script>
