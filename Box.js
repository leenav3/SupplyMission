class Box{
    constructor(x,y,w,h){
        this.body1=Bodies.rectangle(x,y,w,h);
        World.add(world,this.body1);

        this.body2=Bodies.rectangle(x-w/2,y,20,100);
        World.add(world,this.body2)

        this.body3=Bodies.rectangle(x+w/2,y,20,100);
        World.add(world,this.body3)
    }

    display(){
        var pos1=this.body1.position;
        var pos2=this.body2.position;
        var pos3=this.body3.position;
        push ()
        rectMode(CENTER);
        fill ("red");
        rect ( pos1.x,pos1.y,200,20);
        rect ( pos2.x,pos2.y,20,100);
        rect ( pos3.x,pos3.y,20,100);
        pop ()
    }
}