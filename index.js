let walls = []
let particle

function setup() {
  createCanvas(500, 500)
  walls.push(new Boundary(0, 0, width, 0))
  walls.push(new Boundary(0, 0, 0, height))
  walls.push(new Boundary(0, height, width, height))
  walls.push(new Boundary(width, 0, width, height))
  for (let i = 0; i < 6; i++) {
    walls.push(
      new Boundary(random(width), random(width), random(height), random(height))
    )
  }
  particle = new Particle()
}

function draw() {
  background(30)
  for (const wall of walls) {
    wall.show()
  }
  stroke(150)
  particle.show(walls)
}
