// function binarySearch(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== val && start <= end) {
//     if (val < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] === val) {
//     return middle;
//   }
//   return -1;
// }

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));

/* BIG O */
// Best: O(1)
// Average: O(logN);
// Worst: O(logN);
