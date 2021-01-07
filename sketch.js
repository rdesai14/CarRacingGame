var ball;
var database;
var gameState = 0;
var playerCount
var leaderBoard, fourm, player;
var allPlayers

function setup(){
    database = firebase.database();
    createCanvas(500,500);
leaderBoard = new Leaderboard()
leaderBoard.getState()
leaderBoard.start()


}

function draw(){

if(playerCount === 4){

leaderBoard.update(1);

}

if(gameState === 1){

clear();
leaderBoard.play();

}

}

