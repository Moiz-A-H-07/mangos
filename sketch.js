
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,tree;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stone=new Stone(240,580,60);
   tree=new Tree(1000,550,400,400);
   boy=new Boy(300,650,200,300)
  // mango1=new Mango(1100,450,20);
 mango1 = new Mango(1100,600,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy.display();
 stone.display();
 tree.display();
 mango1.display();
// boy.display();
}



