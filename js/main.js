$('.fig').on('click', function () {
  var $details = $(this).children('.figcap');

  if ($details.attr('data-state') == 'active' ) {
    $details.attr('data-state', 'inactive');
  } else {
    $details.attr('data-state', 'active');
  }
});