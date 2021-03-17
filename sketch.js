var canvas;
var music;
var s1,s2,s3,s4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);
    s1=createSprite(720,550,100,20);
    s1.shapeColor="green"

    s2=createSprite(540,550,100,20);
    s2.shapeColor="red"
    
    s3=createSprite(330,550,100,20)
    s3.shapeColor="blue"

    s4=createSprite(120,550,100,20)
    s4.shapeColor="purple"


    //create box sprite and give velocity
    box=createSprite(random(20,750))
    box.velocityY=6;
    
   
    //create 4 different surfaces
    
    

}

function draw() {
    
    background(rgb(10,10,10));
    drawSprites();
  if(box.x<0){
      music.stop()
      box.velocityX=3
  }else if(box.x>800){
   music.stop()
   box.velocityX=-3
  }
  if(isTouching(box,s1)){
      music.play()
      box.shapeColor="green"
      bounceoff(box,s1)
  }
  else if(isTouching(box,s4)){
    music.play()
    box.shapeColor="purple"
    bounceoff(box,s4)
}
else if(isTouching(box,s3)){
    music.play()
    box.shapeColor="blue"
    bounceoff(box,s3)
}
else if(isTouching(box,s2)){
    music.play()
    box.shapeColor="red"
    bounceoff(box,s2)
}
if(box.y<0){
    music.stop()
    box.velocityY=3
}


  

   
   
    //create edgeSprite
     
     

    //add condition to check if box touching surface and make it box
}
