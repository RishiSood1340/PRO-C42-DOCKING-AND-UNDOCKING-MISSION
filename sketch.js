var hasdocked = false

function preload(){
  spacebg = loadImage('Images/spacebg.jpg')
  iss = loadImage('Images/iss.png')
  sc1 = loadImage('Images/spacecraft1.png')
  sc2 = loadImage('Images/spacecraft2.png')
  sc3 = loadImage('Images/spacecraft3.png')
  sc4 = loadImage('Images/spacecraft4.png')

}
function setup() {
  createCanvas(600,350);
  
  spacecraft = createSprite(285,240)
  spacecraft.scale = 0.15
  iss1 = createSprite(330,130)
  iss1.scale = 0.25
  spacecraft.addImage(sc1);
  iss1.addImage(iss);
  
}

function draw() {
  background(spacebg); 
  if(!hasdocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){ spacecraft.y = spacecraft.y -2; } 
    if(keyDown("LEFT_ARROW")){ spacecraft.addImage(sc4); spacecraft.x = spacecraft.x - 1; } 
    if(keyDown("RIGHT_ARROW")){ spacecraft.addImage(sc3); spacecraft.x = spacecraft.x + 1; } 
    if(keyDown("DOWN_ARROW")){ spacecraft.addImage(sc2); spacecraft.y = spacecraft.y + 1; }
  } 
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){ 
    hasDocked = true; 
    textSize(25); 
    fill("white")
    text("Docking Successful!", 200, 300); }
  drawSprites();
}