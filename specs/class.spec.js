const Class = require("../src/class");
const chai = require("chai");
const assert = chai.assert;
const obj = new Class();

describe("Testing the add method", function () {
  before(() => console.log("Testing started for all test cases of add method"));
  after(() => console.log("Tested all test cases for add method"));

  it("Add values", function () {
    assert.equal(obj.add(1, 2), 3);
    assert.equal(obj.add(100, 132), 232);
  });
});

describe("Testing the subtract method", function () {
  before(() =>
    console.log("Testing started for all test cases of subtract method")
  );
  after(() => console.log("Tested all test cases for subtract method"));

  beforeEach(() => alert("This will be executed before every test case "));

  afterEach(() => alert("This will be executed after every test case "));

  it("Subtract values - Test Case 1", function () {
    assert.equal(obj.subtract(1, 2), 1);
    assert.equal(obj.subtract(100, 132), 32);
    assert.equal(obj.subtract(100, 999), 899);
  });

  it("Subtract values - Test Case 2", function () {
    assert.equal(obj.subtract(1, 5), 4);
  });
});
