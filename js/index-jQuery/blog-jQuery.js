var clickMeBtn;

$(document).ready(function(){
  clickMeBtn = $("#clickMeBtn");

  clickMeBtn.click(function(){
    var Ev = jQuery.Event("myEvent");
    clickMeBtn.trigger(Ev);
  });

  clickMeBtn.on("myEvent",function(event){
    console.log(event);
  });

  $("#btn1").click(function(){
    alert("text: "+$("#text").text());
  });

  $("#btn2").click(function(){
    alert("You have typed: " + $("#ipframe").val());
  });

  $("#btn-1").click(function(){
    $("#p1").text("Welcome");
  });

});
