$(document).ready(function(){
"use strict";
particlesJS("snowfall", {
  "particles": {
    "number": {
      "value": 500
    },
    "shape": {
      "type": "image",
      "image":{"src":"img/snowflake.png","width":52000,"height":36890}
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom-left",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      }
    },
    "modes": {
      "push": {
        "particles_nb": 20,
        "distance":200
      },
      "bubble": {
        "size": 4
      },
      "repulse": {
        "distance": 100
      }

    }
  }
});
});
