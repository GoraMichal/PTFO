var pContainerHeight = $('.intro-box').height();

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll <= pContainerHeight) {

        $('.logo-image').css({
            'transform' : 'translate(0px, '+ wScroll /7 +'%)'
        });

        $('.face-image').css({
            'transform' : 'translate(0px, -'+ wScroll /5 +'%)'
        });

    }
});