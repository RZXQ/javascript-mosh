function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

// ===========================================================
//                      for...in Loop
// ===========================================================
for (let key in circle) console.log(key, circle[key]);

// ===========================================================
//                      Object.keys()
// ===========================================================
for (let key of Object.keys(circle)) console.log(key);

// ===========================================================
//                      Object.values()
// ===========================================================
for (let value of Object.values(circle)) console.log(value);

// ===========================================================
//                      Object.entries()
// ===========================================================
for (let [key, value] of Object.entries(circle)) console.log(key, value);

// ===========================================================
//                      "in" Operator
// ===========================================================
console.log("radius" in circle);
