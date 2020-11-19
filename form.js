class Form{

 constructor(){

  this.button = createButton("play");
  this.title = createElement("h1");
  this.greeting = createElement("h3");
  this.inputBox = createInput("Name");

 }

 display(){

    this.button.position(300,200);
    this.title.position(100,0);
    this.inputBox.position(200,100);

    this.button.mousePressed(()=>{
      this.inputBox.hide();
      this.button.hide();
      player.name = this.inputBox.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70,displayHeight/4);
 });


 }

  hide(){

    this.button.hide();
    this.greeting.hide();
    this.title.hide();
    this.inputBox.hide();
    
 }

}