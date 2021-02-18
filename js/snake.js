import { getInputDirection } from "./input.js"

// Snake Speed
export const SNAKE_SPEED = 10

// Snake Position
const snakeBody = [
  { x: 11, y: 11 }
]

// The Mechanisme Of the Snake
export function update() {
  addSegments()

  let inputDirection = getInputDirection()

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  // if (snakeBody[0].x > 21) snakeBody[0].x = 0
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

// Get Sneak Head Function
export function getSneakHead() {
  return snakeBody[0]
}

// If the Sneake intersect with the body
export function sneakIntersection() {
  return onSnake(snakeBody[0], { igonreHead: true })
}

// Draw Snake
export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement("div")
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add("snake")
    gameBoard.appendChild(snakeElement)
  })
}

// If The Snake Eat The Food
export function onSnake(position, { igonreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (igonreHead && index === 0) return false
    return equalPosition(segment, position)
  })
}
// If The Snake Eat The Food
function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

let newSegments = 0
// If The Snake Eat The Food => Add New Segment
export function expandSnake(expandRate) {
  newSegments += expandRate
}

// Add New Segment Function
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  newSegments = 0
}
