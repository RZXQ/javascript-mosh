// Description:
// The function `isLandscape` determines if an image is in landscape orientation.
// It takes two parameters, `width` and `height`,
// and returns `true` if the `width` is greater than the `height`,
// indicating a landscape orientation. Otherwise, it returns `false`.

console.log(isLandscape(300, 600));

function isLandscape(width, height) {
  return width > height;
}
