const circle = { radius: 1 }; // Object properties can be added or removed dynamically

circle.color = "yellow"; // Adding a new property.
circle.draw = function () {
  console.log("Drawing the circle");
};
delete circle.draw; // Removing a property

console.log(circle);
