$(document).ready(function() {

    $(".button") .delay(1000).fadeIn("slow");


    $(".img2") .click(function() {
        $(".ham") .fadeIn("fast");

    });

    $(".img3") .click(function() {
        $(".ham") .fadeOut("fast");

    });



});



$(document).scroll(function(){

    var y = $(document).scrollTop();

    $(".update").html(y);

    if (y > 300 && y< 1000) {
        $(".para1").fadeIn(1500);
    }

    else {
        $(".para1").fadeOut(1000);
    }


    if (y > 300 && y< 1000) {
        $(".bag").fadeIn(1500) .addClass("bag_move");
    }

    else {
        $(".bag").fadeOut(1000) .removeClass("bag_move");
    }


    if (y > 1000 && y< 1450) {
        $(".para1_2").fadeIn(1500);
    }

    else {
        $(".para1_2").fadeOut(1000);
    }



    if (y > 1000 && y< 1450) {
        $(".para2_2").fadeIn(1500);
    }

    else {
        $(".para2_2").fadeOut(1000);
    }



    if (y > 1000 && y< 1450) {
        $(".sub1_2").fadeIn(1500);
    }

    else {
        $(".sub1_2").fadeOut(1000);
    }



    if (y > 1000 && y< 1450) {
        $(".sub2_2").fadeIn(1500);
    }

    else {
        $(".sub2_2").fadeOut(1000);
    }


    if (y > 1000 && y< 1450) {
        $(".para3_2").fadeIn(1500);
    }

    else {
        $(".para3_2").fadeOut(1000);
    }

    if (y > 1000 && y< 1450) {
        $(".sub3_2").fadeIn(1500);
    }

    else {
        $(".sub3_2").fadeOut(1000);
    }


    if (y > 1000 && y< 1450) {
        $(".envir").fadeIn(1500);
    }

    else {
        $(".envir").fadeOut(1000);
    }


    if (y > 1000 && y< 1450) {
        $(".econ").fadeIn(1500);
    }

    else {
        $(".econ").fadeOut(1000);
    }

    if (y > 1000 && y< 1450) {
        $(".health").fadeIn(1500);
    }

    else {
        $(".health").fadeOut(1000);
    }

    if (y > 1000 && y< 1450) {
        $(".blue").addClass("fishy");
    }
    else {
        $(".blue").fadeIn(100).removeClass("fishy");
    }



    if (y > 1450 && y< 2000) {
        $(".sub1_3").fadeIn(1500);
    }

    else {
        $(".sub1_3").fadeOut(1000);
    }

    if (y > 1450 && y< 2000) {
        $(".para1_3").fadeIn(1500);
    }

    else {
        $(".para1_3").fadeOut(1000);
    }

    if (y > 1450 && y< 2000) {
        $(".bottle").fadeIn(1500);
    }

    else {
        $(".bottle").fadeOut(1000);
    }

    if (y > 1450 && y< 2000) {
        $(".white2").addClass("fishy");
    }

    else {
        $(".white2").fadeIn(100).removeClass("fishy");
    }
});