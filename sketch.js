var database;
var form,player,game;
var gameState =0;
var playerCount;
var allPlayers;
var distance = 0;

var bg, bgImg;

var b1Img,b2Img;

var bike1,bike2,bikes;

var BikesAtEnd;

var firstImg, secondImg;

function preload(){
b1Img = loadImage("b4.png");
b2Img = loadImage("b5.png");
bgImg = loadImage("track.jpg");
firstImg = loadImage("gold.png");
secondImg = loadImage("silver.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

function draw(){
    background("white");

   if(playerCount === 2){
       game.update(1);
   }
   if(gameState === 1){
       clear();
       game.play();
   }
   if(gameState === 2){
       game.end();
   }
}
