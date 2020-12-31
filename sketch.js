
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob, rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  roof = new Roof();
  bob = new Ball(280,450);
  bob2 = new Ball(340,450);
  bob3 = new Ball(400,450);
  bob4 = new Ball(460,450);
  bob5 = new Ball(520,450);
  rope = new Rope(bob.body,roof.body,-100)
  rope2 = new Rope(bob2.body,roof.body,-50)
  rope3 = new Rope(bob3.body,roof.body,0)
  rope4 = new Rope(bob4.body,roof.body,+50)
  rope5 = new Rope(bob5.body,roof.body,+100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 roof.display();
 bob.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY}) 
 }

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob.body, bob.body.position,{x:-100,y:50})
	}
}

