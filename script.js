alert("hello")

$(document).ready(function(){

    $("#container1").hover(function(){
        $("#container1").html("<p>goodbye</p>");
        $("#container1").animate({
            opacity: '0.0',
        });
    }, function(){
        $("#container1").html("hover")
    })

    $("#container1").click(function(){
        $(this).slideUp()
    })

  
    $("#menuitem1").click(function(){
        $("#menuitem1").html("<p2>hello</p2>");
    });
    
    $("#menuitem2").click(function(){
        $("#menuitem2").text("ヽ(°〇°)ﾉ");
        $("#menuitem2").animate(
            {deg: 90},
            {duration: 100,
            step: function(now){
                $(this).css({transform: 'rotate(' + now + 'deg)'})
            }}
        )
        $("#menuitem2").animate({
            marginLeft: '0%',
            height:'-35%',
            width: '-10%'
        })
    });

    $("#menuitem3").dblclick(function(){ 
        $("#menuitem3").slideUp();
        $("#menuitem2").animate(
            {deg: 360},
            {duration: 100,
            step: function(now){
                $(this).css({transform: 'rotate(' + now + 'deg)'})
            }}
        )
        $("#menuitem2").text("<(￣︶￣)>");
    });
    

    $(".menu2").children().click(function(){
        $(this).toggleClass("menuitems")
        $(this).toggleClass("menuitems2")
    });


    $("#menuitem5").click(function(){
        $("#container1").slideDown();
    });

    $("#container2").click(function(){
        $("#container2").append("nothing nothing nothing nothing nothing nothing nothing nothingnothing nothing nothing nothing nothing nothing nothing nothingnothing nothing nothing nothing nothing nothing nothing nothing");
    });

    $("#container2").dblclick(function(){
        $("#container2").empty();
    });

    $( ".menu3" ).children().draggable({
        stop: function(){
            $(this).animate({top:0, left:0}, 1000, 'easeOutElastic');
        }
    });

    $("#menuitem8").click(function(){
        $("#menuitem9").text("(￣▽￣)ノ");
        scrollTo(0,7000)
     });

});
    
function setup() {
    createCanvas(windowWidth, windowHeight,);
    background(0, 0, 0);
  }
  
  let value = 0;
  function draw() {
    fill(value);
    noStroke();
    rect(mouseX, mouseY, 50, 50);
  }
  
  function mouseClicked() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }


    // $("#menuitem1").click(function(){
    //       $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
    //   })

    // $("#menuitem2").click(function(){
    //     $("#container1").append("this is append");
    // })

    // $("#menuitem3").click(function(){
    //   $("#container1").text("this is text");
    // })

    //   $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
    //     $("#container2").animate({
    //       opacity: '0.2',
    //       height: '60%',
    //       width: '60%',},2000,function(){
    //         alert("The paragraph is now hidden");
    //     });
    //     })
    //   $("#menuitem6").click(function(){
    //       scrollTo(0,5000)
    //   })

    //   $( ".menu3" ).children().draggable();

