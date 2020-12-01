var car,speed,weight;
var deform;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  text("speed "+ speed,400,100);
  text("wight "+ weight,600,100);
  text("deform "+ deform,800,100);


if((wall.x-car.x)<65){
  car.velocityX=0; 

deform=(.5*weight*speed*speed)/22500;
  if(deform>180){
    car.shapeColor=rgb(255,0,0);
  }else if(deform>100){
    car.shapeColor=rgb(230,230,0);
   }else{
    car.shapeColor=rgb(0,255,0);
 
   }
  }

text("speed "+ speed,400,100);
  text("wight "+ weight,600,100);
  text("deform "+ deform,800,100);


  drawSprites();
}