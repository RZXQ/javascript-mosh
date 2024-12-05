// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

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
