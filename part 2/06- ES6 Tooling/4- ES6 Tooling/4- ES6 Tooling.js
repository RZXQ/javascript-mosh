// Why Bundle? (Webpack)
// Problem: Your website loads VERY slowly

// Without bundling - browser makes 100+ requests
// import './file1.js'  // Request 1
// import './file2.js'  // Request 2
// import './file3.js'  // Request 3
// ... 97 more files
// = 100 requests = SLOW website

// With bundling - browser makes 1 request
// All 100 files combined into 1 big file
// = 1 request = FAST website

// Simple answer: Fewer requests = faster website

// Why Babel?
// Problem: Your code breaks on some phones/computers

// Modern JavaScript
// const name = user?.name; // This breaks on older phones

// Babel converts to old JavaScript
// const name = user && user.name; // This works everywhere

// Simple answer: Your code works on ALL devices, not just new ones

// Real Example
// Without tools: Website takes 10 seconds to load, breaks on 20% of phones
// With tools: Website takes 2 seconds to load, works on 100% of devices

// That's it! Everything else is just details.
// The tools make your website faster and work everywhere.
