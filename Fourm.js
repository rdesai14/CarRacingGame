class Fourm{

constructor(){

this.input = createInput("Name")
this.button = createButton("Click to Join")
this.message = createElement('h3')

}

hide(){

this.input.hide()
this.button.hide()
this.message.hide()

}
display(){

var title = createElement('h2')
title.html("The Impossible Game")
title.position(130,0)
this.input.position(130,160)
this.button.position(250,200)

this.button.mousePressed(()=>{

this.input.hide()
this.button.hide()
player.Name = this.input.value()
playerCount += 1
player.index = playerCount
player.update()
player.updateCount(playerCount)
this.message.html("Welcome to the Game "+ player.Name)
this.message.position(130, 160)

})

}

}