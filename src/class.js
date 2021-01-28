class Class {
  constructor() {
    console.log("We are inside constructor");
  }

  add(value1, value2) {
    const sum = value1 + value2;
    return sum;
  }

  subtract(value1, value2) {
    const difference = value2 - value1;
    return difference;
  }
}

module.exports = Class;
