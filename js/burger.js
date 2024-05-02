

/* NAV*/
$('.nav__burger').on('click', function () {
    $('.nav__mob').addClass('active');
});
$('.nav__close').on('click', function () {
    $('.nav__mob').removeClass('active');
});
$('.footer__nav__a').on('click', function () {
    $('.nav__mob').removeClass('active');
});
$('.nav__mob').on('click', function () {
    $('.header__nav-burger').addClass('active');
});
$('.nav__close').on('click', function () {
    $('.header__nav-burger').removeClass('active');
});
$('.footer__nav__a').on('click', function () {
    $('.header__nav-burger').removeClass('active');
});