// ===========================================================
//              Memory Allocation and Deallocation
// ===========================================================
// JavaScript automatically manages memory by:
//   - Allocating memory when variables or objects are created.
//   - Deallocating memory via garbage collection when objects are no longer referenced.
//
// -----------------------------------------------------------
// Why Does JavaScript Have Garbage Collection (GC)?
// -----------------------------------------------------------
// Although Java is widely known for its JVM (Java Virtual Machine) and garbage collection, it's not the only language
// that uses automatic memory management. JavaScript also has built-in GC provided by the JavaScript engines (such as V8,
// SpiderMonkey, and JavaScriptCore) that power various browsers and runtimes.
//
// JavaScript includes GC to simplify memory management for developers, avoiding manual allocation and freeing of memory,
// thereby preventing common errors such as memory leaks, dangling pointers, or accidental double-freeing.
//
// -----------------------------------------------------------
// JavaScript vs Java Garbage Collection
// -----------------------------------------------------------
//   | Aspect                | Java                                   | JavaScript                              |
//   |-----------------------|----------------------------------------|-----------------------------------------|
//   | Runtime Environment   | JVM (Java Virtual Machine)             | JavaScript Engines (e.g. V8, SpiderMonkey, JavaScriptCore) |
//   | Compilation Style     | Compiles to bytecode                   | Typically Just-In-Time (JIT) compiled   |
//   | Memory Management     | Automatic via Garbage Collection       | Automatic via Garbage Collection        |
//   | Common GC Algorithms  | Generational, Mark-and-Sweep, G1 algorithm | Mark-and-Sweep, Generational, Incremental GC  |
//
// In short, JavaScript has automatic garbage collection integrated into its runtime environment, similar to Java,
// though it doesn't require a JVM to achieve this.

let circle = {}; // Memory allocated for an empty object
console.log(circle); // Logs the object, which is still referenced
