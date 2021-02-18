import { onSnake, expandSnake } from "./snake.js"
import { onWall } from "./wall.js"
import { gridPos } from "./grid.js"

// Snake Position Randomly
let food = randomFoodPosition()

// ScoreBoard
let score = 0
let scoreUI = document.querySelector(".score span")

// Add New Segment
const EXPANSION_RATE = 1

// Food Position After Eating
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)

    // New Random Food Positon After Eating
    food = randomFoodPosition()

    // ScoreBoard
    score++
    scoreUI.innerHTML = score
  }
}

// Draw Food
export function draw(gameBoard) {
  const foodElement = document.createElement("div")
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add("food")
  gameBoard.appendChild(foodElement)
}

// Random Food Position 
function randomFoodPosition() {
  let newFoodPosition

  // While Food Position != snakebody and wallbody
  while (newFoodPosition == null || onSnake(newFoodPosition) || onWall(newFoodPosition)) {
    newFoodPosition = gridPos()
  }
  return newFoodPosition
}