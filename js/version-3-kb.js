	$(document).ready(function() {
        "use strict";
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"./img/ken_burns/img_20.jpg",
        		"./img/ken_burns/img_13.jpg",
                "./img/ken_burns/img_25.jpg",
                "./img/ken_burns/img_36.jpg",
                "./img/ken_burns/img_39.jpg",
                "./img/ken_burns/img_77.jpg",           
                ],
	    	scale:1,
	    	duration:8000,
	    	fadeSpeed:1200,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
	    });
	});
    
