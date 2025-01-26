// ===========================================================
//                      Object Definition
// ===========================================================

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// ===========================================================
//                   1. Manual Cloning
// ===========================================================

const another1 = {};
for (let key in circle) {
  another1[key] = circle[key];
}

// ===========================================================
//              2. Object.assign Cloning
// ===========================================================
// Note: Copies properties to target and returns target

const another2 = Object.assign({ color: "yellow" }, circle);

// ===========================================================
//              3. Spread Operator Cloning
// ===========================================================

const another3 = { ...circle, color: "yellow" };
