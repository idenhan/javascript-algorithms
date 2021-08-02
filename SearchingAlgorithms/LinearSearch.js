// function linearSearch(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

function linearSearch(arr, val) {
  return arr.indexOf(val);
}

console.log(linearSearch([34, 51, 56, 1, 2], 56));

/* BIG O */
// Best: O(1)
// Average: O(n)
// Worst: O(n)
