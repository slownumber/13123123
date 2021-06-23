$(document).ready(function (){ 
    const nav =
    $('#nav').offset().top;
    const scrolled = $(this).scrolltop();
    $(window).scroll(function(){
         if (scrolled > nav) {
             $('#header'),addclass('nav-fixed');

         }
         else if (scrolled < nav ){
            $('#header'),removeclass('nav-fixed');
         }
    });

});