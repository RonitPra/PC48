var court,court_img;
var ball,ball_img;
var topwall1,topwall2,leftwall,rightwall,bottomEdge;
var playerPaddle;
var Gamestate = "serve";



function preload(){
court_img = loadImage("court.jpeg");
ball_img = loadImage("ball.png");

}

function setup() {
  createCanvas(1000,800);
  
  // Walls
  topwall1 = createSprite(150,10,400,10);
  topwall1.shapeColor = "white";

  topwall2 = createSprite(800,10,400,10);
  topwall2.shapeColor = "white";
 
  leftwall = createSprite(10,400,10,800);
  leftwall.shapeColor = "white";

  rightwall = createSprite(990,400,10,800)
  rightwall.shapeColor = "white";

  bottomEdge = createSprite(500,790,1000,10);
  bottomEdge.visible = false;

  // Ball which will be used
  ball = createSprite(200,350);
  ball.scale = 0.08;
  ball.addImage(ball_img);

  ball.velocityX = 7;
  ball.velocityY = -5;

  // Player paddle to control the ball
  playerPaddle = createSprite(150,780,100,10);
  

  Gamestate = "serve";

  

  createEdgeSprites();
}

function draw() 
{
  background(court_img);

  textSize(20);

  if(Gamestate === "over"){
    fill ("Black")
    textSize(20);
    text("Game Over",140,180);
    
  }
 
  if(ball.y < 0 ){
    text("Good Job",140,180);
  }


  ball.bounceOff(topwall1);
  ball.bounceOff(topwall2);
  ball.bounceOff(leftwall);
  ball.bounceOff(rightwall);

  ball.bounceOff(playerPaddle);


  playerPaddle.x = World.mouseX;

  if(playerPaddle.x < 60){
    playerPaddle.x = 60;
  }

  if(playerPaddle.x > 980){
    playerPaddle.x = 980;
  }


  if(ball.isTouching(bottomEdge)){
    Gamestate = "over";
    reset();
  }

  drawSprites();
  
}

function mousePressed(){
  ball.velocityX = 4; 
  ball.velocityY = -3;

  gamestate = "play";
}

function reset(){
  ball.velocityX = 0;
  ball.velocityY = 0;


  ball.x = 200;
  ball.y = 370;
}



