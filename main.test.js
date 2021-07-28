//👉 Write your tests below here:
// const { default: calorieCheck } = require("./main");
const calorieCheck = require("./main");

const testItem = { name: "chips", calories: 200 };
//
test("returns true if an objects calorie id is lower than 300", () => {
  expect(calorieCheck(testItem)).toBe(true);
});

test("returns true if an objects calorie id is lower than 300", () => {
  expect(calorieCheck(testItem)).toBeTruthy();
});

const cases = [
  [{ name: "muffin", calories: 100 }, true],
  [{ name: "burger", calories: 600 }, false],
  [{ name: "salad", calories: "50" }, true],
  [{ name: "deep fried pizza", calories: 2000 }, false],
];
describe("calorie checker, returns true if under 300", () => {
  test.each(cases)(
    "given an object as an argument, returns true if that objects calorie id is under 300",
    (object, expectedResult) => {
      const result = calorieCheck(object);
      expect(result).toEqual(expectedResult);
    }
  );
});
