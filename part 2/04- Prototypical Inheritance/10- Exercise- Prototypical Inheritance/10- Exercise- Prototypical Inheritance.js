// =====================
// TASK VISUAL DIAGRAM
// =====================
//
// HtmlElement (constructor)
//   |
//   |-- this.click   // instance method
//   |
//   |-> HtmlElement.prototype
//          |
//          |-- focus  // prototype method
//
// HtmlSelectElement (constructor)
//   |
//   |-- this.items
//   |-- this.addItems
//   |-- this.removeItem
//   |
//   |-> HtmlSelectElement.prototype = new HtmlElement()
//
// Inheritance chain:
// s (HtmlSelectElement instance)
//   |
//   |-- .items, .addItems, .removeItem
//   |
//   |-> prototype → (HtmlElement instance):
//                   |
//                   |-- click   // from HtmlElement constructor
//                   |-> prototype (HtmlElement.prototype):
//                                  |
//                                  |-- focus // prototype method
//
// USAGE:
//   const s = new HtmlSelectElement()
//   s.click()   // logs "click"
//   s.focus()   // logs "focus"
// =====================

function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItems = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();

console.log(s);
