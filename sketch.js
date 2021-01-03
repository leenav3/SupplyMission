var helicopterIMG, helicopter, package,packageIMG;
var ground,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine=Engine.create();
	world=engine.world;
	package = Bodies.rectangle(width/2,100,20,20,{restitution:0.5,isStatic:true});
	World.add(world,package);
	ground=Bodies.rectangle(width/2,height,width,20,{isStatic:true})
	World.add(world,ground)

	box = new Box(width/2,height-20,200,20);
	Engine.run(engine);
}

function draw() {
  background(0);
  imageMode (CENTER)
  box.display();
 image(packageIMG,package.position.x,package.position.y,20,20)
 image(helicopterIMG, width/2, 100,200,100); 
 
 rect(ground.position.x,ground.position.y,width,20);
 
}

function keyPressed(){
	console.log(keyCode)
	if(keyCode === 32){
		Matter.Body.setStatic(package,false);
	
	}
	
}