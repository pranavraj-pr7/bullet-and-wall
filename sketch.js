var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(4,7);
  weight=random(30,52);
  bullet = createSprite(100, 200, 60, 50);
  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor="grey"
  bullet.velocityX = 4;
}

function draw() {
  background(255,255,255);  
   


if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed*speed/(thickness*thickness*thickness);
 
  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
  drawSprites();
}

 
}
function hasCollided(lbullet,lwall)
{
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
        {
        return true;
    }
    return false;
}