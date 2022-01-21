const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world, engine;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

	// Crie a bola aqui

	//Crie o chão e as paredes esquerda e direita (USANDO A CLASSE ground.js)

}

function draw() {
  rectMode(CENTER);
  background(0);

 // desenha a bola aqui (ellipse...)
 
 // desenhe o chão e paredes aqui (display)
 
}

// SE precionar a tela UP -> deve ser aplicada uma força na bola
function keyPressed() {
  	if (keyCode === UP_ARROW) {
		// Aplique a força aqui
  	}
}