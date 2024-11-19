// Hour
// if hour is between 6am and 12pm : Good morning!
// if it is between 12pm and 6pm: Good afternoon!
// otherwise: Good evening!

let hour = 6;
if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
