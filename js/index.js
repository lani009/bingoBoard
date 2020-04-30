let td = $("#bingoTable td");
let li = $("#example li");
let link = "#example-";

$(document).ready(function() {
    if($(window).width() == 720) {
        $("#fileImage").width($("#file").height() - 10);
        $("#fileImage").height($("#file").height() - 10);
    }
    $(document).bind('selectstart',function() {return false;}); 
    $(document).bind('dragstart',function(){return false;});
    // $(document).bind("contextmenu", function(e) {
    //     return false;
    //    });
});

$.each(li, function(index, item) {
    $(item).attr("id", "example-" + index);
});

$.each(td, function(index, item) {
    $(item).click(function() {
        location.href = link + index;
        $(link+index).effect("shake", {times: 3, distance: 5}, 500);
    });
    $(item).mouseenter(function() {
        $(item).stop().animate({backgroundColor: "#ffb1b1"}, 100);
        // $(item).css("background-color", "#ffb1b1").show("slow");
    });
    $(item).mouseleave(function() {
        $(item).stop().animate({backgroundColor: "#FFF"}, 100);
        // $(item).css("background-color", "#FFF").show("slow");
    });
});