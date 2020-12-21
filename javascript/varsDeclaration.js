var SnakeHead = document.getElementById("Head")
var TheFruit = document.getElementById("Fruit")
var GameZone = document.getElementById("GameTable")
var PointsPlace = document.getElementById("Numbers")
var LastArrom = "Right"
var FruitPositionX = null
var FruitPostionY = null
var Points = 0
var toColor = 0
var PlayerObject = {
    SnakePart:SnakeHead,
    PositionX:0,
    PositionY: 0,
    LastDirection:LastArrom,
    LastPositionX : null,
    LastPositionY : null
}
var SnakeBody = [PlayerObject]
var AvailableX = [0 , 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96]
var AvailableY = [0, 6.7, 13.4, 20.1, 26.8, 33.5, 40.2, 46.9, 53.6, 60.3, 67.0, 73.70, 80.40, 87.1, 93.8]

