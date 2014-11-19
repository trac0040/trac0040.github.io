$(document).ready(function() {
    $('.fig').on('click', function () {
  var $details = $(this).children('.figcap');

  if ($details.attr('data-state') == 'active' ) {
    $details.attr('data-state', 'inactive');
  } else {
    $details.attr('data-state', 'active');
  }
});

$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scroll-to-top').fadeIn(200,"linear");
		} else {
			$('.scroll-to-top').fadeOut(200,"linear");
		}
	});
	
	$('.scroll-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});
});