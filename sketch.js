const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground, pig1, log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    box3 = new Box(700,220,70,70);
    box4 = new Box(920,220,70,70);
    box5 = new Box(805,180,70,70);
    ground=new Ground(600,height,1200,30);
    pig1 = new Pig(810,320,50,50);
    pig2 = new Pig(810,240,50,50)
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,200,300,PI/2); 
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    Bird1 = new Bird(200,200,40,40)  
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    Bird1.display();
}

