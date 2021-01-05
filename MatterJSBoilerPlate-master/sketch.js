
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,paper,ground,body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var b
	{
		isStatic = true
	}
	bin = new Bin(720,390,100,10);
	paper = new Paper(100,300,10);
	ground = Bodies.rectange(width/2,400,20,10,b)
	World.add(world,ground);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.diplay();
  paper.diplay();
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyFroce(paper.body,paper.body.position,{x = 12 ,y = -13})
}
}
