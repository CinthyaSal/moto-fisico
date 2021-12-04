const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var objeto;



function setup() {
  var canvas= createCanvas(500,500);
  engine=Engine.create();//Aqui creo al motor.
  world=engine.world;
  objeto=Bodies.rectangle(200,200,50,50);

  World.add(world,objeto);
  console.log(objeto);
  console.log(objeto.type);
  console.log(objeto.position.x);
  console.log(objeto.position.y);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(objeto.position.x,objeto.position.y,50,50);
  

  //drawSprites();
}