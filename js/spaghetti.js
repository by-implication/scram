var stopAnimating = false;
    
    jQuery.event.add(window, "load", resizeFrame);
    jQuery.event.add(window, "resize", resizeFrame);


    function resizeFrame () {
      var windowHeight = $(window).height();
      var b = (windowHeight / 4) - 150;
      $("#vignette").css("height", windowHeight + "px");    
      $("#container").css("top", b + "px");
    }


    var randomizedDuration = function(elem) {
        elem.each(function() {
            var duration = Math.random() * 6000 + 800;

              $(this).
                animate({textShadow: "#ddd 3px 0px 4px"}, {
                    duration: duration/2}).
                animate({textShadow: "#fff 0px 0px 1px"}, {
                    duration: duration/2,
                    complete: function() {
                        randomizedDuration($(this));
                    }
               });

        });
    }

    $(document).ready(function() {        
        if (screen.width > 480) {
          $(".animate .content p .funky").lettering();
          randomizedDuration($(".animate .content p .funky span")); 
        }

        $(window).scroll(function (event) {

          var areaOffsetOne = 820;
          var areaOffsetTwo = 9570;

          var x = $(this).scrollTop();

          var ex = x - areaOffsetOne - 400;
          var y = -ex/2;
          var z = ex/2;

          if (x > areaOffsetTwo) {
            $("#scrollview div:nth-child(1)").fadeOut(500);
          } else if (x > areaOffsetOne) {
            $("#scrollview div:nth-child(1)").fadeIn(200);
            $(".intro div:nth-child(1)").fadeOut(500);
            $("section.intro").removeClass("animate");
          } else {
            $("#scrollview div:nth-child(1)").fadeOut(500);
            $(".intro div:nth-child(1)").fadeIn(500);
            $("section.intro").addClass("animate");
          }

          // document.title = x;

          var r = Math.random() * 90;
          var ar = -r * Math.random() * 6;

          var herp =  -z + 250 ;
          var derp =  -3730;
        
          // $("#hallway .left").css("background-position", "0 " + z + "px ,"+ z + "px 0");
          // $("#hallway .right").css("background-position", "0 " + y + "px ,"+ z + "px 0");
          // $("#hallway .top").css("background-position", z + "px 0, 0 " + z + "px");
          // $("#hallway .bottom").css("background-position", y + "px 0, 0 " + z + "px");
          $("#hallway .left").css("background-position", "0 " + r + "px ,"+ z + "px 0");
          $("#hallway .right").css("background-position", "0 " + ar + "px ,"+ z + "px 0");
          $("#hallway .top").css("background-position", ar + "px 0, 0 " + z + "px");
          $("#hallway .bottom").css("background-position", r + "px 0, 0 " + z + "px");
          $("#hallway #panes").css("-webkit-transform", "translateZ(" + z + "px)");
          $("#hallway #panes").css("-moz-transform", "translateZ(" + z + "px)");

          if ( z > 3050 ) {
            $("#panes div:nth-child(8) p").css("-webkit-transform", "translateZ(" + herp + "px)");
            $("#panes div:nth-child(8) p").css("-moz-transform", "translateZ(" + herp + "px)");

          }

          if ( z > 3694 ) {
            $("#panes div:nth-child(9) p").css("-webkit-transform", "translateZ(" + herp + "px)");
            $("#panes div:nth-child(9) p").css("-webkit-transform", "translateZ(" + herp + "px)");

          } 

          if (z > 3990 ) {
            $("#panes div:nth-child(8) p").css("-webkit-transform", "translateZ(" + derp + "px)");
            $("#panes div:nth-child(9) p").css("-webkit-transform", "translateZ(" + derp + "px)");
            $("#panes div:nth-child(8) p").css("-moz-transform", "translateZ(" + derp + "px)");
            $("#panes div:nth-child(9) p").css("-moz-transform", "translateZ(" + derp + "px)");
          }


        });

    });

    $(".toggle").click(function(){
      $("div.intro").toggleClass("animate");
      $(".funky span").stop();
    });