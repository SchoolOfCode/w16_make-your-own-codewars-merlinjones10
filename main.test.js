//👉 Write your tests below here:
// const { default: calorieCheck } = require("./main");
const calorieCheck = require("./main");

const testItem = { name: "chips", calories: 200 };
test("returns true if an objects calorie id is lower than 300", () => {
  expect(calorieCheck(testItem)).toBe(true);
});

// const testItem = { name: "chips", calories: 200 };
test("returns true if an objects calorie id is lower than 300", () => {
  expect(calorieCheck(testItem)).toBeTruthy();
});
