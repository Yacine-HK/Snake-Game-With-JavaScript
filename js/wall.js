const wallBody = [
  { x: 5, y: 19 },
  { x: 5, y: 18 },
  { x: 5, y: 17 },
  { x: 5, y: 16 },
  { x: 5, y: 15 },
  { x: 5, y: 14 },
  { x: 5, y: 13 },
  { x: 5, y: 12 },
  { x: 5, y: 11 },
  { x: 5, y: 10 },
  { x: 5, y: 9 },
  { x: 5, y: 8 },
  { x: 5, y: 7 },
  { x: 5, y: 6 },
  { x: 5, y: 5 },
  { x: 5, y: 4 },
  { x: 5, y: 3 },
  { x: 17, y: 19 },
  { x: 17, y: 18 },
  { x: 17, y: 17 },
  { x: 17, y: 16 },
  { x: 17, y: 15 },
  { x: 17, y: 14 },
  { x: 17, y: 13 },
  { x: 17, y: 12 },
  { x: 17, y: 11 },
  { x: 17, y: 10 },
  { x: 17, y: 9 },
  { x: 17, y: 8 },
  { x: 17, y: 7 },
  { x: 17, y: 6 },
  { x: 17, y: 5 },
  { x: 17, y: 4 },
  { x: 17, y: 3 },
]

export function draw(gameBoard) {
  wallBody.forEach(seg => {
    const wallElement = document.createElement("div")
    wallElement.style.gridRowStart = seg.y
    wallElement.style.gridColumnStart = seg.x
    wallElement.classList.add("wall")
    gameBoard.appendChild(wallElement)
  })
}

export function onWall(position) {
  return wallBody.some(segment => equalPosition(segment, position))
}

function equalPosition(pos1, pos2) {
  return (pos1.x === pos2.x && pos1.y === pos2.y)
}
