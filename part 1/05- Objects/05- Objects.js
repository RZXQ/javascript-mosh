// ====================== 1. Basics ======================
const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};
circle.draw();

// ====================== 2. Factory Functions ======================
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(1);

// ====================== 3. Constructor Functions ======================
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1);

// ====================== 4. Dynamic Nature of Objects ======================
const dynamicCircle = { radius: 1 };
dynamicCircle.color = "yellow"; // Add property
delete dynamicCircle.color; // Remove property

// ====================== 5. Constructor Property ======================
function CircleConstructor(radius) {
  this.radius = radius;
}
const circleProperty = new CircleConstructor(1);
console.log(circleProperty.constructor);

// ====================== 6. Functions are Objects ======================
function CircleFunction(radius) {
  this.radius = radius;
}
CircleFunction.call({}, 1);
CircleFunction.apply({}, [1]);

// ====================== 7. Value vs Reference Types ======================
let x = { value: 10 };
let y = x;
x.value = 20; // Reference type
console.log(x, y);

let num = 10;
function increase(n) {
  n++;
}
increase(num); // Primitive type
console.log(num);

// ====================== 8. Enumerating Properties of an Object ======================
const circleEnum = { radius: 1, draw() {} };
for (let key in circleEnum) console.log(key);
for (let key of Object.keys(circleEnum)) console.log(key);
for (let value of Object.values(circleEnum)) console.log(value);
for (let [key, value] of Object.entries(circleEnum)) console.log(key, value);
if ("radius" in circleEnum) console.log("radius exists");

// ====================== 9. Cloning an Object ======================
const circleClone = { radius: 1, draw() {} };
const another1 = { ...circleClone }; // Spread operator
const another2 = Object.assign({ color: "yellow" }, circleClone);

// ====================== 10. Garbage Collection ======================
let gcCircle = {};
console.log(gcCircle); // Auto memory management

// ====================== 11. Math ======================
console.log(Math.random());
console.log(Math.round(1.9));
console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));

// ====================== 12. String ======================
const message = "This is my first message";
console.log(message.length);
console.log(message[0]);
console.log(message.includes("my"));
console.log(message.includes("not"));
console.log(message.startsWith("This"));
console.log(message.startsWith("this"));
console.log(message.endsWith("e"));
console.log(message.indexOf("my"));
console.log(message.replace("first", "second"));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.split(" "));

// ====================== 13. Template Literals ======================
const name = "John";
const greeting = `Hello, ${name}`;
console.log(greeting);

// ====================== 14. Date ======================
const now = new Date();
console.log(now.toDateString());
console.log(now.toISOString());
