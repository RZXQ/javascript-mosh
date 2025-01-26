// ===========================================================
//                          Circle Object
// ===========================================================
// A function defined as a property of an object is called a method
const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
