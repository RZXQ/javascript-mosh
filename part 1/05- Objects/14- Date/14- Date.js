// ===========================================================
//                   Creating Date Objects
// ===========================================================

const now = new Date(); // Current date and time object
const date1 = new Date("28 Dec 2024 23:51"); // Date from a string representation
const date2 = new Date(2018, 4, 11, 9); // Date using year, month (0-based), day, hour
console.log(date2); // Logs created date object (output depends on timezone)

// ===========================================================
//                  Getters and Setters
// ===========================================================

console.log(now.setFullYear(2017)); // Updates year to 2017; returns timestamp
console.log(now.getMonth()); // Gets month (0-based, 0 = January)
console.log(now.getDate()); // Gets day of the month (1-31)

// ===========================================================
//                  Displaying Dates
// ===========================================================

console.log(now.toDateString()); // Human-readable date format, e.g., "Fri Dec 01 2023"
console.log(now.toTimeString()); // Human-readable time format, e.g., "14:30:00 GMT+0000"
console.log(now.toISOString()); // ISO standardized UTC date and time, e.g., "2023-12-01T14:30:00.000Z"
