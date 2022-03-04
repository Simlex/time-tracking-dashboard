
$(function() {
    $('.times a:nth-child(1)').click(function(){
        $('.section-weekly').addClass('hide');
        $('.section-monthly').addClass('hide');
        $('.section-daily').removeClass('hide');

        $('.times a:nth-child(2)').removeClass('active');
        $('.times a:nth-child(3)').removeClass('active');
        $(this).addClass('active');
    });

    $('.times a:nth-child(2)').click(function(){
        $('.section-daily').addClass('hide');
        $('.section-monthly').addClass('hide');
        $('.section-weekly').removeClass('hide');

        $('.times a:nth-child(1)').removeClass('active');
        $('.times a:nth-child(3)').removeClass('active');
        $(this).addClass('active');
    });

    $('.times a:nth-child(3)').click(function(){
        $('.section-monthly').removeClass('hide');
        $('.section-daily').addClass('hide');
        $('.section-weekly').addClass('hide');

        $('.times a:nth-child(1)').removeClass('active');
        $('.times a:nth-child(2)').removeClass('active');
        $(this).addClass('active');
    });

    const body = document.querySelector('body');

    $('.theme-box').click(function() {
        $('.section-header, .card-details').toggleClass('dark-theme-bg');
        $('.title, .time p, a .active').toggleClass('dark-theme-color');
        $('.card-details, .times a').toggleClass('dark-theme-color__100');
        $(body).toggleClass('theme-bg-color');
        //$('.times').toggleClass('color', '#1D204B');
    });

});