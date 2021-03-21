class Player{
    constructor(){}
    
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",function(data){
            playerCountV=data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })

    }
    update(name){
       var playerIndex="player"+playerCountV
        database.ref(playerIndex).set({
            name:name
        })

    }
}