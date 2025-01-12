/*
==================================================
             Why is it called WeakMap?
==================================================
WeakMap is a dictionary where keys must be objects.
- The "weak" reference means that if there are no other references to a key object,
  both the key and its associated value in the WeakMap will be garbage collected.
- This prevents memory leaks when using private data for objects.

==================================================
             Comparing WeakMap and Symbol
==================================================
| Feature             | WeakMap                                                                                     | Symbol                                                                                     |
|---------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Garbage Collection  | Keys are weakly referenced, so private data is garbage collected when the object is unused. | Properties remain attached to the object and persist until the object itself is garbage collected. |
| Accessibility       | Fully private; only accessible if you have a reference to the WeakMap.                     | Private-like; can still be accessed using Object.getOwnPropertySymbols().                |
| Complexity          | Requires maintaining an external WeakMap for private data.                                 | Simpler to implement; properties are stored directly on the object.                      |
| Performance         | Slightly slower because WeakMap is an external data structure.                             | Faster as no external structure is needed.                                               |
| Use Case            | Ideal for strong encapsulation and when private data should not pollute the object itself. | Best for lightweight private properties where full encapsulation isn’t critical.         |
==================================================
*/

// ================================================================
//                    Private Properties with WeakMap
// ================================================================
const _radius = new WeakMap(); // Stores private radius
const _move = new WeakMap(); // Stores private move method

class Circle {
  // ================================================================
  //               Constructor: Private Property Initialization
  // ================================================================
  constructor(radius) {
    _radius.set(this, radius); // Set private radius
    _move.set(this, () => console.log("move", this)); // Set private method with correct `this`
  }

  // ================================================================
  //                 Public Method: Access Private Data
  // ================================================================
  draw() {
    console.log(_radius.get(this)); // Access private radius
    _move.get(this)(); // Call private move method
  }
}

// ================================================================
//                       Instance Creation
// ================================================================
const c = new Circle(3);
c.draw(); // Output: 3, "move Circle {...}"
