function bubbleSort (arr) {
  let swapped = true;
  for (let j = 0; swapped; j++) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        swapped = true;
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}

arr = [-6, 20, 8, -2, 4];
console.log(bubbleSort(arr));

// Big-O = O(n^2)
