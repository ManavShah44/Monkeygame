var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleGround, groundImage;
var bananaGroup
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(50,160,5,5);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  obstacle = createSprite(50,160,5,5);
  
  
  ground = createSprite(200,300,600,10);
  ground.VelocityX=-4
  ground.x = ground.width /2;
 // invisibleGround = createSprite(200,190,600,10);
  //invisibleGround.visible = false;
  obstacleGroup=new Group()
  bananaGroup=new Group()
  

  
}


function draw() {
  background(500)
  spawnObstacles();
  Spawnbanana()
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       monkey.velocityY = monkey.velocityY + 0.8
  } 
  
  if(monkey.isTouching(obstacleGroup)){
     monkey.velocityX=0
     obstacleGroup.velocityX=0
     bananaGroup.velocityX=0
     ground.velocityX=0
  }
  
   
     
     
  
  
  stroke('white')
  textSize(20)
  fill("white")
  text('Score'+score,500,50)
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text('survival time'+survivalTime,100,50)
  
    
  
  if (ground.x < 0){
        ground.x = ground.width/2;}
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)

  drawSprites()
}

function spawnObstacles(){
 if (frameCount % 100 === 0){
   obstacle = createSprite(600,265,5,5)
   obstacle.velocityX = -6 
   
   obstacle.addImage('obstacle',obstacleImage);
    
    
   
              
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   
    obstacleGroup.add(obstacle);
 }
}

function Spawnbanana(){
  if(frameCount% 60 ===0){
    banana = createSprite(600,200,1,1);
    banana.addAnimation("banana", bananaImage);
    banana.y=Math.round(random(10,100))
    banana.scale = 0.1;
    bananaGroup.add(banana)
    banana.velocityX= -5
    
  }
}





