var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(100,300,40,60);
}

function draw() 
{
  background(rgb(102, 204, 255));
  rect(200,200,10,3);
  drawSprites();
}