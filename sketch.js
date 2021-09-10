const Engine = Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world
var crate1,ground

function preload(){

bgImg=loadImage("bg.png")
blueStarImg=loadImage("bluestar.png")
redStarImg=loadImage("redstar.png")
landImg=loadImage("land.png")
lavaImg=loadImage("Lava.png")
endImg=loadImage("end.png")
fireboyImg=loadImage("Fireboy.png")
watergirlImg=loadImage("watergirl.png")
waterImg=loadImage("water.png")
}


function setup(){
    createCanvas(1360,650)
background(bgImg)

engine=Engine.create()
world=engine.world


ground=new Ground(700,540,1400,150)
crate1=new Crate(1100,450,70,70)
}

function draw(){

Engine.update(engine)

ground.display()
crate1.display()




drawSprites()
    
}