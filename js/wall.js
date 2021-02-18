import { allMaps } from "./maps.js"

// Wall Position
const wallBody = allMaps.map1


export function draw(gameBoard) {
  wallBody.forEach(seg => {
    const wallElement = document.createElement("div")
    wallElement.style.gridRowStart = seg.y
    wallElement.style.gridColumnStart = seg.x
    wallElement.classList.add("wall")
    gameBoard.appendChild(wallElement)
  })
}

// If The Sneak Position AND Food Position === Wall Position
export function onWall(position) {
  return wallBody.some(segment => equalPosition(segment, position))
}

function equalPosition(pos1, pos2) {
  return (pos1.x === pos2.x && pos1.y === pos2.y)
}
