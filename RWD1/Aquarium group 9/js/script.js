//coordinates for the regular movement
function fish2MoveNewPosition(){
    var h = $(window).height()-100;
    var w = $(window).width()-100;
    
    var nh = Math.floor(Math.random()*h);
    var nw = Math.floor(Math.random()*w);
    
    return[nh, nw];
}
//regular animation movement
function animate1Div(){
    var pos = fish2MoveNewPosition();
    //experiment????
    var b = 200 + (getRandomNumFish2(0, $(window).width() - 400));
    var fish2XPosition = $("#fish2Id").position().left;
    if(b > fish2XPosition){
                $("#fish2Id").css("transform", "scaleX(1)");
            } else { 
                $("#fish2Id").css("transform", "scaleX(-1)");
            };
   //experiment over
    $("#fish2Id").animate({top:pos[0],left:pos[1]}, 2500, function(){animate1Div();});
};
//Call the movement to load on the page
$(document).ready(function(){
    animate1Div("#fish2Id");
});
//RNG function for running away function
function getRandomNumFish2(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//random position coordinates and animation
function FishBlueMovement(randomPos) {
    var currentPos = $(randomPos).position();
    var x = getRandomNumFish2(0, $(window).width() - 100);
    var y = getRandomNumFish2(0, $(window).height() - 100);
    
    $(randomPos).animate({top: y, left: x}, 800);
};
//runs away on hover and restarts regular movement
$("#fish2Id").hover(function () {
    $(this).stop(true);
    FishBlueMovement($(this));
    ("#fish2Id", 1000);
    animate1Div();
});








// Orange fish
    
    // Randomizer function
    function getFish1Random(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;};

    // Movement function
    function fish1Moves(idRef, speed) {
        var y = 200 + (getFish1Random(0, $(window).height() - 400));
        var x = 200 + (getFish1Random(0, $(window).width() - 400));
        var fish1PosX = $("#fish1Id").position().left;
        if(x > fish1PosX){
                $("#fish1Id").css({});
                // console.log('css change fish1 right');
                $("#fish1Id").css("transform", "scaleX(1)");
            } else { 
                // console.log('css change fish1 left');
                $("#fish1Id").css("transform", "scaleX(-1)");
            };
        $(idRef).animate({
            top: y, left: x}, speed, function () {fish1Moves(idRef, speed)
        });
    };

    // Call movement on load of page
    $(window).ready(function () {
        fish1Moves("#fish1Id", 7200)
    }); 

    // Move to click
    $(window).click(function (event) {
        $("#fish1Id").stop(true);
        $("#fish1Id").animate({left: event.pageX - 100, top: event.pageY - 100}, 700);
        fish1Moves("#fish1Id", 4400);
    });

    // Zoom on clik
    $("#fish1Id").dblclick(function () {
        $(this).stop(true).animate({width: 400, height: 400});
        setTimeout(function () {   
        $("#fish1Id").animate({width: 250, height: 250}, 500);
        }, 2500);      // Shrink timer
            setTimeout(function () {
            fish1Moves("#fish1Id", 8100); 
        }, 3000);     // Pause timer
    });
//JellyFish
// Call to function
$("#JellyFish").animate({ top: "+=10" }, "slow", function () { squareMovement() });


// Declaration of function
function squareMovement() {
    var speed = 800;
    $("#JellyFish")
        .animate({ left: '+=100', top: '+=500' }, speed)
        .animate({ left: '+=100', top: '-=500' }, speed)
        .animate({ left: '+=100', top: '+=500' }, speed)
        .animate({ left: '+=100', top: '-=500' }, speed)
        .animate({ left: '+=100', top: '+=500' }, speed)
        .animate({ left: '+=100', top: '-=500' }, speed)
        .animate({ left: '+=100', top: '+=500' }, speed)
        .animate({ left: '+=100', top: '-=500' }, speed)
        .animate({ left: '+=100', top: '+=500' }, speed)
        .animate({ left: '+=100', top: '-=500' }, speed)
        .animate({ left: '+=100', top: '+=500' }, speed)
        .animate({ left: '+=100', top: '-=500' }, speed)
        .animate({ left: '+=100', top: '+=500' }, speed)
        .animate({ left: '+=100', top: '-=500' }, speed)

        .animate({ left: '-=100', top: '+=500' }, speed)
        .animate({ left: '-=100', top: '-=500' }, speed)
        .animate({ left: '-=100', top: '+=500' }, speed)
        .animate({ left: '-=100', top: '-=500' }, speed)
        .animate({ left: '-=100', top: '+=500' }, speed)
        .animate({ left: '-=100', top: '-=500' }, speed)
        .animate({ left: '-=100', top: '+=500' }, speed)
        .animate({ left: '-=100', top: '-=500' }, speed)
        .animate({ left: '-=100', top: '+=500' }, speed)
        .animate({ left: '-=100', top: '-=500' }, speed)
        .animate({ left: '-=100', top: '+=500' }, speed)
        .animate({ left: '-=100', top: '-=500' }, speed)
        .animate({ left: '-=100', top: '+=500' }, speed)
        .animate({ left: '-=100', top: '-=500' }, speed, function () { squareMovement(); })

}
//interaction
function overlap(Idref1, Idref2) {
    // var P1x2 = P1x1 + 100;
    // var P1y1 = Idref1.offset.top;
    // var P1x1 = Idref1.offset.left;
    // var P1y2 = P1y1 + 100;

    //var P2x1 = Idref2.offset.left;
    //var P2x2 = P2x1 + 100;
    // var P2y1 = Idref2.offset.top;
    // var P2y2 = P2x1 + 100;

    if (!(Idref1.right < Idref2.left ||
        Idref1.left > Idref2.right ||
        Idref1.bottom < Idref2.top ||
        Idref1.top > Idref2.bottom)) {
        console.log('false');
        return false;
    }
    else {

        return true;
    }
}
function checker() {
    if (overlap($("#JellyFish"), $("#bubble1Id"))) {
        $("#bubble1Id").stop().fadeOut().show(10, function () { BubbleMovement("#bubble1Id") });
    }
    if (overlap($("#JellyFish"), $("#bubble2Id"))) {
        $("#bubble2Id").stop().fadeOut().show(10, function () { BubbleMovement("#bubble2Id") });
    }
    if (overlap($("#JellyFish"), $("#bubble3Id"))) {
        $("#bubble3Id").stop().fadeOut().show(10, function () { BubbleMovement("#bubble3Id") });
    }
}

setInterval(checker, 10);
//bubbles

$("#bubble1Id").animate({ left: "+=0" }, "slow", function () { BubbleMovement("#bubble1Id") });
$("#bubble2Id").animate({ left: "+=0" }, "slow", function () { BubbleMovement("#bubble2Id") });
$("#bubble3Id").animate({ left: "+=0" }, "slow", function () { BubbleMovement("#bubble3Id") });
function BubbleMovement(IdRef) {
    $(IdRef).offset({ top: 667, left: randomIntFromInterval(1, 1337) }).show(10).animate({ top: "-=800" }, randomIntFromInterval(3000, 9000), function () { BubbleMovement(IdRef) });
};
$("#bubble1Id").on("click", function () {
    $("#bubble1Id").stop().fadeOut().show(10, function () { BubbleMovement("#bubble1Id") });
});
$("#bubble2Id").on("click", function () {
    $("#bubble2Id").stop().fadeOut().show(10, function () { BubbleMovement("#bubble2Id") });
});
$("#bubble3Id").on("click", function () {
    $("#bubble3Id").stop().fadeOut().show(10, function () { BubbleMovement("#bubble3Id") });
});
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


