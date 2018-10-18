const someArray = [2, 6, 1, 12, 3, 122, 122];

const qsort = arr => {
  if(arr.length < 2) {
    return arr;  
  }
  const pivotPos = Math.floor(arr.length/2);
  const pivot    = arr[pivotPos];
  const less     = arr.filter(val => val < pivot);
  const greater  = arr.filter(val => val > pivot);
  const equal    = arr.filter(val => val === pivot);

  return [
    ...qsort(less),
    ...equal,
    ...qsort(greater),
  ]
};

console.log(qsort(someArray));