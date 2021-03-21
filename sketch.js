
var database,gameStateV=0,playerCountV=0
var form,player,game

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
   
}

function draw(){
   
    
}
