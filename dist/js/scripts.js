$(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('rotate');
        $('.row__menu').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style'); // удалит атрибут
            }
        });
    });
    if ($(window).width() < 720) {
        $('.nav-link').on('click', function () {
            $('.menu-toggle').removeClass('rotate')
            $('.row__menu').slideUp(300)
        })
    }
});