import { onSnake, expandSnake } from "./snake.js"
import { onWall } from "./wall.js"
import { gridPos } from "./grid.js"

// Snake Position Randomly
let food = randomFoodPosition()
let scoreUI = document.querySelector(".score span")
// Add New Segment
const EXPANSION_RATE = 1
let score = 0
// Food Position After Eating
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = randomFoodPosition()
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

function randomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition) || onWall(newFoodPosition)) {
    newFoodPosition = gridPos()
  }
  console.log("wall:", onWall(newFoodPosition))
  console.log("snake:", onSnake(newFoodPosition))
  return newFoodPosition
}