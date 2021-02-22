// JS Modules
import { draw as drawSnake, update as updateSnake, getSneakHead, sneakIntersection } from "./snake.js"
import { draw as drawFood, update as updateFood } from "./food.js"
import { outsidGrid } from "./grid.js"
import { draw as drawWall, onWall } from "./wall.js"

// DOM Selection
const startGame = document.querySelector(".play")
const gameBoard = document.querySelector(".game-container")
const speeds = document.querySelector(".config .speeds-box")


const levels = document.querySelector(".config .levels-box")
let theLevel = 0;
levels.addEventListener("click", e => {
  theLevel = +e.target.innerHTML
})
export const getLevel = () => theLevel


let SNAKE_SPEED = 10;
speeds.addEventListener("click", e => {
  SNAKE_SPEED = +e.target.innerHTML * 10
  console.log(SNAKE_SPEED)
})


let renderTime = 0
let gameOver = false

// Start The Game After Clicking The startGame Button
startGame.addEventListener("click", () => {
  // Run The Game
  window.requestAnimationFrame(main)

  // Delete the overlay
  document.querySelector(".overlay").remove()
})

// The Main Function
function main(current) {
  // Get Game Over Message
  if (gameOver) {
    if (confirm("You lose , Press ok to restart the game .")) {
      window.location.reload()
    }
    return
  }

  // Frame Time
  window.requestAnimationFrame(main)
  let secondsLastRender = (current - renderTime) / 1000
  if (secondsLastRender < 1 / SNAKE_SPEED) return
  renderTime = current
  update()
  draw()
}

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
