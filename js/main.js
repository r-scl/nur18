jQuery(document).ready(function ($) {

    /*************************************************************/

    $('#bot1').click(function () {
        $('#main-video').html("<div class='embed-container'><iframe width='560' height='315' src='https://www.youtube.com/embed/IlaDOUaFZBg?controls=0&rel=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>");
    });

    $('#bot2').click(function () {
        $('#main-video').html("<div class='embed-container'><iframe width='560' height='315' src='https://www.youtube.com/embed/yEnlZUSDyvA?controls=0&rel=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>");
    });

    $('#bot3').click(function () {
        $('#main-video').html("<div class='embed-container'><iframe width='560' height='315' src='https://www.youtube.com/embed/V3qthVu2DFU?controls=0&rel=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>");
    });


    $('.video-bot').click(function () {
        $('.video-bot').removeClass("video-current");
        $(this).addClass("video-current");
    });

    /*******************FIN**************************************/


});
