var monkey;
var fruit ,obstacle;
var FoodGroup, obstacleGroup
var score = 0;
function preload(){
monkeyrunning =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
backgrounda = loadAnimation("background 48.jpg");
backgroundc = loadAnimation("background49.jpg");
obstaclea = loadAnimation("obstacle.png");
}
function setup() {
backgroundb = createSprite(200,200,20,20);
backgroundb.addAnimation('b' , backgrounda);
backgroundb.scale = 1.4;
backgroundb.velocityX = -4;
backgroundb.visible = false;
backgroundd = createSprite(200,200,20,20);
backgroundd.addAnimation('b' , backgroundc);
backgroundd.scale = 0.8;
backgroundd.visible = true;
monkey = createSprite(90,180,20,20);
monkey.addAnimation('m',monkeyrunning);
monkey.scale = 0.1;
ground = createSprite(200,350,400,10);
ground.visible = false;
fruit = createSprite(120,260,20,20);
fruit.visible = false;
obstacleb = createSprite(130,340,20,20);
obstacleb.debug = false;
obstacleb.visible = false;
}
function draw() {
background('white');
  if(keyDown("space") && monkey.y > 100){
    monkey.velocityY = -9;
    backgroundd.visible = false;
    backgroundb.visible = true;
  }
  monkey.velocityY = monkey.velocityY+1;
  monkey.collide(ground);
  monkey.collide(obstacleb);
  if(backgroundb.x <= 10){
    backgroundb.x = 200;
  }
  if(backgroundb.visible == true){
  if(frameCount%50 == 0){
    var x = random(410,430);
    var y = random(120,220);
    fruit = createSprite(x,y,20,20);
    fruit.addImage(bananaImage);
    fruit.scale = 0.1;
    fruit.velocityX = -7;
    fruit.debug = false;
    fruit.setCollider('rectangle',0,0,550,430,0);
    fruit.lifetime = 800;
}
  if(frameCount%150 == 0){
    var x1 = random(410,430)
    obstacleb = createSprite(x1,320,20,20);
    obstacleb.addAnimation('o', obstaclea);
    obstacleb.scale = 0.2;
    obstacleb.visible = true;
    obstacleb.debug = false;
    obstacleb.velocityX = -4;
    obstacleb.lifetime = 800;      obstacleb.setCollider('rectangle',5,0,370,370,0);
  }
  score = score+0.1;
}
  if(monkey.isTouching(fruit)){
    fruit.destroy();
  }
drawSprites(); 
textSize(16);
textFont('Arial Black');
fill('white');
text('SURVIVAL DURATION - ' + Math.round(score), 100,30);

textSize(17);
textFont('Arial Black');
fill('yellow');
text('PRESS SPACE TO START', 90,160);
  
textSize(17);
textFont('Arial Black');
fill('yellow');
text("BEWARE OF THE ROCKS :)", 80,370);
}