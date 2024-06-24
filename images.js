///imagens e sons
let roadImage;
let actorImage;
let carImage;
let car2Image;
let car3Image;

let trackSounnd;
let collideSound;
let scoreSound;

function preload(){
  roadImage = loadImage("images/road.png");
  actorImage = loadImage("images/man.png");
  carImage = loadImage("images/carro.png");
  car2Image = loadImage("images/car2.png");
  car3Image = loadImage("images/car3.png");
  carsImage = [carImage, car2Image, car3Image, carImage, car2Image, car3Image];


  trackSound = loadSound("songs/trilha.mp3");
  collideSound = loadSound("songs/colidiu.mp3");
  scoreSound = loadSound("songs/pontos.wav");
}