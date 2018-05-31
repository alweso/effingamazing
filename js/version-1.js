$(document).ready(function(){
      "use strict";
      var smokyBG = $('#wavybg-wrapper').waterpipe({
            gradientStart: '#ffffff',
            gradientEnd: '#72dee8',
            smokeOpacity: 0.04,
            numCircles: 2,
            maxMaxRad: 500,
            minMaxRad: 700,
            minRadFactor: 0,
            iterations: 8,
            drawsPerFrame: 2,
            lineWidth: 1,
            speed: 0.2,
            bgColorInner: "#000000",
            bgColorOuter: "#000000"
      });
});
