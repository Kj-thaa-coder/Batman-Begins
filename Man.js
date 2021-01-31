class Man {
    constructor(x,y,r)
    {
        

        
        
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, this.r/0.31, options)

World.add(world, this.body);

this.image = loadImage("walking_1.png");



}
display()
{


    
    var manpos=this.body.position;

    push()
    translate(manpos.x, manpos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image, 0,0, this.x=200, this.y=200, this.r= -0.0000000001)
    ellipseMode(RADIUS)
    strokeWeight(2);
    fill("orange")
    ellipse(0,0,this.r, this.r);
    pop()
    
    }




    

}











