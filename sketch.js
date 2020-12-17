
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball;
var dustbin1;
var ground;


function setup() {
	var canvas = createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ball = new Ball(200,450,40)
	ground= new Ground(800, 690 , 1600, 10)
	dustbin1= new dustbin(1200, 650)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	  Engine.run(engine);
      //Render.run.(render)
}


function draw() {
	
  background(0);

  ground.display();
  ball.display();
 dustbin1.display();
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}


