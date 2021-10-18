var back_img
var Flower1,Flower2,Flower3
var Bomb,Pebble

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function preload(){

  back_img = loadImage("Images/Background.jpg")
  Bomb = loadImage("Images/Bomb.png")
  Flower1 = loadImage("Images/Flower1.png")
  Flower2 = loadImage("Images/Flower2.png")
  Flower3 = loadImage("Images/Flower3.png")
  Pebble = loadImage("Images/pebble.png")

}




function setup(){
  createCanvas(400,400);

  back=createSprite(200,200)
  back.addImage("back",back_img)
  back.scale=3

  flower=createSprite(200,200)
  flower.addImage("Flower1",Flower1)
  flower.scale=0.2

  
  redFlower=createSprite(300,200)
  redFlower.addImage("Flower2",Flower2)
  redFlower.scale=0.3

  
  whiteFlower=createSprite(100,200)
  whiteFlower.addImage("Flower3",Flower3)
  whiteFlower.scale=0.1

  
  bomb=createSprite(200,100)
  bomb.addImage("Bomb",Bomb)
  bomb.scale=0.2

  stone=createSprite(200,350)
  stone.addImage("pebble",Pebble)
  stone.scale=0.1
}

function draw() 
{
  background("white");
 drawSprites();
}

