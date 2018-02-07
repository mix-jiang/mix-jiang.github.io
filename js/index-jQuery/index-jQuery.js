$(document).ready(function(){
  $("ul").click(function() {
    $(this).fadeToggle(function() {
      alert("hide");
    })
  });

var app1 = $("#nonexistent");

var callback = function() {
  console.log("done!");
};

if (app1.length){
  app1.fadeIn(300, callback);
} else {
  callback();
}

$( ".homepageimg" ).click(function() {
  $(this).hide(500).delay(1500).show(300);
})

$(.menubtn).click(function(){
  $(.types).slideToggle();
})


});
