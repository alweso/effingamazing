

$(document).ready(function(){

$("#choose-demo").click(function() {
    $('html,body').animate({
        scrollTop: $("#between").offset().top},
        'slow');
});

});
