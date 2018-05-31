	$(document).ready(function() {
        "use strict";
	    $('#kenburns-slideshow').Kenburns({
	    	images: [
	    		"./img/ken_burns/bg.jpg",
        		"./img/ken_burns/bg_15.jpg",
                "./img/ken_burns/img_64.jpg",
                "./img/ken_burns/img_68.jpg",
                "./img/ken_burns/img_50.jpg",
                "./img/ken_burns/img_52.jpg",           
                ],
	    	scale:1,
	    	duration:8000,
	    	fadeSpeed:1200,
	    	ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
	    });
	});
    
