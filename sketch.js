var ground;
var humans,humansImg;
var coronavirus,coronavirusImg;
var bat,batImg,batGroup;
var vaccine,vaccineImg,vaccineGroup;
var backgr,backImg;

var gameOver;
var score=0;


function preload(){
  humansImg=loadImage("download.png")
 
  coronavirusImg=loadImage("virus.jfif");
  
  batImg=loadImage("bat.jpg");
  
  vaccineImg=loadImage("vaccine.jpg");
  
  backImg=loadImage("background.png");
}

function setup() {
 createCanvas(800,500);
  
 ground=createSprite(250,495,10000,10);
 ground.velocityX=-2;
 ground.x=ground.width/2;
 ground.visible=false;
 
  
  
  

 backgr=createSprite(800,500);
  backgr.addImage(backImg);
   backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  backgr.scale=2;
  
  
 humans=createSprite(200,450,100,100);
 humans.addImage(humansImg);
  
    coronavirus=createSprite(60,300,100,100);
    coronavirus.addImage(coronavirusImg);
  coronavirus.scale=0.5;
  
  
  batGroup=new Group();
  vaccineGroup=new Group();
  
  score=0;
}

function draw() {
 background("blue");
  
  if(ground.x<0){
    ground.x=800;
  }
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
if(vaccineGroup.isTouching(humans)){
  vaccineGroup.destroyEach();
  //backgr.x=backgr.x+1;
  score=score+1;
}
  
  if(keyDown("space")){
   humans.velocityY=-10;
 }
  humans.velocityY=humans.velocityY+0.7;
   
  humans.collide(ground);
  bats();
  vaccines();
  
    if(batGroup.isTouching(humans)){
    batGroup.destroyEach();
    batGroup.setVelocityXEach=0;
    vaccineGroup.destroyEach();
    vaccineGroup.setVelocityXEach=0;
      backgr.velocityX=0;
    }
  drawSprites();
      
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}
function bats(){
   
 if(frameCount%150===0){
  bat=createSprite(800,440);
 bat.addImage(batImg);
   bat.scale=0.15;
  bat.velocityX=-5;
  bat.lifetime=150;
  batGroup.add(bat);
}
  }
function vaccines(){
   
 if(frameCount%300===0){
  vaccine=createSprite(800,195);
  vaccine.addImage(vaccineImg);
   vaccine.scale=0.15
  vaccine.velocityX=-7;
  vaccine.lifetime=150;
  vaccineGroup.add(vaccine);
}
  }