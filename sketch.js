var score =0; 
var gun,bluebubble,redbubble, bullet, backBoard; 
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg; 
var redBubbleGroup, redBubbleGroup, bulletGroup; 
var life =3; 
var gameState=1;
var bubble;

function preload(){ 
  gunImg = loadImage("gun1.png") 
  blastImg = loadImage("blast.png") 
  bulletImg = loadImage("bullet1.png") 
  blueBubbleImg = loadImage("waterBubble.png") 
  redBubbleImg = loadImage("redbubble.png") 
  backBoardImg= loadImage("back.jpg") 
} 

function setup() { 
  createCanvas(800, 800); 
  backBoard= createSprite(50, width/2, 100,height); 
  backBoard.addImage(backBoardImg) 
  gun= createSprite(100, height/2, 50,50); 
  gun.addImage(gunImg);
  gun.scale=0.2; 
  
  blueBubbleGroup = createGroup(); 
  redBubbleGroup = createGroup(); 

  heading = createElement("h1");
  scoreBoard = createElement("h1");
  lifeScore = createElement("h1");

  bulletGroup = new Group();
  blueBubbleGroup = new Group();
  redBubbleGroup = new Group();
} 

function draw() { 
  background("#BDA297"); 
  //display Score and number of lifes 
  if(gameState===1){ 
    gun.y=mouseY 
    //shootBullet(); 
    drawBlueBubble();
    drawRedBubble();
    handleBubbleCollision();
    scoreBoard.html("Score: " +score);
    scoreBoard.style('color:red');
    scoreBoard.position(width-200,20);
    lifeScore.html("Life: " +life);
    lifeScore.style('color:red');
    lifeScore.position(200,20);
    drawSprites(); 
  } 
} 

function keyPressed(){ 
  if(keyCode===32){ 
    bullet = createSprite(100, gun.y, 10, 10); 
    bullet.addImage("blt",bulletImg); 
    bullet.scale = 0.2; 
    bullet.velocityX = 5 
  } 
}

function drawBlueBubble(){
  if(frameCount%100===0){
    bubble = createSprite(width+200, random(20, 780),10,10);
    bubble.velocityX = -5;
    bubble.addImage("bubblue", blueBubbleImg);
    bubble.addImage("blast", blastImg);
    bubble.changeImage(bubblue);
    bubble.scale = 0.08;
    bubble.lifetime = 300;
    blueBubbleGroup.add(bubble);
  }
}

function drawRedBubble(){
  if(frameCount%130===0){
    redBubble = createSprite(width+200, random(20, 780),10,10);
    redBubble.velocityX = -5;
    redBubble.addImage("bubred", redBubbleImg);
    redBubble.scale = 0.08;
    redBubble.lifetime = 300;
    redBubbleGroup.add(redbubble);
  }
}

function handleBubbleCollision(blueBubbleGroup){
  if(life > 0){
    score = score + 1;
  }
  bubble.changeImage(blast);
  bubble.lifetime = 20;
  blueBubbleGroup.destroyEach();
  bullet.destroy();
}
