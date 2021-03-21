class Game{
    constructor(){}a
    
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameStateV=data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })

    }
    
   start(){
       if(gameStateV===0){
           player=new Player();
           player.getCount();
           form=new Form();
           form.display();
       }
   }
}