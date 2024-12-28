// ==================== Object Definition ====================

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// ==================== for...in Loop ====================

for (let key in circle) {
  console.log(key, circle[key]);
}

// ==================== for...of with Object.keys ====================

for (let key of Object.keys(circle)) {
  console.log(key);
}

// ==================== for...of with Object.values ====================

for (let value of Object.values(circle)) {
  console.log(value);
}

// ==================== for...of with Object.entries ====================

for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// ==================== Property Existence Check ====================

if ("radius" in circle) {
  console.log("yes");
}
