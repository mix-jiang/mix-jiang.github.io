$(document).ready(function(){

  $( ".homepageimg" ).click(function() {
    $(this).hide(500).delay(1500).show(300);
  })


  $( ".menu-btn" ).click(function(){
    $( this ).fadeOut(700);
    $( ".bg" ).fadeToggle(700);
    $( ".mobile-menu" ).fadeToggle(1200);
  })

    $( ".bg" ).click(function(){
      $( ".mobile-menu" ).fadeOut(500);
      $( ".bg" ).fadeOut(1500);
      $( ".menu-btn" ).fadeIn(700);
    })

});
