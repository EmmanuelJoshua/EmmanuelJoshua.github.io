$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        if (!$('nav').hasClass('scrolled')) $('nav').addClass('scrolled');
    });
});
$(window).scroll(function () {
    if ($('#nav-icon1').hasClass('open')) {

    } else {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    }

});