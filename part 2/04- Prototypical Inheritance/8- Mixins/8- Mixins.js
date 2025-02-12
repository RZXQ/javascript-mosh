// ===========================================================
//                    Mixin Utility Function
// ===========================================================
// ...sources: Rest operator
function mixin(target, ...sources) {
  Object.assign(target, ...sources); // ...sources: Spread operator
}

// ===========================================================
//                    Mixin Behaviors
// ===========================================================
const canEat = {
  eat() {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk() {
    console.log("walking");
  },
};

const canSwim = {
  swim() {
    console.log("swimming");
  },
};

// ===========================================================
//                  Constructor Functions
// ===========================================================
function Person() {}

function Goldfish() {}

// ===========================================================
//                    Apply Mixins
// ===========================================================
mixin(Person.prototype, canEat, canWalk); // Person has both eat and walk behaviors
mixin(Goldfish.prototype, canEat, canSwim); // Goldfish has eat and swim behaviors

// ===========================================================
//                      Usage Example
// ===========================================================
const p = new Person();
const f = new Goldfish();

console.log(p); // Person object with eat and walk methods
console.log(f); // Goldfish object with eat and swim methods
