function aaa() {
    history.go(0);
};
jQuery(function () {
    var widthwi = jQuery(window).width();
    if (widthwi > 950) {
        jQuery('.Scroll').show();
        //jQuery('.top_bar').hide();
        jQuery('#help_qq').hover(function () {
            jQuery('.are_bk').show(800);
            jQuery('.xxxx').show(800);
        }, function () {
            /*jQuery('.are_bk').hide(800);
            jQuery('.xxxx').hide(800);*/
        });
        jQuery('.xxxx').click(function () {
            jQuery('.are_bk').slideUp(100);
            jQuery('.xxxx').hide();
        });
    } else {
        jQuery('.Scroll').hide();
        jQuery('.footer').css('margin-bottom', '50px');
        //jQuery('.top_bar').show();
    };
    jQuery(window).bind('resize', function () {
        if(jQuery(window).width() > 992){
            setTimeout("aaa();", 100);
        }
    });
});
