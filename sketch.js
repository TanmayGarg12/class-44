var horse,horseImage;
var backgroundImage,BG;
var gameState="PLAY";
var Rock,RockImage;
var Hurdle,HurdleImage;

function preload(){
  horseImage=loadAnimation("horse1.png","horse2.png")
  backgroundImage=loadImage("track images.png")
  RockImage=loadImage("rock.png")
  HurdleImage=loadImage("hurdle.png")
}

function setup(){
  createCanvas(600,600)
  BG=createSprite(300,300)
  BG.addImage(backgroundImage)
  BG.scale=2.5;
  
  horse=createSprite(50,300)
  horse.addAnimation("horse",horseImage)
  horse.scale=0.5;

  rockGroup=createGroup()
}

function draw(){
  background("grey")
  createrock();
  createhurdle();
  if(gameState==="PLAY"){
    BG.velocity.x=-2
    if(BG.x<0){
      BG.x=300;
    }
  }
  if(keyDown("UP_ARROW")){
    horse.y=horse.y-10;
  }

  if(keyDown("DOWN_ARROW")){
    horse.y=horse.y+10;
  }

  drawSprites()
}

function createrock(){
  if(frameCount%80===0){
    Rock=createSprite(600,Math.round(random(50,550)))
    Rock.addImage(RockImage)
    Rock.velocityX=-2;
    Rock.scale=0.2;
  }

 
}

function createhurdle(){
  if(frameCount%80===0){
    Hurdle=createSprite(600,Math.round(random(50,550)))
    Hurdle.addImage(HurdleImage)
    Hurdle.velocityX=-2;
    Hurdle.scale=0.4;
  }
}