	$(document).ready(function() {
        "use strict";
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"./img/ken_burns/img_30.jpg",
        		"./img/ken_burns/img_28.jpg",
                "./img/ken_burns/img_54.jpg",
                "./img/ken_burns/img_39.jpg",
                "./img/ken_burns/img_65.jpg",
                "./img/ken_burns/img_67.jpg",           
                ],
	    	scale:1,
	    	duration:8000,
	    	fadeSpeed:1200,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
	    });
	});
    
