function ILoveFood(){
    let LengthOfSneakBody = SnakeBody.length
    let newBodyPart = document.createElement("div")
    newBodyPart.classList.add("Body")
    if(toColor % 2 == 0){
        newBodyPart.style.backgroundColor = "black"
    }
    else{
        newBodyPart.style.color = "rgb(126,0,0)"
    }
    toColor += 1;
    let newBodyProps = null
    if(LengthOfSneakBody != 1){
        newBodyPart.style.left = SnakeBody[LengthOfSneakBody - 1].LastPositionX + "%"
        newBodyPart.style.top = SnakeBody[LengthOfSneakBody - 1].LastPositionY + "%"
        newBodyProps = {
            SnakePart : newBodyPart,
            PositionX : SnakeBody[LengthOfSneakBody - 1].LastPositionX,
            PositionY : SnakeBody[LengthOfSneakBody - 1].LastPositionY,
            LastPositionX : null,
            LastPositionY : null
        }
    }
    else{
        newBodyPart.style.left = SnakeBody[0].LastPositionX + "%"
        newBodyPart.style.top = SnakeBody[0].LastPositionY + "%"
        newBodyProps = {
            SnakePart : newBodyPart,
            PositionX : SnakeBody[0].LastPositionX,
            PositionY : SnakeBody[0].LastPositionY,
            LastPositionX : null,
            LastPositionY : null
        }
    }
    SnakeBody.push(newBodyProps)
    GameZone.appendChild(newBodyPart)
    Points += 1;    
    CreateAfruit()
    
}
ILoveFood()
ILoveFood()
