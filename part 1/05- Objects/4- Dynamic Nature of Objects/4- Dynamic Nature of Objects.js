const circle = { radius: 1 };

// ===========================================================
//                      Add Properties
// ===========================================================
circle.color = "yellow";
circle.draw = function () {
  console.log("Drawing the circle");
}; // Add a new method

// ===========================================================
//                     Remove Properties
// ===========================================================
delete circle.draw;

console.log(circle);
