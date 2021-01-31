const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 

var man
var drops
var maxDrops = 1000;

function preload(){
    
}

function setup(){
    createCanvas(1500, 720);
    engine = Engine.create()
    world = engine.world

    man = new Man(720,640,25)
    drops = []
    
  
  
    for(var i=0;i<maxDrops; i++){
        drops.push(new Drops(random(0,1500), random(0,500),5))
    }








    
}

function draw(){
    Engine.update(engine)
    rectMode(CENTER);
    background("black");
    man.display()
for(var i=0;i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
} 
