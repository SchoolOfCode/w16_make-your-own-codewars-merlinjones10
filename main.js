/* 
👉 Write your kata here!
Gregg needs to stay below 200 calories for lunch. Write a function that returns true if the food item is less than 300 {
    the food item is a key value pair with name and the calories e.g {chips: 400}
}
*/

// let testFood = {
//   name: "chips",
//   calories: "100",
// };

//👉 Write the function your CodeWarriors will start with below here:
function calorieCheck(foodItem) {
  if (foodItem.calories < 300) return true;
  return false;
}
console.log(calorieCheck({ name: "chips", calories: 900 }));

// console.log(calorieCheck(testFood));
// export default calorieCheck;
module.exports = calorieCheck;
