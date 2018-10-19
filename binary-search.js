const someArray = [1, 5, 2, 11, 3, 55, 16, 9];

const binarySearch = (arr, finder) => {
	let start  = 0;
	let end   = arr.length - 1;
	let middle = Math.floor((start + end) / 2);
	
	while (arr[middle] !== finder && start < end) {
		if (finder < arr[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
		
		middle = Math.floor((start + end) / 2);
	}
	
	return (arr[middle] !== finder) ? -1 : middle;
}

console.log(binarySearch(someArray, 11));

