// ==================== Object Definition ====================

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// ==================== Manual Cloning ====================

const another1 = {};
for (let key in circle) {
  another1[key] = circle[key];
}
console.log(another1);

// ==================== Object.assign Cloning ====================

const another2 = Object.assign({ color: "yellow" }, circle);
console.log(another2);

// ==================== Spread Operator Cloning ====================

const another3 = { ...circle, color: "yellow" };
console.log(another3);
