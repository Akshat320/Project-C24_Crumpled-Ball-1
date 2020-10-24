
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	box1 = new Dustbin(600,650,100,20);
	box2 = new Dustbin(545,610,20,100);
	box3 = new Dustbin(645,610,20,100);

	ball = new PaperBall(200,630,4);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  box1.display();
  box2.display();
  box3.display();
  ball.display();

  if (keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(ball.body, ball.body.position,{x:0.01,y:-0.12})
  }

  drawSprites();
 
}



