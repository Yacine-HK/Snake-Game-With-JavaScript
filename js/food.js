import { onSnake, expandSnake } from "./snake.js"
import { gridPos } from "./grid.js"

// Snake Position Randomly
let food = randomFoodPosition()
// Add New Segment
const EXPANSION_RATE = 1

// Food Position After Eating
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = randomFoodPosition()
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

function randomFoodPosition() {
  let newFoodPosition
  if (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = gridPos()
  }
  return newFoodPosition
}