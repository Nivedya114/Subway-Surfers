var jaxonimg;
var trackimg;

function preload(){
  trackimg = loadImage("path.png");
  jaxonimg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  background("white");

  // Moving background
  track=createSprite(200,200);
  track.addImage(trackimg);
  track.velocityY = 4;
  track.scale=1.2;

  
  jaxon = createSprite(130,320,30,30);
  jaxon.addAnimation("running",jaxonimg);
  jaxon.scale = 0.1;
  
}

function draw() {
  background(0);
 jaxon.x=World.mouseX

  if(track.y>400){
    track.y=height/2
  }
 
  drawSprites();
}
