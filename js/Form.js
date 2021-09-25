class Form{

constructor(){
    this.input = createInput("").attribute('placeholder',"Enter your name...");
    this.button =  createButton("Play");
    this.reset = createButton("reset");
    this.greeting = createElement("h3");
    this.greeting1 = createElement("h3");
}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.greeting1.hide();
}

display(){

    var title = createElement("h2");
    title.html("Bike Racing Game");
    title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth, displayHeight/2-390);

   this.reset.mousePressed(()=>{
    
        database.ref("/").update({
            'gameState' : 0,
            'playerCount' : 0,
            'BikesAtEnd' : 0
        })
    })    
    
    this.button.mousePressed(()=>{

       this.input.hide();
       this.button.hide();

       player.name = this.input.value();

        playerCount = playerCount +1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Welcome to the Bike Race,  " + player.name + "!" );
        this.greeting.position(displayWidth/2-170,displayHeight/4);

        this.greeting1.html("Please wait for the other player to join.");
        this.greeting1.position(displayWidth/2-170,displayHeight/4+20);

    }
    );
    }
}
