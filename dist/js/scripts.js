$(function () {
    $('.menu_toggle').on('click', function () {
        $(this).toggleClass('rotate');
        $('.row_menu').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style'); // удалит атрибут
            }
        });
    });
});