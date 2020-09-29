$(document).ready(function () {
    animateDiv("#fish1Id");
});
function flip() {
    var newq = makeNewPosition();
    var oldq = $("#fish1Id").offset();
    if (newq - oldq < 0)
        $("#fish1Id").attr("src", "images/fish1.png");
    if (newq - oldq > 0)
        $("#fish1Id").attr("src", "images/fish10.png");
};

function makeNewPosition() {

    // Get viewport dimensions
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv() {
    var newq = makeNewPosition();
    $("#fish1Id").animate({ top: newq[0], left: newq[1] },
        10000, function () {
            flip();
            animateDiv();

        });

};
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