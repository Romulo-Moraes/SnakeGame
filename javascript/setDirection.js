window.addEventListener("keydown", (key) => {
    if(key.keyCode == "87"){
        SnakeBody[0].LastDirection = "Up"
    }
    if(key.keyCode == "68"){
        SnakeBody[0].LastDirection = "Right"
    }
    if(key.keyCode == "65"){
        SnakeBody[0].LastDirection = "Left"
    }
    if(key.keyCode == "83"){
        SnakeBody[0].LastDirection = "Down"
    }
    if(key.keyCode == "80"){
        //window.alert(AllBody[0].PositionX + " " +  FruitPositionX + " " + AllBody[0].PositionY + " " + FruitPostionY)
        //window.alert(typeof(AllBody[0].PositionX) + " " + typeof(AllBody[0].PositionY))
        let bodyCount = document.getElementsByClassName("Body")
        window.alert(JSON.stringify(SnakeBody))
    }
})