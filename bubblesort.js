const someArray = [2, 6, 1, 12, 3, 122, 122];

const bubbleSort = arr => {
  const len = arr.length;

  for(let i = len; i > 0; i--) {
    for(let j = 0; j <= len; j++) {
      if(arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(someArray));