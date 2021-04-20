var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("add image ur1 here");
    catimg = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("image/mouse1.png");
    catimg = loadAnimation("add cat2 and cat3 image ur1 here.")
    mouseimg2 = loadAnimation("add mouse2 and mouse3 image ur 1 here.")
} 


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x = mouse.x < (cat.width - mouse - mouse.width)/2)
    {
         //write code here to change animation

         cat.addAnimation("catRunning", catimg2);
         cat.changeAnimation("catRunning")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation9("mouseTeasing");
    mouse.frameDelay = 25;
  }

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation9("mouseTeasing");
    mouse.frameDelay = 25;
}

}

