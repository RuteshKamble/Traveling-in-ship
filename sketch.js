var sea,ship;
var seaImg,shipImg;

function preload(){
   

  shipImg = loadAnimation("ship-1.png","ship-2.png");
 
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = 5;
  sea.scale=0.3;
sea.x=0
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("Running",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  

  
  if(sea.x > 600){
  sea.x=0
  }
    
  

 
  drawSprites();
}
