
function preload(){
  //pre-load images
  ground.addImage("ground",groundImage);
  ground.X=ground.width/2;
  Runner_running=loadAnimation("")
  Runner-1.png
  Runner-2.png
  Runner.addAnimation("running,Runner_running")
  Runner.scale=1.5;
  }

function setup(){
  createCanvas(400,400);
  //create sprites here
  //create a Runner sprite
  Runner=createSprite(50,380,20,50);
}

function draw() {
  //create a ground sprite
  ground=createSprite(200,180,400,20);
  ground.addImage("ground,groundImage");
  ground.x=ground.width/2;
  background(220);
groundvelocityX=-2;
//creating invisible ground
Invisibleground=groundSprite(200,390,400,10);
}
functionDraw(){
  //set backround color
  backround(220);
  color=Blue 
  //add gravity
  Runner.velocity=Runner.velocity+1.5
console.log(ground.X);
if(ground.x<0)
{
  ground.x=ground.width/2;
}
varRunner,RunnerRunning;
vargroundImage;

// jump when spacekey is pressed
if(keyDown("space"))
{
Runner.velocityY=-10
Runner.velocityY=Runner.velocityY+1.5;
//stop Runner to falling down.
Runner.collide(ground)