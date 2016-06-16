let canvas = document.getElementById("display")
let x = 50, y = window.innerHeight / 2 / window.innerWidth * 100
let up = false, left = false, down = false, right = false

function draw() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  let ctx = canvas.getContext("2d")

  let layout = canvas.width/canvas.height >= 1 ? "horizontal" : "vertical"
  let unit = layout === "horizontal" ? canvas.width/100 : canvas.height/100

  let side = 10

  if (up) y--
  if (left) x--
  if (down) y++
  if (right) x++

  ctx.fillStyle = "rgb(0,0,0)"
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle = "rgb(255,255,255)"
  ctx.fillRect((x * unit) - (side/2 * unit), (y * unit) - (side/2 * unit), side * unit, side * unit)
}

document.onkeydown = e => {
  e = e || window.event
  var charCode = e.keyCode || e.which
  if (charCode == 87) up = true
  if (charCode == 65) left = true
  if (charCode == 83) down = true
  if (charCode == 68) right = true
}

document.onkeyup = e => {
  e = e || window.event
  var charCode = e.keyCode || e.which
  if (charCode == 87) up = false
  if (charCode == 65) left = false
  if (charCode == 83) down = false
  if (charCode == 68) right = false
}

// Not working
document.onfocusout = e => {
  alert("BLUR")
  up = false
  left = false
  down = false
  right = false
}

setInterval(draw, 1000/60)
