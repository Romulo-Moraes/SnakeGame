function CreateAfruit(){
    let lenOfBody = SnakeBody.length
    let i = 0
    let toYofFruit = undefined
    let toXofFruit = undefined
    while(true){
        let haveSamePosition = false
        while(true){
            toXofFruit = Math.ceil(Math.random() * (24 - 0))
            FruitPositionX =  AvailableX[toXofFruit]
            if(FruitPositionX != undefined){
                break;
            }
        }
        while(true){
            toYofFruit = Math.ceil(Math.random() * (14 - 0))
            FruitPostionY = AvailableY[toYofFruit]
            if(FruitPostionY != undefined){
                break;
            }
        }
        while(i < lenOfBody){
            if(SnakeBody[i].PositionX == FruitPositionX && SnakeBody[i].PositionY == FruitPostionY){
                haveSamePosition = true
            }
            i++
        }
        if(haveSamePosition == false){
            break;
        }
    }
    
    TheFruit.style.left = AvailableX[toXofFruit] + "%"
    TheFruit.style.top = AvailableY[toYofFruit] + "%"
}   
CreateAfruit()