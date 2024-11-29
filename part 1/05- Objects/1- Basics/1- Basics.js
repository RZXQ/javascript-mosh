// Object-oriented Programming (OOP)

// if a function is part of an object, then the function is called method
const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  isVisible: true,
  draw() {
    console.log("draw");
  },
};

circle.draw();
