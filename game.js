class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
        gameState = data.val();
        })
    }
    update(State){
    database.ref('/').update({
        gameState:State
    });
    }
    async Start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();

            }
            //player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
    }

    play(){
        form.hidedetails();
        textSize(30);
        text("game start",120,100);
        Player.getplayerinfo();
    if(allplayers!==undefined){
        var index = 0;
        var x = 0;
        var y
        //var display_position = 130;
        for(var plr in allplayers){
            index = index+1;
            x = x+250;
            y = displayHeight-allplayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            
            if(index===player.index){
               // fill("red");
               cars[index-1].shapeColor="red";
                camera.position.x = displayWidth/2;
                camera.position.y=cars[index-1].y;
            }
            
        
        //display_position+=20;
        //textSize(15);
        //text(allplayers[plr].name+":"+allplayers[plr].distance,120,display_position);
    }
}
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=50;
        player.update();
    }
    drawSprites();
}
}