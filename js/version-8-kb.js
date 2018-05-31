	$(document).ready(function() {
        "use strict";
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"./img/ken_burns/img_6.jpg",
        		"./img/ken_burns/img_46.jpg",
                "./img/ken_burns/img_47.jpg",
                "./img/ken_burns/img_14.jpg",
                "./img/ken_burns/img_17.jpg",
                "./img/ken_burns/img_15.jpg",           
                ],
	    	scale:1,
	    	duration:8000,
	    	fadeSpeed:1200,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
	    });
	});
    
