const person = { name: "Reacher", age: 33 };

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}

for (let i of colors) {
  console.log(i);
}
