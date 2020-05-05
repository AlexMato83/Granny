$(document).ready(function() {
   // var audio = $(".audio audio");
   // console.log(audio);
   // $(".audio").click(
   //   function(){
   //     alert("suca")
   //   }
   // )

  // $(".artisti").click(function(){
  //   $(this).animate({top: "400px" }, 1000);
  // });

  // $(".artisti").click(function(){
  //   console.log("click");
  //   $(this).animate({left: '500px'});
  //   console.log("ciao");
  //
  //   var left = $(this).left;
  //   var top = $(this).top;
  //
  //   console.log(left);
  // });
  $(".artisti").click(function(){
    var isAperto = $(this).hasClass("isAperto") == true;
    if (isAperto == false) {
      $("body").addClass("barra-espansa");
      $(this).animate({"margin-left": '500px'});

      $(this).addClass("isAperto");
    } else {
      $(this).animate({"margin-left": '0px'}, function() {
        $(this).removeClass("isAperto");
        if ($(".isAperto").length == false) {
          $("body").removeClass("barra-espansa");
        }
      });
    }
  });

});
