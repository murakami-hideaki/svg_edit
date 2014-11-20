var paper;
var drawFlag = false;
var oldX = 0;
var oldY = 0;
var can;


$(document).ready(function(){

   	paper = Raphael("svg", 480, 640);
   	paper.image("doc/sample.jpg", 0,0, 480,640);

	$("#svg").mouseup(function(e){
		drawFlag = false;
	})
	$("#svg").mousedown(function(e) {
		drawFlag = true;
		var x = e.offsetX;
		var y = e.offsetY;
		oldX = x;
		oldY = y;
	})

	$("#svg").mouseleave(function(e) {
		draw(e);
		drawFlag = false;
	})

	$("#svg").mousemove(function(e) {
		$("#debugtext").html("Offset:" + e.offsetX);
		draw(e);
	})
})

function draw(e) {
	if(!drawFlag) return;

	var x = e.offsetX;
	var y = e.offsetY;

    paper.path("M" + oldX + " " + oldY + "L" + x + " " + y);
	oldX = x;
	oldY = y;
}
