var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight + 50;

var c = canvas.getContext('2d');

var count = 0;
var mag = 1;
var red=255,green=0,blue=0;
var radius = .2;



function animate(){
    requestAnimationFrame(animate);
    var rgb = '';
    if(red > 0 && blue == 0){
        red--;
        green++;
    }
    if(green > 0 && red == 0){
        green--;
        blue++;
    }
    if(blue > 0 && green == 0){
        red++;
        blue--;
    }
    rgb = "rgb("+ (255-red) +","+ (255-green) +","+(255-blue) + ")";
     



    if(count < 500){
        var a = count * 137.5;
        var r = mag * Math.sqrt(count);
        var x = r * Math.cos(a) + canvas.width/2;
        var y = r * Math.sin(a) + canvas.height/2;
        var ball = new Ball(radius,x,y,rgb);
        ball.draw();
        mag+=0.09;
        radius+=0.1;
        
    }
    count++;
    if(count == 501){
        c.fillStyle = 'white';
        c.font = "100px helvetica";
        c.fillText("Davis", canvas.width/2 -350,canvas.height/2 + 20);
        c.fillText("Gibson", canvas.width/2 + 70, canvas.height/2 + 20);
    }

}
animate();



function Ball(radius, xVal, yVal, col){
	this.r = radius;
	this.x = xVal;
	this.y = yVal;
	this.draw = () =>{
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		c.fillStyle = col;
		c.fill();
		c.closePath();
	}
}
