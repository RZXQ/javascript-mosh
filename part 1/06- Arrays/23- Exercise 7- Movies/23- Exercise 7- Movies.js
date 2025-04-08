/*
/*
TASK DESCRIPTION:

Write a JavaScript program that processes an array of movie objects and performs the following tasks:

1. Filter movies based on the following criteria:
   - Year released should be exactly `2018`.
   - Movie rating must be greater than `4`.

2. Sort the filtered movies in descending order based on their rating (highest rating first).

3. Extract and return only the titles of the resulting movies from the sorted list.

Implementation details:
- Use JavaScript array methods: `filter()`, `sort()`, and `map()`.

Example data provided for testing:
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

Example output:
["b", "a"]
*/

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

console.log(
  movies
    .filter((m) => m.rating >= 4 && m.year === 2018)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((a) => a.title),
);
