class Player{

constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
}

getCount(){
    database.ref('playerCount').on("value",function(data){
    playerCount = data.val();

    })
}

updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}

update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        name : this.name,
        distance : this.distance,
        rank : this.rank
    })

    console.log ("inside update")
}

static async getPlayerInfo(){
    await database.ref('players').on("value", data=>{
        allPlayers = data.val();
        })
    }

getBikesAtEnd(){
        
        var bikesAtEndRef = database.ref("BikesAtEnd");
        bikesAtEndRef.on("value", (data)=>{

            this.rank = data.val();

        })
}
static updateBikesAtEnd(rank){
    database.ref("/").update({
        BikesAtEnd : rank
        })
        console.log("inside bikes");
}
}
    
