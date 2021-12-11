var board, boardImg;
var angle =0;
var engine, world;
var ball1;
var bowl, bowlImg;
var stick1;
var score;
var i = 0.1;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var stickAngle;


function preload(){
  boardImg = loadImage("images/board.png");
  bowlImg = loadImage("images/bowl.png");
}
function setup() {
  
  createCanvas(1000,1000);

  engine = Engine.create();
  world = engine.world;

  stickAngle = PI;

  board = createSprite(470, 300, 50, 50);
  board.addImage(boardImg);
  
  bowl = createSprite(500, 550, 50, 50);
  bowl.addImage(bowlImg);

  stick1 = new Horizontalstick(500,300,200,24,stickAngle);
  ball1 = new Ball(550,0);

  var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Matter.Render.run(render);
  
}

function draw() {
  background(255); 

  

  Engine.update(engine);



  
  
  // console.log("angle"+stick1.body.angle);
    // imageMode(CENTER);
    // image(boardImg, 400, 200, 50, 50);


  // if(keyDown(RIGHT_ARROW)){
    
  //   push();

  //   translate(400, 200);

  //   rotate(angle = angle + 0.05);
  //   // imageMode(CENTER);
  //   // image(boardImg, 0, 0, 50, 50);
  //   board.addImage(boardImg);
  //   pop();
  // }
  // if(keyDown(LEFT_ARROW)){
  //   rotate(angle = angle-0.5);
  // }

  drawSprites();
  stick1.display();
  ball1.display();
 
  
}