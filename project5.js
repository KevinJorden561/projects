const array = [13, 6, 34, 7, 21];

function sumOfArray(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }
  return totalSum;
}
console.log(sumOfArray(array));
