// ==================== Object Definition ====================
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// ==================== Iteration ====================
for (let key in circle) console.log(key, circle[key]); // for...in
for (let key of Object.keys(circle)) console.log(key); // Keys only
for (let value of Object.values(circle)) console.log(value); // Values only
for (let [key, value] of Object.entries(circle)) console.log(key, value); // Entries

// ==================== Property Check ====================
if ("radius" in circle) console.log("yes");
