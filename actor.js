//variáveis do ator
let yActor = 366;
let xActor = 95;
let collision = false;
let lengthCar = 50;
let heightCar = 40;

//pontos
let myScore = 0;

function showActor(){
  image(actorImage, xActor, yActor, 37, 32);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 3;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMove()){
      yActor += 3;
    }
  }
}

function canMove(){
  return yActor < 366;
}

function includeScore(){
  textAlign(CENTER);
  textSize(22);
  fill(color(255, 210, 0));
  text(myScore, width/5, 29);
  textSize(22)
  fill(color(255, 215, 0))
  text("Score: ", 50, 27)
}

function actorReturn(){
  yActor = 366;
}

function scorePoint(){
  if (yActor < 15){
    myScore += 1;
    scoreSound.play();
    actorReturn();
  }

}

function verifyCollision(){
  for (let i = 0; i < carsImage.length; i+=1){
    collision = collideRectCircle(xCars[i], yCars[i], lengthCar, heightCar, xActor, yActor, 15)
    if (collision){
      collided();7
      collideSound.play();
      actorReturn();
      if (myScore > 0){
        myScore -= 1;
      }
    
    }
  }
  
function collided(){
  yActor = 366;
  
}

  
}