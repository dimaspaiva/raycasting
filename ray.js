class Ray {
  constructor(pos, angle) {
    this.pos = pos
    this.dir = p5.Vector.fromAngle(angle)
  }

  lookAt = (x, y) => {
    this.dir.x = x - this.pos.x
    this.dir.y = y - this.pos.y
    this.dir.normalize()
  }

  cast = (wall) => {
    const { x: x1, y: y1 } = wall.a
    const { x: x2, y: y2 } = wall.b

    const { x: x3, y: y3 } = this.pos
    const x4 = this.pos.x + this.dir.x
    const y4 = this.pos.y + this.dir.y

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

    if (!den) {
      return false
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den

    if (t > 0 && t < 1 && u > 0) {
      return this.pointOfIntersection(x1, y1, x2, y2, t)
    }
  }

  pointOfIntersection = (x1, y1, x2, y2, t) => {
    const pos = createVector()
    pos.x = x1 + t * (x2 - x1)
    pos.y = y1 + t * (y2 - y1)

    return pos
  }
}

//   Cast
/* intersection detector, define if two lines colides
 * intersection calculator, define the coordinates of intersection
 *
 * formulas
 *  l1 (p1, p2), l2 (p3, p4)
 *  p1 (x1, y1), p2 (x2, y2), p3 (x3, y3) and p4 (x4, y4)
 *
 *  t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
 *  u = - ((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den
 *
 *  den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
 *
 *  poi = point of intersection
 *  poiX = (x1 + t(x2 - x1))
 *  poiY = (y1 + t(y2 - y1))
 *
 * Condthisions to line colides,
 *  1 - they are in the same plane (aways)
 *  2 - 0.0 <= t <= 1.0
 *  3 - 0.0 <= u <= 1.0
 *  4 - den > 0
 *
 */
