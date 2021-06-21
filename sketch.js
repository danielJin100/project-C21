var wall, thickness;
var speed,weight,bullet;
var damage
function setup() {
  thickness = random(22,83);
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 20, 20);

    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = "gray";

    speed = random(223,321);
    weight = random(30,52);

    bullet.velocityX = speed;
    console.log(speed);
    damage = (0.5*weight*Math.pow(speed, 2))/Math.pow(thickness, 3);
    if(damage < 10){
      bullet.shapeColor = rgb(0, 255, 0);
    }else{
      bullet.shapeColor = rgb(255, 0, 0);
    }
   console.log(damage);
}

function draw() {
  background(0);  
  bullet.collide(wall);
 

  
  drawSprites();
}