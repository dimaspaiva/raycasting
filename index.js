let walls = []
let particle

function setup() {
  createCanvas(500, 500)
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
  particle.show(walls)
}
