// Expected Result = 55
// Direction : Return sum of array

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
for (var i = Array.length; i--; ) {
  input += Array[i];
}
}

console.log(result(input));