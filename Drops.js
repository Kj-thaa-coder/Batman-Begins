class Drops {
    constructor(x,y,r)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, this.r/1.2, options)

World.add(world, this.body);




}
display()
{


    
    var droppos=this.body.position;

    push()
    translate(droppos.x, droppos.y);
    rotate(this.body.angle)
    ellipseMode(RADIUS)
    strokeWeight(3);
    fill("lightblue")
    ellipse(0,0,this.r, this.r);
    pop()
    
    }
    
    update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0, 1500), y:random(0, 650)});
        }
      }
     
    
}










