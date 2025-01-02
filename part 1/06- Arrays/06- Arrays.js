// Example arrays for demonstration
let arr = [1, -2, 3, 4, 5];
let first = [{ id: 1 }, 3];
let second = [4, 5, 6];
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

// ====================== Adding Elements ======================
arr.push(6);
arr.unshift(0);
arr.splice(1, 2, "a");

// ====================== Finding Elements ======================
arr.indexOf(2);
arr.lastIndexOf(2);
arr.includes(1);
courses.find((c) => c.name === "c");

// ====================== Removing Elements ======================
arr.pop();
arr.shift();
arr.splice(1, 1);

// ====================== Emptying an Array ======================
arr = [];
arr.length = 0;
arr.splice(0, arr.length);
while (arr.length) arr.pop();
while (arr.length) arr.shift();

// ====================== Combining and Slicing Arrays ======================
first.concat(second);
arr.slice(1, 3);
const combined = [...first, { id: 1 }, ...second];

// ====================== Iterating Arrays ======================
for (let num of arr) console.log(num);
arr.forEach((num, idx) => console.log(idx, num));

// ====================== Joining Arrays ======================
arr.join("-");

// ====================== Sorting Elements ======================
arr.sort();
arr.reverse();
courses.sort((a, b) => a.id - b.id);

// ====================== Testing Elements ======================
arr.every((num) => num > 0);
arr.some((num) => num > 0);

// ====================== Filtering Elements ======================
arr.filter((num) => num < 0);

// ====================== Mapping Elements ======================
arr.map((num) => ({ id: num }));

// ====================== Reducing Elements ======================
arr.reduce((acc, num) => acc + num, 0);
arr.reduce((acc, num) => acc + num);
