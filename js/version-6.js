$(document).ready(function(){
    "use strict";
    particlesJS("particles-js", {"particles":{"number":{"value":134,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"image","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/fish2.png","width":600,"height":400}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":19.99200319872052,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":3.1987205117952833,"direction":"left","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

    var canvas, c, w, h,
    twoPI = Math.PI * 2,
    mX, mY,
    resize = true,
    mousemove = true,
    per = { x: 0, y: 0 },
    mtn, trackmouse = false;

    window.onload = function(){
        canvas = document.createElement('canvas')
        var body = document.getElementById('body');
        canvas.className = "rays";
        w = canvas.width = window.innerWidth - 40;
        h = canvas.height = window.innerHeight - 40;
        c = canvas.getContext('2d');
        document.body.appendChild(canvas);

        !resize || window.addEventListener('resize', function(e){ w = canvas.width = window.innerWidth - 40; h = canvas.height = window.innerHeight - 40; });
        !mousemove || body.addEventListener('mousemove', function(e){
            trackmouse = true;
            mX = e.pageX-20; mY = e.pageY-20;
            per = { x: mX, y: mY };
        });

        per = { x: w/2, y: h/2, step: 1 }
        mtn = new Mountains(300,"10");
        window.setInterval(animate,17);
    }

    function animate(){
        if(!trackmouse){
            per.x += per.step;
            if(per.x > w)
                per.step = -per.step;
            if(per.x < 0)
                per.step = -per.step;
        }

        c.globalCompositeOperation = "source-over";
        c.fillStyle = "rgba(4,66,90,0.1)";
        c.fillRect(0,0,w,h);
        mtn.draw();
    }

    function newGradient(gradient){
        var grad;
        switch(gradient.type){
            case "radial":
            grad = c.createRadialGradient(gradient.x1, gradient.y1, gradient.r1, gradient.x1, gradient.y1, gradient.r2);
            break;
            case "linear":
            grad = c.createLinearGradient(gradient.x1, gradient.y1, gradient.x2, gradient.y2);
            break;
        }

        for(var i = 0; i < gradient.stops.length; i++){
            grad.addColorStop(gradient.stops[i].s, gradient.stops[i].c);
        }

        return grad;
    }

    function Mountains(peaks,seed){
        var points = [];
        this.init = function(){
            var step = w / peaks,
            y = 0;

            points.push({x: 0, y: y});
            for(var i = 1; i <= peaks; i++){
                y = y + (Math.random() * 20)-10;
                points.push({x: i * step, y: y});
            }
        };
        this.draw = function(){
            c.save();
            c.fillStyle = "rgba(2,40,54,1)";
            c.beginPath();
            c.moveTo(points[0].x, h/2-points[0].y);
            for(var p = 1; p < points.length; p++){
                c.lineTo(points[p].x, h/2 - points[p].y);
            }
            c.lineTo(w,h);
            c.lineTo(0,h);
            c.closePath();
            c.fill();
            c.restore();

            c.globalCompositeOperation = "lighter";                         
            c.fillStyle = "rgba(30,30,20,0.1)";
            for(var p = 0; p < points.length-1; p++){
                var va1 = Math.atan2(h/2-points[p].y - per.y, points[p].x - per.x),
                va2 = Math.atan2(h/2-points[p+1].y - per.y, points[p+1].x - per.x);

                c.beginPath();
                c.moveTo(points[p  ].x, h/2-points[p].y);
                c.lineTo(points[p+1].x, h/2-points[p+1].y);
                c.lineTo(points[p+1].x + Math.cos(va2)*w, h/2-points[p+1].y + Math.sin(va2)*w);
                c.lineTo(points[p  ].x + Math.cos(va1)*w, h/2-points[p].y + Math.sin(va1)*w);
                c.closePath();
                c.fill();
            }
        };

        this.init();

    }

});