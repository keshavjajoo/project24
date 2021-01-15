
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(600,655,10,70);
	dustbin2 = new Dustbin(400,655,10,70);
	dustbin3= new Dustbin(500,687,195,10)
	paper=new paper(50,50,10,10)
	ground = new Ground(600,height,1600,20)

 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
		}
}



