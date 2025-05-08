function HTMLElement() {
  this.click = () => console.log("click");
}

HTMLElement.prototype.focus = () => console.log("focus");

//////////////////////////////////////////////////////////////////////////////

function HTMLSelectElement(items = []) {
  this.items = items;

  this.addItems = (item) => this.items.push(item);

  this.removeItem = (item) => this.items.splice(this.items.indexOf(item), 1);
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.render = function () {
  return `<select>${this.items
    .map(
      (item) => `
  <option>${item}</option>`,
    )
    .join("")}
</select>`;
};

//////////////////////////////////////////////////////////////////////////////

function HTMLImageElement(src = "") {
  this.src = src;
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.render = function () {
  return `<img src="${this.src}" />`;
};

//////////////////////////////////////////////////////////////////////////////

const elements = [
  new HTMLSelectElement([1, 2, 3]),
  new HTMLImageElement("https://"),
];

for (let i of elements) {
  console.log(i.render());
}
