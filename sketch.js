
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  roofObject=new roof(400,150,455,25)
  bobObject1 = new bob(220,550,80)
  bobObject2 = new bob(300,550,80)
  bobObject3 = new bob(380,550,80)
  bobObject4 = new bob(460,550,80)
  bobObject5 = new bob(540,550,80)

  

  Engine.run(engine);



}


function draw() {
  rectMode(CENTER);
  background("grey");

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  drawSprites();
 
}



