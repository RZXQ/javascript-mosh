/*
EXPLANATION OF CLOSURE IN THIS CODE:

When you call `new Circle(10)`, the `Circle` function runs and creates:
 - Private variables: color, defaultLocation, and computeOptimumLocation
 - Public properties and methods: radius, draw

Normally, once a function finishes executing, its local variables are no longer accessible
and can be garbage-collected. However, in this case, the `draw` method, defined inside
`Circle`, creates a closure. This closure captures the private variables, keeping them
alive as long as the `draw` method exists.

This means that even after the `Circle` function has returned the new object, `draw`
still has access to `color`, `defaultLocation`, and `computeOptimumLocation`. Without
the closure, you wouldn’t be able to directly access these private variables after
`Circle` completes, but `draw` can still “see” them because it was defined in the same
scope where those variables were created.

As long as the circle object exists in memory, the draw method (and the closure it forms)
will also exist in memory. Even if you never call circle.draw(), the closure is still there
because the circle object references the draw method, and draw references the closure.

**In a closure, the nested inner function does not keep public properties (defined on this)
as part of the closure context.** Public properties are directly attached to the object
instance (e.g., this.publicProp), so they do not belong to the local scope of the outer
function. Closures only capture variables from the **lexical scope** (the local scope)
of the outer function.

In simpler terms:
- You can’t directly get `defaultLocation` from `circle` because it’s private.
- But `draw` can still access `defaultLocation` due to the closure.
- The closure is what allows `draw` to “remember” and use variables from `Circle`’s scope
  even after `Circle` has finished executing.

Diagram:
Circle scope:
   ├── color (private)
   ├── defaultLocation (private)
   ├── computeOptimumLocation (private)
   └── this.draw() (public, captures these private variables via closure)
*/
function Circle(radius) {
  let color = "red";
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    // Logic for computation
  };

  this.radius = radius; // Public property

  this.draw = function () {
    console.log("draw");
    console.log(defaultLocation); // Accesses private variable due to closure
    console.log(this.radius); // this.radius is not part of the closure context, even if you access it inside the draw method.
  };
}

const circle = new Circle(10);
console.log(circle.defaultLocation); // undefined, not directly accessible
