const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

/* BIG O */
// Best: O(nlogn)
// Average: O(nlogn)
// Worst: O(n^2)
// Space Complexity: O(logn)
