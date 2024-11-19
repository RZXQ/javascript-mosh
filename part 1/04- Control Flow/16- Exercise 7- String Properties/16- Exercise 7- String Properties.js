const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let i in obj) {
    if (typeof obj[i] === "string") {
      console.log(i, obj[i]);
    }
  }
}
