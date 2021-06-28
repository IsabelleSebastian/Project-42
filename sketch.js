var ship
var Iss

function preload() {
  issImg = loadImage("Project 42 Images/iss.png")
  spacebgImg = loadImage("Project 42 Images/spacebg.jpg")
  sc1Img = loadImage("Project 42 Images/spacecraft1.png")
  sc2Img = loadImage("Project 42 Images/spacecraft2.png")
  sc3Img = loadImage("Project 42 Images/spacecraft3.png")
  sc4Img = loadImage("Project 42 Images/spacecraft4.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Iss = createSprite(600, 280, 50, 50);
  Iss.addImage(issImg)
  Iss.debug = false
  Iss.setCollider("rectangle",-60,30,50,20)
  ship = createSprite(random(0,1320),500,20,20);
}

function draw() {
  background(spacebgImg); 
//console.log(mouseX,mouseY)
  
  ship.addImage(sc1Img) 
  ship.scale = 0.35

  var hasDocked = false
  if(!hasDocked){
    if(keyDown(UP_ARROW)){
      ship.y -= 4; //unary op --> "-=" OR "+="
      ship.addImage(sc2Img)
    }
    if(keyDown(DOWN_ARROW)){
      ship.y += 4;
    }
    if(keyDown(RIGHT_ARROW)){
      ship.addImage(sc3Img)
      ship.x += 4;
    }
    if(keyDown(LEFT_ARROW)){
      ship.addImage(sc4Img)
      ship.x -= 4;
    }
  } 
  if(ship.y <= (Iss.y + 110) && ship.x <= (Iss.x-20) ){
    textSize(40)
    fill("limegreen")
    text("Docking Sucessful!", 500,500)

  }

  ship.debug = false
  ship.setCollider("rectangle",0,-200,100,50)
 
  drawSprites();
}