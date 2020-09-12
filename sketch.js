
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var stone,sling;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,670,800,20);
	tree=loadImage('tree.png');
	boy=loadImage('boy.png');
	mango1=new Mango(650,300,50);
	mango2=new Mango(560,300,50);
	mango3=new Mango(600,370,50);
	mango4=new Mango(510,360,50);
	mango5=new Mango(700,370,50);
	mango6=new Mango(750,420,50);
	mango7=new Mango(490,420,50);
	mango8=new Mango(640,420,50);
	mango9=new Mango(570,440,50);

	stone=new Stone(150,520,50);

	sling=new SlingShot(stone.body,{x:150,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  image(boy,120,450,boy.width/9,boy.height/9)
  image(tree,400,250,tree.width/3,tree.height/3);

  /*if(getDistance(stone.x,stone.y,mango1.x,mango1.y)< stone.r+ mango1.r){
	Matter.Body.setStatic(mango1.body,false);
  }

  if(getDistance(stone.x,stone.y,mango2.x,mango2.y)< stone.r+ mango2.r){
	Matter.Body.setStatic(mango2.body,false);
  }

  if(getDistance(stone.x,stone.y,mango3.x,mango3.y)< stone.r+ mango3.r){
	Matter.Body.setStatic(mango3.body,false);
  }

  if(getDistance(stone.x,stone.y,mango4.x,mango4.y)< stone.r+ mango4.r){
	Matter.Body.setStatic(mango4.body,false);
  }

  if(getDistance(stone.x,stone.y,mango5.x,mango5.y)< stone.r+ mango5.r){
	Matter.Body.setStatic(mango5.body,false);
  }

  if(getDistance(stone.x,stone.y,mango6.x,mango6.y)< stone.r+ mango6.r){
	Matter.Body.setStatic(mango6.body,false);
  }

  if(getDistance(stone.x,stone.y,mango7.x,mango7.y)< stone.r+ mango7.r){
	Matter.Body.setStatic(mango7.body,false);
  }

  if(getDistance(stone.x,stone.y,mango8.x,mango8.y)< stone.r+ mango8.r){
	Matter.Body.setStatic(mango8.body,false);
  }

  if(getDistance(stone.x,stone.y,mango9.x,mango9.y)< stone.r+ mango9.r){
	Matter.Body.setStatic(mango9.body,false);
  }*/


  /*detectollision(stone.mango1);
  detectollision(stone.mango2);
  detectollision(stone.mango3);
  detectollision(stone.mango4);
  detectollision(stone.mango5);
  detectollision(stone.mango6);
  detectollision(stone.mango7);
  detectollision(stone.mango8);
  detectollision(stone.mango9);*/
  

  drawSprites();
 
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  sling.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

 /*function getDistance(x1,y1,x2,y2){
	var xdistance=x2-x1;
	var ydistance=y2-y1;

	return Math.sqrt(Math.pow(xdistance,2)+Math.pow(ydistance,2));
}*/

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:150,y:520})
		sling.attach(stone.body);
	}
}



/*function detectollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}
*/

