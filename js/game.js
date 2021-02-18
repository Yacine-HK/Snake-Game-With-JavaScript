// JS Modules
import { draw as drawSnake, update as updateSnake, SNAKE_SPEED, getSneakHead, sneakIntersection } from "./snake.js"
import { draw as drawFood, update as updateFood } from "./food.js"
import { outsidGrid } from "./grid.js"
import { draw as drawWall, onWall } from "./wall.js"

// DOM Selection
const gameBoard = document.querySelector(".game-container")

let renderTime = 0
let gameOver = false

// The Main Function
function main(current) {
  // Get Game Over Message
  if (gameOver) {
    if (confirm("You lose , Press ok to restart the game .")) {
      window.location.reload()
    }
    return
  }

  window.requestAnimationFrame(main)
  let secondsLastRender = (current - renderTime) / 1000
  if (secondsLastRender < 1 / SNAKE_SPEED) return

  renderTime = current

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ""
  drawSnake(gameBoard)
  drawWall(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsidGrid(getSneakHead()) || sneakIntersection() || onWall(getSneakHead())
}