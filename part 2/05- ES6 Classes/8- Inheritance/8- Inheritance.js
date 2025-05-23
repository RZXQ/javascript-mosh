class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

const c = new Circle("red", 1);

console.log(c.color);
console.log(c.radius);
c.move();
c.draw();
