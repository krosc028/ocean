$(document).ready(function() {

    $(".button") .delay(1000).fadeIn("slow");


    $(".img2") .click(function() {
        $(".ham") .fadeIn("fast");

    });

    $(".img3") .click(function() {
        $(".ham") .fadeOut("fast");

    });


    $(".wave_1") .scroll(function() {
        $(".para1") .fadeIn("slow")
    });

});



$(document).scroll(function(){

    var y = $(document).scrollTop();

    $(".update").html(y);

    if (y > 400 && y< 950) {
        $(".para1").fadeIn(1500);
    }

    else {
        $(".para1").fadeOut(1000);
    }


    if (y > 400 && y< 950) {
        $(".para2").fadeIn(1500);
    }

    else {
        $(".para2").fadeOut(1000); }

    if (y > 400 && y< 950) {
        $(".white1").addClass("fishy");
    }

    else {
        $(".white1").fadeIn(100).removeClass("fishy");
    }


    if (y > 950 && y< 1450) {
        $(".para1_2").fadeIn(1500);
    }

    else {
        $(".para1_2").fadeOut(1000);
    }


    if (y > 950 && y< 1450) {
        $(".para2_2").fadeIn(1500);
    }

    else {
        $(".para2_2").fadeOut(1000);
    }

    if (y > 950 && y< 1450) {
        $(".blue").addClass("fishy");
    }
    else {
        $(".blue").fadeIn(100).removeClass("fishy");
    }




    if (y > 1500 && y< 2100) {
        $(".para1_3").fadeIn(1500);
    }

    else {
        $(".para1_3").fadeOut(1000);
    }

    if (y > 1500 && y< 2100) {
        $(".white2").addClass("fishy");
    }

    else {
        $(".white2").fadeIn(100).removeClass("fishy");
    }

    if (y > 1500 && y< 2100) {
        $(".para2_3").fadeIn(1500);
    }

    else {
        $(".para2_3").fadeOut(1000);
    }




});