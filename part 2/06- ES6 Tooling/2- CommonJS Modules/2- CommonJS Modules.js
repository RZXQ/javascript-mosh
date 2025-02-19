// Require Statement	    Works?      Reason
// require("circle")	    ❌	        Node.js thinks it's a package in node_modules
// require("./circle")	    ✅	        Explicitly tells Node.js it's a local file
// require("../circle")	    ✅	        Access a file one level up

const Circle = require("circle");

const circle = new Circle(1);
console.log(circle);
