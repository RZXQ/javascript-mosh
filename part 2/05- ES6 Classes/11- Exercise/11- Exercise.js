class Stack {
  #arr;

  constructor() {
    this.#arr = [];
  }

  peek() {
    if (this.#arr.length <= 0) throw new Error("Stack is empty");

    return this.#arr[this.#arr.length - 1];
  }

  push(value) {
    this.#arr.push(value);
  }

  pop() {
    if (this.#arr.length <= 0) throw new Error("Stack is empty");
    return this.#arr.splice(this.#arr.length - 1, 1);
  }
}

const stack = new Stack();

stack.push("a");
stack.push("b");
stack.push("c");

stack.pop();
stack.pop();
console.log(stack.peek());
