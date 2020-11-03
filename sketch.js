var mbox,fbox;


function setup() {
  createCanvas(800,400);
  mbox = createSprite(400, 200, 250, 150);
  mbox.shapeColor= "green";
  mbox.debug=true;


  fbox = createSprite(200,200,200,100);
  fbox.shapeColor= "green";
  fbox.debug=true;
}

function draw() {
  background("black"); 
  mbox.x = mouseX;
  mbox.y= mouseY; 
  if(mbox.x-fbox.x<mbox.width/2 + fbox.width/2
    && fbox.x-mbox.x<mbox.width/2 + fbox.width/2
    && mbox.y-fbox.y<mbox.height/2 + fbox.height/2
    && fbox.y-mbox.y<mbox.height/2 + fbox.height/2){
    mbox.shapeColor= "blue"
    fbox.shapeColor = "blue"

  }
  else{
    mbox.shapeColor= "green";
    fbox.shapeColor= "green";
  }
  drawSprites();
}