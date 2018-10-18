const someArray = [1, 5, 2, 222, 123];

// Функция дробилка
const partition = (arr, low, hi) => {
  const pivotPosition = Math.floor((low + hi) / 2) ;
  const pivot         = arr[pivotPosition];

  while(hi >= low) {
    while(arr[hi] > pivot) {
      hi--;
    }
    while(arr[low] < pivot) {
      low++;
    }
    if(hi >= low) {
      const temp = arr[low];
      arr[low] = arr[hi];
      arr[hi] = temp;
      hi--;
      low++;
    }
  }
  return low;
} 

const qsort = (arr, low = 0, hi = arr.length-1) => {
  if(low < hi) {
    const index = partition(arr, low, hi);
    qsort(arr, low, index-1);
    qsort(arr, index, hi);
  }
  return arr;
}

console.log(qsort(someArray));
