$('.top-wrapper').css({'height':$(window).height()-30});

$(window).on('resize',function(){
    winH = $(window).height();
    $('.top-wrapper').outerHeight(winH-30);
});

$('.top-image').css({'height':$(window).height()-102});

$(window).on('resize',function(){
    winH = $(window).height();
    $('.top-image').outerHeight(winH-102);
});

$('.top-cm-banner').css({'top':$(window).height()-180});

$(window).on('resize',function(){
    winH = $(window).height();
    $('.top-cm-banner').css({'top':$(window).height()-180});
});
