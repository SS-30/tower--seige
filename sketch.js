const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	block1=new Block(600,400,50,50)
	block2=new Block(650,400,50,50)
	block3=new Block(700,400,50,50)
	block4=new Block(630,350,50,50)
	block5=new Block(670,350,50,50)
	block6=new Block(650,300,50,50)
	block7=new Block(900,400,50,50)
	block8=new Block(950,400,50,50)
	block9=new Block(1000,400,50,50)
	block10=new Block(930,350,50,50)
	block11=new Block(970,350,50,50)
	block12=new Block(950,300,50,50)
	ball=new Polygon(200,150,10,5)
    slingshot = new Rope(ball.body,{x:500, y:200});
    ground1=new Ground(650,450,200,10)
    ground2=new Ground(950,450,200,10)
    ground3=new Bottom(600,680,1200.20)


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  block1.display()
  block2.display()
  block3.display()
  fill("blue")
  block4.display()
  block5.display()
  fill("green")
  block6.display()
  fill("red")
  block7.display()
  block8.display()
  block9.display()
  fill("blue")
  block10.display()
  block11.display()
  fill("green")
  block12.display()
  ball.display()
  fill("pink")
  slingshot.display()
  fill("yellow")
  ground1.display()
  ground2.display()
  ground3.display()
  drawSprites();
 
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon)
    }
}
