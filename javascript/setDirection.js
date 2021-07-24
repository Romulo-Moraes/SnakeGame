window.addEventListener("keydown", (key) => {
    if(key.keyCode == "87"){
        if(SnakeBody[0].LastDirection != "Down"){
            SnakeBody[0].LastDirection = "Up"
        }
    }
    if(key.keyCode == "68"){
        if(SnakeBody[0].LastDirection != "Left"){
            SnakeBody[0].LastDirection = "Right"
        }
    }
    if(key.keyCode == "65"){
        if(SnakeBody[0].LastDirection != "Right"){
            SnakeBody[0].LastDirection = "Left"
        }
    }
    if(key.keyCode == "83"){
        if(SnakeBody[0].LastDirection != "Up"){
            SnakeBody[0].LastDirection = "Down"
        }
    }
    if(key.keyCode == "80"){
        let bodyCount = document.getElementsByClassName("Body")
        window.alert(JSON.stringify(SnakeBody))
    }
})