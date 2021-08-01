var bath1Img;
var bath2Img;
var brushImg;
var drink1Img
var drink2Img;
var eat1Img;
var eat2Img;
var gym1Img;
var gym2Img;
var gym3Img;
var gym4Img;
var mainImg;
var moveImg;
var move2Img
var sleepImg;
var guy;


function preload () {
  bath1Img = loadImage ("bath1.png")
  bath2Img = loadImage ("bath2.png")
  brushImg = loadImage ("brush.png")
  drink1Img = loadImage ("drink1.png")
  drink2Img = loadImage ("drink2.png")
  eat1Img = loadImage ("eat1.png")
  eat2Img = loadImage ("eat2.png")
  gym1Img = loadImage ("gym1.png")
  gym2Img = loadImage ("gym2.png")
  gym3Img = loadImage ("gym11.png")
  gym4Img = loadImage ("gym12.png")
  mainImg = loadImage ("iss.png")
  moveImg = loadImage ("move.png")
  move2Img = loadImage ("move1.png")
  sleepImg = loadImage ("sleep.png")
  
}


function setup() {
 createCanvas(1200,700);
  createEdgesSprites ();
  guy.bounceOff (edges);
  createSprite(400, 200, 50, 50);
  guy =  createSprite (340,510,10,10);
  guy.addImage (sleepImg);
  guy.scale=0.12


}

function draw() {
  background(mainImg,1200,700,600,600);  
   if (keyDown (UP_ARROW)){
     guy.changeImage (brushImg)
   }
   if (keyDown (DOWN_ARROW)){
    guy.changeAnimation ("gym",gym1Img,gym2Img,gym3Img,gym4Img)
  }
  if (keyDown (RIGHT_ARROW)){
    guy.changeAnimation ("eat",eat1Img,eat2Img)
  }
  if (keyDown (LEFT_ARROW)){
    guy.changeAnimation ("bath?",bath1Img,bath2Img)
  }
  if (keyDown (m)){
    guy.velocityX=2
    guy.velocityY=2
  }


    

  drawSprites();
}