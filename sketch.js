var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody = [];
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxbody1,side1;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//rectMode(CENTER);
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxPosition=width/2-100
	boxY=610;
	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	  
	Engine.run(engine);
	
    textSize(20)
}


function keyPressed() {
	//Engine.update(engine);
 if (keyCode === DOWN_ARROW || keyCode === 32) {
    packageBody.push(new Package(width/2, 200 , 20 , 20));
	
  }
}


function draw() {
  
  background("yellow");
  text("Press down arrow key to release more packages",50,50)
  rectMode(CENTER);
  for(var i=0;i< packageBody.length;i++){
 	 packageBody[i].display();
  }  
  drawSprites();
 
}




