// ===========================================================
//                   Creating Date Objects
// ===========================================================

const now = new Date(); // Current date and time
const date1 = new Date("28 Dec 2024 23:51"); // String format
const date2 = new Date(2018, 4, 11, 9); // Year, month (0-indexed), day, hour
console.log(date2); // 2018-05-11T09:00:00.000Z (timezone dependent)

// ===========================================================
//                  Getters and Setters
// ===========================================================

console.log(now.getDate()); // Day of the month (1-31)
console.log(now.setFullYear(2017)); // Sets the year to 2017, returns updated timestamp

// ===========================================================
//                  Displaying Dates
// ===========================================================

console.log(now.toDateString()); // Human-readable date, e.g., "Fri Dec 01 2023"
console.log(now.toTimeString()); // Human-readable time, e.g., "14:30:00 GMT+0000"
console.log(now.toISOString()); // ISO 8601 string, e.g., "2023-12-01T14:30:00.000Z"
