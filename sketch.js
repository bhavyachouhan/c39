var canvas,backgroundImage,database;
var gameState = 0;
var distance = 0;
var playerCount = 0;
var form,player,game
var allplayers
var car1,car2,car3,car4;
var cars;
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.Start();
    //ball = createSprite(250,250,10,10);
    //ball.shapeColor = "red";

    //var ballposition = database.ref('ball/position');
    //ballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    //drawSprites();
    if(playerCount == 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}