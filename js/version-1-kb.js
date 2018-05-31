	$(document).ready(function() {
        "use strict";
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"./img/ken_burns/img_4.jpg",
        		"./img/ken_burns/img_5.jpg",
                "./img/ken_burns/img_9.jpg",
                "./img/ken_burns/img_27.jpg",
                "./img/ken_burns/img_17.jpg",
                "./img/ken_burns/img_15.jpg",           
                ],
	    	scale:1,
	    	duration:8000,
	    	fadeSpeed:1200,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
	    });
	});
    
