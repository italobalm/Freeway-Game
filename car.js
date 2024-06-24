//variáveis do carro
let yCars = [45, 100, 150, 215, 265, 318];
let xCars = [600, 600, 600, 600, 600, 600];
let speedCars = [2, 3.5, 2.7, 5, 3.3, 2.3];

//mostrando os carros
function showCar(){
  for (let i = 0; i < carsImage.length; i+=1){
    image(carsImage[i], xCars[i], yCars[i], 50, 30);
}
}

//movendo os carros
function moveCar(){
  for (let i = 0; i < carsImage.length; i+=1){
    xCars[i]-= speedCars[i];
}
}

// retornando o carro para a posição inicial
function returnInitialPosition(){
  for (let i = 0; i < carsImage.length; i+=1){
    if (pastTheScreen(xCars[i])){
      xCars[i]= 600;
  }
}
}

//verificando se o carro passou da tela
function pastTheScreen(xCars){
  return xCars < - 40;
}