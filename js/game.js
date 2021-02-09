// JS Modules
import { draw as drawSnake, update as updateSnake, SNAKE_SPEED } from "./snake.js"
import { draw as drawFood, update as updateFood } from "./food.js"

// DOM Selection
const gameBoard = document.querySelector(".game-container")

let renderTime = 0


// The Main Function
function main(current) {
  window.requestAnimationFrame(main)
  let secondsLastRender = (current - renderTime) / 1000
  if (secondsLastRender < 1 / SNAKE_SPEED) return

  renderTime = current

  // update()
  // draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
}

function draw() {

  drawSnake(gameBoard)
  drawFood(gameBoard)
}