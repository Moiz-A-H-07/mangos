class Stone {
    constructor(x,y,raduis) {
        var options={ 
            isStatic:true ,
            restitution:0,
            friction:1,
            density:1.2
        } 
        this.x=x; 
        this.y=y; 
        this.raduis=raduis 
        this.body=Bodies.circle(x, y, raduis, options);
        this.image=loadImage("stone.png");
         World.add(world, this.body);
         
       }
     
       display(){
       var pos =this.body.position;
push()
translate(pos.x, pos.y);
rectMode(CENTER); 

//ellipse(0,0, this.raduis, this.raduis); 
imageMode(CENTER)
image(this.image,0,0,this.raduis,this.raduis)
pop() 
       }
       
    }