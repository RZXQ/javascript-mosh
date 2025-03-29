// Task:
// Define a constructor function for creating blog post objects.
// Each post should have title, body, author, and views as required properties.
// Optionally include comments and a publication status (isLive).
// Create an example post object and output it to the console.

function Post(title, body, author, views, comments, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;

  this.comments = comments || "comments";
  this.isLive = isLive || "isLive";
}

const post = new Post("a", "b", "c", "d");
console.log(post);
