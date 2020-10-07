class Mango{
    constructor(x,y,raduis){
        var options={
            isStatic:true,
        restitution:0,
        friction:1
    }
        this.x=x;
        this.y=y;
        this.raduis=raduis;
        this.body=Bodies.circle(x,y,raduis,options);
        this.image=loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER); 
        
        //rect(0,0,this.width, this.height); 
        imageMode(CENTER)
        image(this.image,0,0,this.raduis,this.raduis)
        pop() 
    }
}