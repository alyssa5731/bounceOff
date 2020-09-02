var obj1, obj2 ,obj3 , movingRect;

function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(400, 150, 50, 80);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj2 = createSprite(400, 200, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj3 = createSprite(400, 300, 50, 80);
  obj3.shapeColor = "green";
  obj3.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  obj1.velocityY = +5;
  obj2.velocityY=-5;
  obj3.velocityY=+5;
}

function draw() {
  background(0,0,0);  
bounceOff(obj1,obj2);

  
  drawSprites();
}
function bounceOff(object1,MovingRect){ 
  if (MovingRect.x - object1.x < object1.width/2 + MovingRect.width/2
    && object1.x - MovingRect.x < object1.width/2 + MovingRect.width/2) {
  MovingRect.velocityX = MovingRect.velocityX * (-1);
  object1.velocityX = object1.velocityX * (-1);
}
if (MovingRect.y - object1.y < object1.height/2 + MovingRect.height/2
  && object1.y - MovingRect.y < object1.height/2 + MovingRect.height/2){
  MovingRect.velocityY = MovingRect.velocityY * (-1);
  object1.velocityY = object1.velocityY * (-1);
}

}