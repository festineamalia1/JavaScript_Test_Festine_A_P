// Expected Result = 55
// Direction : Return sum of array

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ar = [1,3];

function result(input) {
  // Your Code Here
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

console.log(result(input));