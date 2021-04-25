var move, fix;
function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 100, 80, 50);
  fix.velocityY = 1;
  move = createSprite(400, 200, 50, 50);
  move.velocityY = -1;
  fix.shapeColor = "green";
}
function draw() {
  background(255,255,255);  
  //move.x = World.mouseX;
  //move.y = World.mouseY;

  
  if(isTouch(move, fix)){
    move.shapeColor = "red";

}
else{
  move.shapeColor = "black";


}
  bounce(move, fix);
  drawSprites();
}








