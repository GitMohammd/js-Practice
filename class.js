// asdf
let rectengle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// console.log(rectengle.name);

rectengle = class rectengle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// console.log(rectengle.name);

class House {
  constructor(color) {
    this.color = color;
  }
  getFarniture() {
    return "sofa";
  }
}

const houseObject = new House("red");

console.log(houseObject, houseObject.color);
console.log(houseObject.getFarniture());
