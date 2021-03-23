var cat,catImage;
var mouse,mouseImage;
var garden,gardenImage;


function preload(){

  mouse_running=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
  cat_running=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
  garden=loadImage("garden.png");

}

function setup(){
   createCanvas(800,600);
   
   mouse=createSprite(50,100,200,50);
   mouse.addAnimation("running",mouse_running);
   
   cat=createSprite(100,200,100.100);
   cat.addAnimation("running",cat_running);
   cat.velocityx=3;

   garden=createSprite(500,200);
   garden.addImage("garden",gardenImage);
}



function draw(){
   background("grey");
   cat.x=world.mousex;
   mouse.y=world.mousey;

   if(isTouching(cat,mouse)){
      mouse.velocityX=0;
}
    drawSprites();
}
 

