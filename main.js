var canvas = new fabric.Canvas('Knockout')

ball_x=25;
ball_y=0;
hole_x=250;
hole_y=1000;


block_image_width = 5;
block_image_height = 5;

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_x,
			left:ball_y
		});
		canvas.add(ball_obj);
		});
}
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_x,
			left:hole_y
		});
		canvas.add(hole_obj);
		});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You have hit the Goal!!! But soon, there will be more holes to come. Hope you're ready!!!";
		document.getElementById("Knockout").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
			ball_x = ball_x - block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When right Arrow is pressed, X =" + ball_x + ", Y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
	}

	function down()
	{
		 if (ball_x <=1050)
		 {
			ball_x = ball_x + block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When right Arrow is pressed, X =" + ball_x + ", Y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_y >5)
		{
			ball_y = ball_y - block_image_width;
			console.log("block image width =" + block_image_width);
			console.log("When right Arrow is pressed, X =" + ball_x + ", Y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		ball_y = ball_y + block_image_width;
		console.log("block image width =" + block_image_width);
		console.log("When right Arrow is pressed, X =" + ball_x + ", Y =" + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
	
}

