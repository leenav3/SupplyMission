class Package{
    constructor(x,y,width,height){
        var options_package={
            restitution:1,
            friction:0.5,
            density:10.0

        }
        x=x+ random (5,10)
       this.body=  Bodies.rectangle(x,y,width,height,options_package);
        World.add(world, this.body);
        this.width=width;
        this.height=height;
        this.image = loadImage("package.png");
    }


    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    console.log(angle);
   // pos.x=mouseX;
   // pos.y=mouseY;
   
    push ();
    imageMode (CENTER);
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate (angle);
   // fill ("yellow");
   // rect(pos.x,pos.y, this.width,this.height);
    
   
    packageSprite=createSprite(0,0,this.width,this.height);
    //packageSprite.addImage("p1",this.image);
    image (this.image,0,0,this.width,this.height);
    packageSprite.scale=0.2
    pop ();
    //Matter.Body.setStatic(this.body,false);
   
    }

};