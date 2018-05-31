$(document).ready(function(){

"use strict";

 // ----------------------------------------------------------------------- PICKER ---------------------------------------------------------------------------------------

    $('.icon-wrap').on('click', function(e){
        $('#picker').toggleClass('show-picker');
        $('.icon-wrap').addClass('picker-on').removeClass('picker-off');
    });


    $('body').on('click', '.body-bg', function(){
        $('#picker').removeClass('show-picker');
        $('#picker .icon-wrap').addClass('picker-off').removeClass('picker-on');
    });

    $('.choose-color').on('click', function(){
        var switchTo = $(this).attr('id')
        var arrClasses = [];

        $('[class*="version-"]').removeClass(function () {
             console.log(this.className);
            var className = this.className.match(/version-\d+/);
            if (className) {
                arrClasses.push(className[0])
                return className[0];
            }
        }).addClass(switchTo);

    });

     $('.choose-align').on('click', function(){

        $('.choose-align').removeClass('active-button');
                $(this).addClass('active-button');
        var switchTo2 = $(this).attr('id')
        var arrClasses2 = [];

        $('[class*="text-to-"]').removeClass(function () {
            var className2 = this.className.match(/text-to-\w+/);
            if (className2) {
                arrClasses2.push(className2[0])
                console.log(className2[0])
                return className2[0];
            }
        }).addClass(switchTo2);
    });


// ----------------------------------------------------------------------- Selector variables -----------------------------------------------------------------------------------------------------------------------------------

var body = $('body');
var bodyBg = $('.body-bg');
var menuLink = $('.menu-link');
var one = $('#one');
var two = $('#two');
var oneButton = $('#one-button');
var twoButton = $('#two-button');
var moreInfo = $('#more-info');
var sidemenu = $('#sidemenu');
var moreButton = $('#more-button');
var backgroundOverlay = $('.background-overlay');
var timer = $('#timer');
var social = $('.social');
var finishAnimations = $('#more-info, body, .body-bg, #one, #sidemenu');

// ----------------------------------------------------------------------- TIMER -----------------------------------------------------------------------------------------------------------------------------------

timer.countdown({
    date: '02/21/2017 17:00:00',
    offset: +2,
    day: 'Day',
    days: 'Days'
});

// ----------------------------------------------------------------------- INTRO ANIMATIONS -----------------------------------------------------------------------------------------------------------------------


function showOne() {
    one.find('.main-header').textillate();
    $('.intro-text h2').textillate();
    $('.logo, #one-button, #more-button, #one .separator').addClass('to-view');
    timer.find('p').addClass('to-view');
    $.each(timer.find('li'), function(i, el){
        setTimeout(function(){
            $(el).addClass('to-view');
        },100 + ( i * 240 ));
    });
    $.each(social.find('a'), function(i, el){
        setTimeout(function(){
            $(el).addClass('to-view');
        },100 + ( i * 240 ));
    });
}

setTimeout(function(){
    showOne();
},1000);


// -------------------------------------------------------------------SUBSCRIBE POP-UP WINDOW ------------------------------------------------------------------------------------------------------------------------

two.hide();
oneButton.on('click', function(e){
    backgroundOverlay.fadeIn(1000);
    two.show(function(){
        $(this).addClass('show-subscribe');
    })
});

twoButton.on('click', function(e){
    backgroundOverlay.fadeOut();
    two.removeClass('show-subscribe');
    setTimeout(function(){
        $(two).hide();
    },300);
});

// ----------------------------------------------------------------- BOOTSTRAP LIGHTBOX PLUGIN - ------------------------------------------------------------------------------------------------------------------

$('.grid-item a').imageLightbox();

// ----------------------------------------------------------------- SHOW MORE INFO- ------------------------------------------------------------------------------------------------------------------


moreButton.on('click', function(event){
    event.stopPropagation();
    social.hide();
    body.addClass('no-overflow');
    bodyBg.addClass('to-left-main');
    moreInfo.addClass('to-left');
    sidemenu.delay(500).fadeIn();
});



bodyBg.on('click', function(){
    social.show();
    bodyBg.removeClass('to-left-main').removeClass('no-overflow');
    moreInfo.removeClass('to-left').removeClass('to-left-main');
    menuLink.removeClass('active-link');
    finishAnimations.finish();
    body.removeClass('no-overflow');
    one.removeClass('to-left');
    sidemenu.hide();
});

$('.close-button').on('click touchend', function(){
    social.show();
    bodyBg.removeClass('to-left-main').removeClass('no-overflow');
    moreInfo.removeClass('to-left').removeClass('to-left-main');
    menuLink.removeClass('active-link');
    $(this).addClass('active-link');
    finishAnimations.finish();
    body.removeClass('no-overflow');
    one.removeClass('to-left');
    sidemenu.hide();
});


// ----------------------------------------------------------------------- SCROLL TO SECTION --------------------------------------------------------------------------------------------------------------------


$(menuLink).on('click touchend', function(e){
    e.preventDefault();
    $(finishAnimations).finish();
    var link = this.hash
    var elem = $(link);
    if(elem)
    {
        var main = $("#more-info #background"),
        t = main.offset().top;
        main.animate({scrollTop: elem.position().top - t}, 700, "swing");
    }
});
});
