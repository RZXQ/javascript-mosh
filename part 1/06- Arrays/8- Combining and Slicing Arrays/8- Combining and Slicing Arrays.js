/// 1. This example demonstrates array methods `concat` and `slice`:
///    - `concat()`: Combines two arrays and returns a new array.
///    - `slice()`: Returns a shallow copy of a portion of an array.

const first = [{ id: 1 }, 3]; // First array with an object and a number
const second = [4, 5, 6]; // Second array with numbers

// 1. concat(): Combines arrays into a new array
const combined = first.concat(second); // Creates a new array combining `first` and `second`
first[0].id = 10; // Modifies the object in `first`, reflected in `combined` (reference types)
console.log(combined); // Output: [ { id: 10 }, 3, 4, 5, 6 ]

// 2. slice(): Extracts parts of an array and returns a new array
// 2.1 slice(startIndex, endIndex): Extracts elements from startIndex to endIndex (not inclusive)
const slice1 = combined.slice(2, 4); // Extracts elements at index 2 and 3
console.log(slice1); // Output: [4, 5]

// 2.2 slice(startIndex): Extracts elements from startIndex to the end
const slice2 = combined.slice(2); // Extracts elements from index 2 to the end
console.log(slice2); // Output: [4, 5, 6]

// 2.3 slice(): Returns a shallow copy of the entire array
const slice3 = combined.slice(); // Creates a full copy of the array
console.log(slice3); // Output: [ { id: 10 }, 3, 4, 5, 6 ]
