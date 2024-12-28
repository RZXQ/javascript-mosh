// Task: Define price ranges and restaurant data
// PriceRanges: Array of objects with labels, tooltips, and min-max per person values
// restaurants: Array of objects with averagePerPerson property

const PriceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [{ averagePerPerson: 5 }];
