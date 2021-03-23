$('.burger').click(function(event) {
        $('.burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
})

$('.menu__list').click(function(event) {
	$('.burger,.header__menu').removeClass('active');
	$('.header__menu').removeClass('active');
	})



$(document).ready(function(){
	$('.people__about').slick({
		arrows: false,
		dots: true,
		autoplay: true,
});

})



 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
});