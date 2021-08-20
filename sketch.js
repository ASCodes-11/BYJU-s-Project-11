var road;
var boy




function preload(){
  //pre-load images
  Road = loadImage("path.png");
  Boy = loadAnimation("Runner-1.png", "Runner-2.png")
}


function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200, 200);
  road.addImage(Road);
  road.velocityY = 4;
  road.scale = 1.2;

  boy = createSprite (200, 300);
  boy.addAnimation("Runner", Boy);
  boy.scale = 0.07;
  
}


function draw() {

  if(road.y>400) {
  road.y = height/4;
  }

  boy.x = World.mouseX;
  boy.collide(leftEdge);
  
  background(400, 400);
  drawSprites();
}
