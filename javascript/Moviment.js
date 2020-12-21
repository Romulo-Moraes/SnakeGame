var PlayerMove = setInterval(() => {
    var LengthOfSneakBody = SnakeBody.length
    let i = 0
    while(i < LengthOfSneakBody){
        if(i == 0){
            SnakeBody[0].LastPositionX = SnakeBody[0].PositionX
            SnakeBody[0].LastPositionY = SnakeBody[0].PositionY
            if(SnakeBody[0].LastDirection == "Right"){
                SnakeBody[0].SnakePart.style.left = parseFloat((SnakeBody[0].PositionX + 4).toFixed(1)) + "%"
                SnakeBody[0].PositionX = parseFloat((SnakeBody[0].PositionX + 4).toFixed(1))
                SnakeHead.style.transform = "rotate(90deg)"
            }
            if(SnakeBody[0].LastDirection == "Left"){
                SnakeBody[0].SnakePart.style.left = parseFloat((SnakeBody[0].PositionX - 4).toFixed(1)) + "%"
                SnakeBody[0].PositionX = parseFloat((SnakeBody[0].PositionX - 4).toFixed(1))
                SnakeHead.style.transform = "rotate(270deg)"
            }
            if(SnakeBody[0].LastDirection == "Up"){
                SnakeBody[0].SnakePart.style.top = parseFloat((SnakeBody[0].PositionY - 6.7).toFixed(1)) + "%"
                SnakeBody[0].PositionY = parseFloat((SnakeBody[0].PositionY - 6.7).toFixed(1))
                SnakeHead.style.transform = "rotate(0deg)"
            }
            if(SnakeBody[0].LastDirection == "Down"){
                SnakeBody[0].SnakePart.style.top = parseFloat((SnakeBody[0].PositionY + 6.7).toFixed(1)) + "%"
                SnakeBody[0].PositionY = parseFloat((SnakeBody[0].PositionY + 6.7).toFixed(1))
                SnakeHead.style.transform = "rotate(180deg)"
            }
            if(SnakeBody[0].PositionX > AvailableX[AvailableX.length - 1] || SnakeBody[0].PositionX < AvailableX[0] || SnakeBody[0].PositionY > AvailableY[AvailableY.length - 1] ||  SnakeBody[0].PositionY < AvailableY[0]){
                clearInterval(PlayerMove)
                window.alert("Lose!")
                window.location.reload()
            }
        }
        else{
            let yourFront = SnakeBody[i - 1]
            SnakeBody[i].LastPositionX = SnakeBody[i].PositionX
            SnakeBody[i].LastPositionY = SnakeBody[i].PositionY
            SnakeBody[i].SnakePart.style.left = yourFront.LastPositionX + "%"
            SnakeBody[i].SnakePart.style.top = yourFront.LastPositionY + "%"
            SnakeBody[i].PositionX = yourFront.LastPositionX
            SnakeBody[i].PositionY = yourFront.LastPositionY
            

        }
        
        i++;
    }
    /*
    var PlayerObject = {
        SnakePart:SnakeHead,
        PositionX:0,
        PositionY: 0,
        LastDirection:LastArrom,
        LastPositionX : null,
        LastPositionY : null
    }
    */
    LengthOfSneakBody = SnakeBody.length
    i = 1
    while(i < LengthOfSneakBody){
        if(SnakeBody[0].PositionX == SnakeBody[i].PositionX && SnakeBody[0].PositionY == SnakeBody[i].PositionY ){
            window.alert("Lose!")
            window.location.reload()
        }
        i++;
    }
    if(SnakeBody[0].PositionX == FruitPositionX && SnakeBody[0].PositionY == FruitPostionY){
        ILoveFood()
        let theNumber = Number(PointsPlace.innerHTML)
        if(theNumber != NaN){
            theNumber += 1;
            PointsPlace.innerHTML = theNumber
        }
        else{
            PointsPlace.innerHTML = "[Error]"
        }
    
    }
    

    
},150)