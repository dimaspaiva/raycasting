class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2)
    this.offset = 0
    this.rays = []

    for (let i = 0; i < 360; i++) {
      this.rays.push(new Ray(this.pos, radians(i)))
    }
  }

  look = (walls) => {
    for (const ray of this.rays) {
      let minorDistance = Infinity
      let x, y

      for (const wall of walls) {
        const point = ray.cast(wall)

        if (point) {
          const distance = p5.Vector.dist(point, this.pos)

          if (distance < minorDistance) {
            minorDistance = distance
            x = point.x
            y = point.y
          }
        }
      }

      if (minorDistance !== Infinity) {
        line(this.pos.x, this.pos.y, x, y)
      }
    }
  }

  show = (walls) => {
    fill(210)
    this.pos.x = noise(this.offset) * width
    this.pos.y = noise(this.offset) * height
    ellipse(this.pos.x, this.pos.y, 8)
    this.offset += 0.01
    this.look(walls)
  }
}
