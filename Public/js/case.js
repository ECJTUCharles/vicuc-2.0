$(function() {
    var arr_C = ['首&nbsp;&nbsp;页', '核心业务<ul class="dropdown-menu" aria-labelledby="dropdownMen2" style="text-align:center;display:block;"><li style="clear:both;"><a href="core.html" style="padding:5px;">核心业务</a></li><li style="clear:both;"><a href="salechannel.html" style="padding:5px;">销售渠道</a></li><li style="clear:both;"><a href="partners.html" style="padding:5px;">合作伙伴</a></li></ul>', '新&nbsp;&nbsp闻', '案&nbsp;&nbsp;例', '关&nbsp;于&nbsp;&nbsp;我&nbsp;们', '&nbsp;联&nbsp;系&nbsp;&nbsp;我&nbsp;们'];
    var arr_E = ['HOME', 'CORE<span class="caret"></span>', 'NEWS', 'CASE', 'ABOUT US', 'CONTACT US'];

    $('#s-nav>li').on('mouseenter mouseleave', function(ev) {
        console.log($(this).children());
        switch (ev.type) {
            case 'mouseenter':
                $(this).children().html(arr_C[$(this).index()]);
                break;
            case 'mouseleave':
                $(this).children().html(arr_E[$(this).index()]);
                break;
        }
    });
    $(window).scroll(function() {
        $('.animation').each(function() {
            console.log($(this).offset().top - $(window).scrollTop());
            if (($(this).offset().top - $(window).scrollTop()) < window.innerHeight) {
                $(this).addClass('animation2');
            }
        });
    });
})