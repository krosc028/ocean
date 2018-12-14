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



$(document).scroll(function() {

    var y = $(document).scrollTop();

    $(".update").html(y);

    if (!(y > 500 && y < 1300)) {
        $(".sub1").fadeOut(1000);
    } else {
        $(".sub1").fadeIn(1500);
    }

    if (y > 500 && y < 1300) {
        $(".para1").fadeIn(1500);
    }
    else {
        $(".para1").fadeOut(1000);
    }

    if (y > 500 && y < 1000) {
        $(".white1").addClass("fishy");
    }

    else {
        $(".white1").fadeIn(100).removeClass("fishy");
    }


    if (y > 500 && y < 1300) {
        $(".para2").fadeIn(1500);
    }

    else {
        $(".para2").fadeOut(1000);
    }


    if (y > 1300 && y < 1900) {
        $(".sub1_2").fadeIn(1500);
    }
    else {
        $(".sub1_2").fadeOut(1000);
    }

    if (y > 1300 && y < 1900) {
        $(".blue").addClass("fishy");
    }
    else {
        $(".blue").fadeIn(100).removeClass("fishy");
    }


    if (y > 1300 && y < 1900) {
        $(".para1_2").fadeIn(1500);
    }

    else {
        $(".para1_2").fadeOut(1000);
    }


    if (y > 1300 && y < 1900) {
        $(".para2_2").fadeIn(1500);
    }

    else {
        $(".para2_2").fadeOut(1000);
    }


    if (y > 1900 && y < 3000) {
        $(".white2").addClass("fishy");
    }

    else {
        $(".white2").fadeIn(100).removeClass("fishy");
    }

    if (y > 1900 && y < 3000) {
        $(".sub1_3").fadeIn(1500);
    }
    else {
        $(".sub1_3").fadeOut(1000);
    }

    if (y > 1900 && y < 3000) {
        $(".timeline").fadeIn(1500);
    }
    else {
        $(".timeline").fadeOut(1000);
    }

});